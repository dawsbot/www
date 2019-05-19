import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { renderStatic } from 'glamor/server';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

import Fonts from '../components/presentational/Fonts';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = renderStatic(() => page.html || page.errorHtml);
    return { ...page, ...styles };
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
    if (process.browser) {
      LogRocket.init('ubu2ji/www');
      // plugins should also only be initialized when in the browser
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
