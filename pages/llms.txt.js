import { posts } from '../src/blog/posts';

const SITE = 'https://dawsbot.com';

// Everything above the Writing section is hand-maintained profile copy; the
// Writing section is generated from src/blog/posts.js so a new post shows up
// here automatically.
const PROFILE = `# Dawson Botsford

> CTO, AI strategist, and open source engineer

## About

Dawson Botsford is a technology leader specializing in AI strategy, fintech infrastructure, and open source software. He serves as a CTO and engineering leader, building products in neobanking, blockchain, and developer tools used by thousands of engineers worldwide.

## Current Role

CTO at Dark Triangle -- leading AI strategy, engineering, and product development.

## Areas of Expertise

- AI strategy and consulting
- Technical leadership and engineering management
- Fintech and neobanking infrastructure
- Ethereum, blockchain, and web3
- Open source software engineering
- JavaScript, TypeScript, React, Node.js
- Fractional CTO services

## Key Projects and Achievements

- **Earnifi** (https://earni.fi): Founded an airdrop checker that found $500M+ for web3 users. Acquired by Bankless.
- **Essential Eth** (https://github.com/dawsbot/essential-eth): A lightweight alternative to ethers.js and web3.js with 10x smaller bundle size.
- **Eth Labels** (https://github.com/dawsbot/eth-labels): A public dataset of labeled Ethereum addresses for the crypto ecosystem.
- **Drain** (https://github.com/dawsbot/drain): Drain a wallet of ERC-20 tokens across Ethereum, Polygon, and Arbitrum.
- **Mailto** (https://mailto.vercel.app): A web app for creating email mailto links instantly.
- **Swim** (https://github.com/dawsbot/swim): Switch between multiple vimrc files with ease.
- **RelativePath** (https://github.com/dawsbot/RelativePath): VS Code extension for inserting relative file paths.
- **Vimrc Builder** (https://vimrc-builder.vercel.app): A visual web app for building your perfect vimrc file.
- **txn.xyz** (https://github.com/dawsbot/txn.xyz): Connect any wallet to web3 instantly.
- **Skrub** (https://github.com/dawsbot/skrub): Irreversible file deletion on every operating system.`;

const PROFILES_AND_CONTACT = `## Profiles

- Website: ${SITE}
- GitHub: https://github.com/dawsbot
- Twitter: https://twitter.com/dawsonbotsford
- LinkedIn: https://linkedin.com/in/dawsonbotsford
- YouTube: https://www.youtube.com/c/DawsonBotsford

## Education

University of Colorado

## Contact

Reach out via the contact form at ${SITE} or connect on any of the profiles above.`;

function postLine(post) {
  const parts = [
    `- **${post.title}** (${SITE}/blog/${post.slug}), ${post.dateLabel}: ${post.description}`,
  ];
  if (post.topics && post.topics.length > 0) {
    parts.push(`Topics: ${post.topics.join(', ')}.`);
  }
  if (post.originalUrl) {
    parts.push(`Originally published at ${post.originalUrl}.`);
  }
  return parts.join(' ');
}

export function buildLlmsTxt() {
  const writing = [
    '## Writing',
    '',
    `Blog: ${SITE}/blog`,
    '',
    ...posts.map(postLine),
  ].join('\n');

  return [PROFILE, writing, PROFILES_AND_CONTACT].join('\n\n') + '\n';
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate',
  );
  res.write(buildLlmsTxt());
  res.end();
  return { props: {} };
}

// Never rendered — getServerSideProps writes the response directly.
export default function LlmsTxt() {
  return null;
}
