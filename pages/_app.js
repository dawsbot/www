import React from 'react';
import Head from 'next/head';

import TopNav from '../components/container/TopNav';

const DEFAULT_TITLE = 'Dawson: Software Engineer and React.js Guru';
const DEFAULT_DESCRIPTION =
  'Dawson Botsford is a recognized React.js expert and software engineer working for a half-decade with the NSA, Uber, and more.';

function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.1em;
          width: 100%;
          margin: 0px;
          line-height: 120%;
        }
      `}</style>
      <Head>
        <title>{DEFAULT_TITLE}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Dawson Botsford" />
        <meta name="description" content={DEFAULT_DESCRIPTION} />
        <meta
          name="keywords"
          content="consultant,software,coding,React.js,web,Node.js,JavaScript,Web Performance"
        />
        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Dawson Botsford" />
        <meta itemProp="description" content={DEFAULT_DESCRIPTION} />
        <meta itemProp="image" content="https://dawsbot.com/my-face.jpg" />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://dawsbot.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={DEFAULT_TITLE} />
        <meta property="og:description" content={DEFAULT_DESCRIPTION} />
        <meta property="og:image" content="https://dawsbot.com/my-face.jpg" />
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@dawsonbotsford" />
        <meta name="twitter:title" content={DEFAULT_TITLE} />
        <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
        <meta
          name="twitter:image:src"
          content="https://dawsbot.com/my-face.jpg"
        />
        <link
          rel="shortcut icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/male-mechanic-type-1-2_1f468-1f3fb-200d-1f527.png"
        />
      </Head>
      <TopNav />
      <Component {...pageProps} />
    </>
  );
}

export default App;
