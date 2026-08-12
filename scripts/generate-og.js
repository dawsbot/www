#!/usr/bin/env node
/**
 * Renders every blog post's social card to public/og/<slug>.png.
 *
 * The /og/<slug> route is statically generated, so this screenshots the built
 * HTML with headless Chrome at 1200x630 and a 2x device pixel ratio — the
 * committed PNG is 2400x1260. Rendering through the real page means the card
 * always uses the post's actual title and the site's own Archivo/lime palette.
 *
 *   npm run og              # every post
 *   npm run og -- <slug>    # just one
 *
 * Runs `next build` first unless the pages are already built (--no-build to
 * skip). Set CHROME_BIN if Chrome lives somewhere unusual.
 */
const { execFileSync, spawn } = require('child_process');
const fs = require('fs');
const http = require('http');
const os = require('os');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'og');
const POSTS_FILE = path.join(ROOT, 'src', 'blog', 'posts.js');
const BUILT_PAGES = path.join(ROOT, '.next', 'server', 'pages', 'og');
const WIDTH = 1200;
const HEIGHT = 630;
const SCALE = 2;

const CHROME_CANDIDATES = [
  process.env.CHROME_BIN,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);

function findChrome() {
  const chrome = CHROME_CANDIDATES.find(p => fs.existsSync(p));
  if (!chrome) {
    throw new Error(
      `Could not find Chrome. Tried:\n  ${CHROME_CANDIDATES.join(
        '\n  ',
      )}\nSet CHROME_BIN to your Chrome binary and re-run.`,
    );
  }
  return chrome;
}

// Read slugs straight out of the post registry so a new post is picked up with
// no extra bookkeeping. Assumes the `slug: '...'` shape in src/blog/posts.js.
function readSlugs() {
  const source = fs.readFileSync(POSTS_FILE, 'utf8');
  const slugs = [...source.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);
  if (slugs.length === 0) {
    throw new Error(`No "slug: '...'" entries found in ${POSTS_FILE}`);
  }
  return slugs;
}

function builtPageFor(slug) {
  return path.join(BUILT_PAGES, `${slug}.html`);
}

function build() {
  console.log('Building (needed to render the card pages)...');
  execFileSync(path.join(ROOT, 'node_modules', '.bin', 'next'), ['build'], {
    cwd: ROOT,
    stdio: 'inherit',
  });
}

// Serve the built HTML over http rather than file:// so the page keeps a normal
// origin while it pulls the webfont. Port 0 = let the OS pick a free one, so
// this never collides with a dev server you have running.
function serve(slugs) {
  const server = http.createServer((req, res) => {
    const slug = decodeURIComponent(req.url.replace(/^\/+/, ''));
    if (!slugs.includes(slug)) {
      res.writeHead(404).end('not found');
      return;
    }
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.end(fs.readFileSync(builtPageFor(slug)));
  });
  return new Promise(resolve => {
    server.listen(0, '127.0.0.1', () =>
      resolve({ server, port: server.address().port }),
    );
  });
}

// Headless Chrome writes the PNG and then, often as not, just sits there
// instead of exiting. So don't wait on the process: poll for the file, and
// once it lands, kill Chrome ourselves.
function screenshot(chrome, url, outFile) {
  // A throwaway profile keeps this from fighting with a Chrome you have open.
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'og-chrome-'));
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-extensions',
    '--disable-sync',
    `--user-data-dir=${profile}`,
    `--force-device-scale-factor=${SCALE}`,
    `--window-size=${WIDTH},${HEIGHT}`,
    '--virtual-time-budget=5000', // let the webfont land before capturing
    `--screenshot=${outFile}`,
    url,
  ];

  fs.rmSync(outFile, { force: true });
  const child = spawn(chrome, args, { stdio: 'ignore' });

  return new Promise((resolve, reject) => {
    let settled = false;
    const finish = error => {
      if (settled) return;
      settled = true;
      clearInterval(poll);
      clearTimeout(hardStop);
      child.kill('SIGKILL');
      fs.rmSync(profile, { recursive: true, force: true });
      if (error) reject(error);
      else resolve();
    };

    const poll = setInterval(() => {
      // Give the write a beat to flush before we pull the rug out.
      if (fs.existsSync(outFile) && fs.statSync(outFile).size > 0) {
        clearInterval(poll);
        setTimeout(() => finish(), 400);
      }
    }, 200);

    const hardStop = setTimeout(
      () => finish(new Error(`Timed out rendering ${url}`)),
      60000,
    );

    child.on('error', finish);
    child.on('exit', () => {
      if (fs.existsSync(outFile)) finish();
    });
  });
}

async function main() {
  const args = process.argv.slice(2);
  const skipBuild = args.includes('--no-build');
  const only = args.find(a => !a.startsWith('--'));

  const chrome = findChrome();
  const slugs = readSlugs().filter(slug => !only || slug === only);
  if (slugs.length === 0) throw new Error(`No post matches slug "${only}"`);

  if (!skipBuild || slugs.some(slug => !fs.existsSync(builtPageFor(slug)))) {
    build();
  }

  const missing = slugs.filter(slug => !fs.existsSync(builtPageFor(slug)));
  if (missing.length > 0) {
    throw new Error(
      `Built card page missing for: ${missing.join(', ')}\n` +
        `Expected ${builtPageFor(
          missing[0],
        )} — is pages/og/[slug].js still there?`,
    );
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const { server, port } = await serve(slugs);

  try {
    for (const slug of slugs) {
      const outFile = path.join(OUT_DIR, `${slug}.png`);
      await screenshot(chrome, `http://127.0.0.1:${port}/${slug}`, outFile);
      const kb = Math.round(fs.statSync(outFile).size / 1024);
      console.log(
        `  ${path.relative(ROOT, outFile)}  ${WIDTH * SCALE}x${HEIGHT *
          SCALE}  ${kb}kb`,
      );
    }
    console.log(`Done — ${slugs.length} card(s).`);
  } finally {
    server.close();
  }
}

main().catch(error => {
  console.error(`\nog: ${error.message}`);
  process.exit(1);
});
