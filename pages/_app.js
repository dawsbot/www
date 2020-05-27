import React from 'react';
import Head from 'next/head';

import TopNav from '../components/container/TopNav';

export const DEFAULT_TITLE = 'Dawson: Software Engineer and React.js Guru';

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
      </Head>
      <TopNav />
      <Component {...pageProps} />
    </>
  );
}

export default App;
