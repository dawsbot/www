import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';
import { renderStatic } from 'glamor/server';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

import Fonts from '../components/presentational/Fonts';

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
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
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
        )
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
          <style jsx global>
            {``}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
