import React from 'react';
import Head from 'next/head';

import { getPostBySlug, postSlugs } from '../../src/blog/posts';

// The social card, rendered as a real page so it can never drift from the post
// data or the site's palette. `npm run og` screenshots this route at 1200x630
// into public/og/<slug>.png — it is not meant to be linked or crawled.
function OgCard({ slug }) {
  const post = getPostBySlug(slug);

  if (!post) return null;

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="og-card">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body { margin:0; padding:0; background:#0e0e0e; }
              .og-card {
                width:1200px; height:630px; box-sizing:border-box;
                background:#0e0e0e; padding:0 74px;
                display:flex; flex-direction:column; justify-content:center;
                font-family:'Archivo','Helvetica Neue',Arial,sans-serif;
                overflow:hidden;
              }
              .og-eyebrow { display:flex; align-items:center; gap:16px; margin-bottom:40px; }
              .og-eyebrow i { width:22px; height:22px; background:#c4f000; flex:none; }
              .og-eyebrow span {
                color:#ffffff; font-weight:800; font-size:22px;
                letter-spacing:5px; text-transform:uppercase;
              }
              .og-title {
                margin:0; color:#ffffff; font-weight:900; font-size:96px;
                line-height:0.92; letter-spacing:-0.02em; text-transform:uppercase;
              }
            `,
          }}
        />
        <div className="og-eyebrow">
          <i />
          <span>Blog</span>
        </div>
        <h1 className="og-title">{post.title}</h1>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: postSlugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}

export default OgCard;
