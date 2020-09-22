import React, { Component } from 'react';
import Head from 'next/head';
import ResumeIndex from '../src/components/container/ResumeIndex';

class Resume extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Resume of Work: Dawson Botsford</title>
        </Head>
        <ResumeIndex />
      </div>
    );
  }
}

export default Resume;
