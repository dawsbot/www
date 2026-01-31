import React from 'react';
import Head from 'next/head';

import TopNav from '../src/components/container/TopNav';
import { ThemeProvider, useTheme } from '../src/components/ThemeContext';

export const DEFAULT_TITLE =
  'Dawson Botsford | CTO, AI & Fintech Leader, Open Source Engineer';

function ThemedApp({ Component, pageProps }) {
  const { theme } = useTheme();

  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${theme.bodyFont};
          width: 100%;
          margin: 0px;
          line-height: 120%;
          font-size: 18px;
          color: ${theme.text};
          background-color: ${theme.bodyBg};
          transition: background-color 0.4s ease, color 0.4s ease;
        }
        h1,
        h2,
        h3,
        h4 {
          font-family: ${theme.headingFont};
          transition: font-family 0.3s ease;
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

function App(props) {
  return (
    <ThemeProvider>
      <ThemedApp {...props} />
    </ThemeProvider>
  );
}

export default App;
