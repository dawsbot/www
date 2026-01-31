import React, { Component } from 'react';
import Head from 'next/head';
import ResumeIndex from '../src/components/container/ResumeIndex';

class Resume extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>
            Resume | Dawson Botsford | CTO, AI Strategy & Fintech Engineering
            Leader
          </title>
          <meta
            name="description"
            content="Resume of Dawson Botsford. CTO, AI strategist, and engineering leader with experience at Bankless, Earnifi, Uber, and more. Expertise in fintech, blockchain, and open source."
          />
        </Head>
        <ResumeIndex />
      </div>
    );
  }
}

export default Resume;
