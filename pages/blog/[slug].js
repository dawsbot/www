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
        <meta name="description" content={description} />
        {/* Social cards carry the post title only — no authored summary copy. */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="article:published_time" content={date} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={title} />
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
