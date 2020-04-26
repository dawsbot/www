import React from 'react';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dawson Botsford - Full Stack Developer</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
          content="https://dawsbot.com/public/my-face.jpg"
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
          content="https://dawsbot.com/public/my-face.jpg"
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
          content="https://dawsbot.com/public/my-face.jpg"
        />
        {/* <!-- Meta Tags Generated via http://heymeta.com --> */}
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
