import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';
import { renderStatic } from 'glamor/server';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

import { DEFAULT_TITLE } from './_app';
import Fonts from '../components/presentational/Fonts';

const DEFAULT_DESCRIPTION =
  'Dawson Botsford is a recognized React.js expert and software engineer working for a half-decade with the NSA, Uber, and more.';

export default class MyDocument extends Document {
  // static async getInitialProps({ renderPage }) {
  // }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage();
    const originalRenderPage = ctx.renderPage;
    const styles = renderStatic(() => page.html || page.errorHtml);
    // return { ...page, ...styles };

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
    // client-side only
    if (typeof window !== 'undefined') {
      LogRocket.init('ubu2ji/www');
      setupLogRocketReact(LogRocket);
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
