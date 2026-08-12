import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import TopNav from '../src/components/container/TopNav';
import { ThemeProvider, useTheme } from '../src/components/ThemeContext';

export const DEFAULT_TITLE =
  'Dawson Botsford | CTO, AI & Fintech Leader, Open Source Engineer';

export const DEFAULT_DESCRIPTION =
  'Dawson Botsford is a CTO and engineering leader specializing in AI strategy, fintech infrastructure, and open source software. Builder of neobanking products, Ethereum tools, and developer platforms.';

const DEFAULT_IMAGE = 'https://dawsbot.com/my-face.jpg';

function ThemedApp({ Component, pageProps }) {
  const { theme } = useTheme();
  const router = useRouter();
  const canonicalUrl = `https://dawsbot.com${
    router.asPath === '/' ? '' : router.asPath
  }`;

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
        <link rel="canonical" href={canonicalUrl} />

        {/* Site-wide social defaults. Every tag is keyed, so a page rendering
            the same key in its own <Head> replaces it rather than emitting a
            duplicate the scraper has to choose between. */}
        <meta
          key="description"
          name="description"
          content={DEFAULT_DESCRIPTION}
        />
        <meta key="og:title" property="og:title" content={DEFAULT_TITLE} />
        <meta
          key="og:description"
          property="og:description"
          content={DEFAULT_DESCRIPTION}
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:image" property="og:image" content={DEFAULT_IMAGE} />
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={DEFAULT_TITLE}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={DEFAULT_DESCRIPTION}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={DEFAULT_IMAGE}
        />
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
