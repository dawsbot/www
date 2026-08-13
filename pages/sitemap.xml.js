import { posts } from '../src/blog/posts';

const SITE = 'https://dawsbot.com';

// Pages that aren't derived from a registry. Bump lastmod when one changes.
const STATIC_PAGES = [
  { path: '/', lastmod: '2026-08-12', changefreq: 'monthly', priority: '1.0' },
  {
    path: '/resume',
    lastmod: '2026-08-11',
    changefreq: 'monthly',
    priority: '0.8',
  },
];

function urlEntry({ path, lastmod, changefreq, priority }) {
  return [
    '  <url>',
    `    <loc>${SITE}${path}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}

export function buildSitemap() {
  // The index is as fresh as the newest thing on it.
  const newestPost = posts
    .map(post => post.date)
    .sort()
    .reverse()[0];

  const entries = [
    ...STATIC_PAGES,
    {
      path: '/blog',
      lastmod: newestPost,
      changefreq: 'weekly',
      priority: '0.8',
    },
    ...posts.map(post => ({
      path: `/blog/${post.slug}`,
      lastmod: post.date,
      changefreq: 'yearly',
      priority: '0.7',
    })),
  ];

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(urlEntry),
    '</urlset>',
    '',
  ].join('\n');
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate',
  );
  res.write(buildSitemap());
  res.end();
  return { props: {} };
}

// Never rendered — getServerSideProps writes the response directly.
export default function Sitemap() {
  return null;
}
