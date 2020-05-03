import React, { Component } from 'react';
import Head from 'next/head';
import ResumeIndex from '../components/container/ResumeIndex';

class Resume extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Resume of Work: Dawson Botsford</title>
          <script src="https://use.fontawesome.com/669d282f9a.js" />
        </Head>
        <ResumeIndex />
      </div>
    );
  }
}

export default Resume;
