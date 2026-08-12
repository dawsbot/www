import React from 'react';
import Document, { Head, Main, NextScript, Html } from 'next/document';

import { ServerStyleSheet } from 'styled-components';
import { renderStaticOptimized } from 'glamor/server';

import { DEFAULT_DESCRIPTION } from './_app';
import Fonts from '../src/components/presentational/Fonts';
import { themes, defaultTheme } from '../src/components/themes';

const allFontImports = [themes[defaultTheme].fontImport];

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      // Extract glamor styles from the rendered HTML
      const glamorStyles = renderStaticOptimized(() => initialProps.html);

      return {
        ...initialProps,
        ids: glamorStyles.ids,
        glamorCss: glamorStyles.css,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }
  }

  render() {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Dawson Botsford',
      url: 'https://dawsbot.com',
      image: 'https://dawsbot.com/my-face.jpg',
      jobTitle: 'CTO & Engineering Leader',
      description:
        'Technology leader specializing in AI strategy, fintech infrastructure, neobanking, and open source software engineering.',
      sameAs: [
        'https://github.com/dawsbot',
        'https://twitter.com/dawsonbotsford',
        'https://linkedin.com/in/dawsonbotsford',
        'https://www.youtube.com/c/DawsonBotsford',
      ],
      knowsAbout: [
        'Artificial Intelligence',
        'AI Strategy',
        'AI Consulting',
        'AI Integration',
        'Machine Learning',
        'Fintech',
        'Neobanking',
        'Digital Banking',
        'Ethereum',
        'Blockchain',
        'Web3',
        'Cryptocurrency',
        'Solidity',
        'Smart Contracts',
        'Software Engineering',
        'Technical Leadership',
        'Engineering Management',
        'JavaScript',
        'TypeScript',
        'React',
        'Node.js',
        'Open Source Software',
        'Developer Tools',
        'CTO',
        'Fractional CTO',
      ],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'University of Colorado',
      },
      worksFor: {
        '@type': 'Organization',
        name: 'Dark Triangle',
      },
    };

    return (
      <Html lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.glamorCss }} />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          {/* Primary Meta Tags. Social tags (og:*, twitter:*) and the page
              description live in _app.js so individual pages can override
              them via next/head keys — see pages/blog/[slug].js. */}
          <meta name="author" content="Dawson Botsford" />
          <meta
            name="keywords"
            content="CTO, AI consulting, AI strategy, fintech, neobanking, digital banking, Ethereum, blockchain, web3, open source, JavaScript, TypeScript, React, Node.js, software engineering, technical leadership, fractional CTO, engineering management"
          />

          {/* Google / Search Engine Tags */}
          <meta itemProp="name" content="Dawson Botsford" />
          <meta itemProp="description" content={DEFAULT_DESCRIPTION} />
          <meta itemProp="image" content="https://dawsbot.com/my-face.jpg" />

          {/* Twitter Card (account attribution; never page-specific) */}
          <meta name="twitter:site" content="@dawsonbotsford" />
          <meta name="twitter:creator" content="@dawsonbotsford" />
          <meta property="og:site_name" content="Dawson Botsford" />

          {/* Structured Data (JSON-LD) for AI Discovery */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />

          {/* Theme font imports */}
          {allFontImports.map(url => (
            <link key={url} rel="stylesheet" href={url} />
          ))}

          {/* Black & white "DB" monogram favicon, matching the top nav */}
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
