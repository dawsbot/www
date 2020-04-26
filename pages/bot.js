import React, { Component } from 'react';
import Head from 'next/head';

import TopNav from '../components/container/TopNav';
import BotIndex from '../components/container/BotIndex';

class Bot extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Gravatar Tool - Dawson Botsford</title>
        </Head>
        <TopNav />
        <BotIndex />
        <style jsx global>{`
          body {
            font-family: 'Work Sans', sans-serif;
            font-size: 1.1em;
            width: 100%;
            margin: 0px;
            line-height: 120%;
          }
        `}</style>
      </div>
    );
  }
}

export default Bot;
