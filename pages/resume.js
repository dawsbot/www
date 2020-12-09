import React, { Component } from 'react';
import Head from 'next/head';
import ResumeIndex from '../src/components/container/ResumeIndex';
import { DEFAULT_TITLE } from './_app';

class Resume extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>{`Resume & CV | ${DEFAULT_TITLE}`}</title>
        </Head>
        <ResumeIndex />
      </div>
    );
  }
}

export default Resume;
