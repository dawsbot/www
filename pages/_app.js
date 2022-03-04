import React from 'react';
import Head from 'next/head';

import { darkPurple } from '../src/components/colors';
import TopNav from '../src/components/container/TopNav';

export const DEFAULT_TITLE =
  'Dawson | Founder, web3 builder, and software engineer';

function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: 'Work Sans', sans-serif;
          width: 100%;
          margin: 0px;
          line-height: 120%;
          font-size: 18px;
          color: ${darkPurple};
        }
      `}</style>
      <Head>
        <title>{DEFAULT_TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <TopNav />
      <Component {...pageProps} />
    </>
  );
}

export default App;
