import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { getPostBySlug, postSlugs } from '../../src/blog/posts';
import { blogCss } from '../../src/blog/styles';

function BlogPost({ slug }) {
  const post = getPostBySlug(slug);

  if (!post) return null;

  const {
    Body,
    title,
    description,
    dateLabel,
    date,
    readingTime,
    standfirst,
  } = post;
  const url = `https://dawsbot.com/blog/${slug}`;
  const pageTitle = `${title} | Dawson Botsford`;
  const image = `https://dawsbot.com/og/${slug}.png`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: {
      '@type': 'Person',
      name: 'Dawson Botsford',
      url: 'https://dawsbot.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Dawson Botsford',
      url: 'https://dawsbot.com',
    },
  };

  return (
    <main className="zb">
      <Head>
        <title>{pageTitle}</title>
        <meta key="description" name="description" content={description} />
        {/* Social cards carry the post title only — no authored summary copy.
            Keys match the defaults in _app.js so these replace them. */}
        <meta key="og:title" property="og:title" content={title} />
        <meta key="og:description" property="og:description" content={title} />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:url" property="og:url" content={url} />
        <meta key="og:image" property="og:image" content={image} />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta property="og:image:alt" content={title} />
        <meta property="article:published_time" content={date} />
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta key="twitter:title" name="twitter:title" content={title} />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={title}
        />
        <meta key="twitter:image" name="twitter:image" content={image} />
        <meta name="twitter:image:alt" content={title} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: blogCss }} />

      <header className="band-dark post-head">
        <div className="wrap-narrow">
          <span className="eyebrow reveal">
            <Link
              href="/blog"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              Blog
            </Link>
          </span>
          <h1 className="post-title reveal" style={{ animationDelay: '0.08s' }}>
            {title}
          </h1>
          {standfirst && (
            <p
              className="post-standfirst reveal"
              style={{ animationDelay: '0.16s' }}
            >
              {standfirst}
            </p>
          )}
          <p className="post-meta reveal" style={{ animationDelay: '0.24s' }}>
            <time dateTime={date}>{dateLabel}</time>
            <span className="sep" aria-hidden="true">
              /
            </span>
            <span>{readingTime}</span>
            <span className="sep" aria-hidden="true">
              /
            </span>
            <span>Dawson Botsford</span>
          </p>
        </div>
      </header>

      <div className="divider" aria-hidden="true" />

      <article className="article">
        <div className="wrap-narrow">
          <Body />
        </div>
      </article>

      <div className="post-foot">
        <div className="wrap-narrow">
          <Link className="btn-ghost" href="/blog">
            <span aria-hidden="true">←</span> All posts
          </Link>
        </div>
      </div>
    </main>
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

export default BlogPost;
