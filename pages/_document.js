import React from 'react';
import Document, { Head, Main, NextScript, Html } from 'next/document';

import { ServerStyleSheet } from 'styled-components';
import { renderStatic } from 'glamor/server';

import { DEFAULT_TITLE } from './_app';
import Fonts from '../src/components/presentational/Fonts';
import { themes } from '../src/components/themes';

const allFontImports = [themes['swiss-modernist'].fontImport];

const DEFAULT_DESCRIPTION =
  'Dawson Botsford is a CTO and engineering leader specializing in AI strategy, fintech infrastructure, and open source software. Builder of neobanking products, Ethereum tools, and developer platforms.';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage();
    const originalRenderPage = ctx.renderPage;
    const styles = renderStatic(() => page.html || page.errorHtml);

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        ...styles,
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

  componentDidMount() {
    Fonts();
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
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          {/* Primary Meta Tags */}
          <meta name="author" content="Dawson Botsford" />
          <meta name="description" content={DEFAULT_DESCRIPTION} />
          <meta
            name="keywords"
            content="CTO, AI consulting, AI strategy, fintech, neobanking, digital banking, Ethereum, blockchain, web3, open source, JavaScript, TypeScript, React, Node.js, software engineering, technical leadership, fractional CTO, engineering management"
          />
          <link rel="canonical" href="https://dawsbot.com" />

          {/* Google / Search Engine Tags */}
          <meta itemProp="name" content="Dawson Botsford" />
          <meta itemProp="description" content={DEFAULT_DESCRIPTION} />
          <meta itemProp="image" content="https://dawsbot.com/my-face.jpg" />

          {/* Open Graph / Facebook */}
          <meta property="og:url" content="https://dawsbot.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={DEFAULT_TITLE} />
          <meta property="og:description" content={DEFAULT_DESCRIPTION} />
          <meta property="og:image" content="https://dawsbot.com/my-face.jpg" />
          <meta property="og:site_name" content="Dawson Botsford" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@dawsonbotsford" />
          <meta name="twitter:creator" content="@dawsonbotsford" />
          <meta name="twitter:title" content={DEFAULT_TITLE} />
          <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
          <meta
            name="twitter:image"
            content="https://dawsbot.com/my-face.jpg"
          />

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

          <link
            rel="shortcut icon"
            href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/male-mechanic-type-1-2_1f468-1f3fb-200d-1f527.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
