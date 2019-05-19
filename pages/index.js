import React, { Component } from 'react';
import Head from 'next/head';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

import TopNav from '../components/container/TopNav';
import IndexIndex from '../components/container/IndexIndex';

import { rehydrate } from 'glamor';

// Adds server generated styles to glamor cache.
// Has to run before any `css()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  // eslint-disable-next-line
  rehydrate(window.__NEXT_DATA__.ids);
}

// insertRule(`body {
//   font-family: 'Work Sans', sans-serif;
//   font-size: 1.1em;
//   width: 100%;
//   margin: 0px;
//   line-height: 120%;
// }`);

class Index extends Component {
  componentDidMount() {
    // you can import these packages anywhere

    // only initialize when in the browser
    // eslint-disable-next-line no-undef
    if (process.browser) {
      LogRocket.init('ubu2ji/www');
      // plugins should also only be initialized when in the browser
      setupLogRocketReact(LogRocket);
    }
  }

  render() {
    return (
      <div>
        <Head>
          <title>Dawson | Web Consultant</title>
          <meta charSet="utf-8" />

          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="author" content="Dawson Botsford" />
          <meta
            name="description"
            content="Portfolio of Dawson Botsford. A Web developer, React consultant, and Node.js consultant improving web performance everywhere."
          />

          <meta
            name="keywords"
            content="consultant,software,coding,React.js,web,Node.js,JavaScript,Web Performance"
          />

          {/* <!-- Google / Search Engine Tags --> */}
          <meta itemProp="name" content="Dawson Botsford" />
          <meta
            itemProp="description"
            content="Portfolio of Dawson Botsford. A Web developer, React consultant, and Node.js consultant improving web performance everywhere."
          />
          <meta
            itemProp="image"
            content="https://dawsbot.com/static/my-face.jpg"
          />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:url" content="https://dawsbot.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Dawson Botsford" />
          <meta
            property="og:description"
            content="Portfolio of Dawson Botsford. A Web developer, React consultant, and Node.js consultant improving web performance everywhere."
          />
          <meta
            property="og:image"
            content="https://dawsbot.com/static/my-face.jpg"
          />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Dawson Botsford" />
          <meta
            name="twitter:description"
            content="Portfolio of Dawson Botsford. A Web developer, React consultant, and Node.js consultant improving web performance everywhere."
          />
          <meta
            name="twitter:image"
            content="https://dawsbot.com/static/my-face.jpg"
          />

          {/* <!-- Meta Tags Generated via http://heymeta.com --> */}

          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <TopNav />
        <IndexIndex />
      </div>
    );
  }
}

export default Index;
