import React, { Component } from 'react';
import Head from 'next/head';

import TopNav from '../components/container/TopNav';
import BotIndex from '../components/container/BotIndex';
import { insertRule } from 'next/css';

insertRule(`body {
  font-family: 'Work Sans', sans-serif;
  font-size: 1.1em;
  width: 100%;
  margin: 0px;
  line-height: 120%;
}`);

class Bot extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Dawson Botsford</title>
          <meta charSet="utf-8" />

          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="author" content="Dawson Botsford" />
          <meta
            name="description"
            content="Personal website of Dawson Botsford. Web engineer and entrepreneur"
          />

          <link rel="shortcut icon" href="/static/favicon.ico" />

          <link
            href="https://fonts.googleapis.com/css?family=Work+Sans"
            rel="stylesheet"
          />
        </Head>
        <TopNav />
        <BotIndex />
      </div>
    );
  }
}

export default Bot;
