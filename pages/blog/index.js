import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { posts } from '../../src/blog/posts';
import { blogCss } from '../../src/blog/styles';

const TITLE = 'Blog | Dawson Botsford';
const DESCRIPTION =
  'Writing from Dawson Botsford on AI-assisted software engineering, developer tools, fintech, and building on the open web.';

function Blog() {
  return (
    <main className="zb">
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dawsbot.com/blog" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: blogCss }} />

      <section className="band-light" style={{ paddingBottom: '0' }}>
        <div className="wrap">
          <span className="eyebrow reveal">Notes from the build</span>
          <h1 className="page-title reveal" style={{ animationDelay: '0.08s' }}>
            Blog
          </h1>
          <p className="page-intro reveal" style={{ animationDelay: '0.16s' }}>
            Occasional writing on AI-assisted engineering, developer tools, and
            what building software actually feels like right now.
          </p>

          {posts.length === 0 ? (
            <p className="empty">No posts yet. Check back soon.</p>
          ) : (
            <div
              className="post-grid reveal"
              style={{ animationDelay: '0.24s' }}
            >
              {posts.map((post, i) => (
                <Link
                  key={post.slug}
                  className="post-card"
                  href={`/blog/${post.slug}`}
                >
                  <span className="post-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="post-date">{post.dateLabel}</p>
                  <h2 className="post-card-title">{post.title}</h2>
                  <p className="post-card-desc">{post.description}</p>
                  <span className="post-read">
                    {post.readingTime} <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <div style={{ height: '88px' }} />
      <div className="divider" aria-hidden="true" />
    </main>
  );
}

export default Blog;
