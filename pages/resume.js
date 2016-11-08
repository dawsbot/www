import React, { Component } from 'react';
import Head from 'next/head'
import {insertRule} from 'next/css';
import ResumeIndex from '../components/container/ResumeIndex';

insertRule(`body {
  font-family: 'Work Sans', sans-serif;
  font-size: 1.1em;
  line-height: 120%;
  margin: 0px;
  width: 100%;
}`);

class Resume extends Component {
  static displayName: 'Resume'

  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link href="/static/ScratchDetail.ttf" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet"/>
        </Head>
        <ResumeIndex />
      </div>
    );
  }
}

export default Resume;
