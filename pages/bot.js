import React, { Component } from 'react';
import Head from 'next/head';

import BotIndex from '../components/container/BotIndex';

class Bot extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Gravatar Tool: Dawson Botsford</title>
        </Head>
        <BotIndex />
      </>
    );
  }
}

export default Bot;
