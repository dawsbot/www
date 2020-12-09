import React from 'react';
import Head from 'next/head';

import { darkPurple } from '../src/components/colors';
import TopNav from '../src/components/container/TopNav';

export const DEFAULT_TITLE =
  'Dawson | Crypto nerd, Solidity dev & React.js Guru';

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
      </Head>
      <TopNav />
      <Component {...pageProps} />
    </>
  );
}

export default App;
