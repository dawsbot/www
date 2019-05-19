import React, { Component } from 'react';
import Head from 'next/head';
import ResumeIndex from '../components/container/ResumeIndex';
import TopNav from '../components/container/TopNav';

// insertRule(`body {
//   font-family: 'Work Sans', sans-serif;
//   font-size: 1.1em;
//   line-height: 120%;
//   margin: 0px;
//   width: 100%;
// }`);

class Resume extends Component {
  render() {
    return (
      <div>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script src="https://use.fontawesome.com/669d282f9a.js" />
        </Head>
        <TopNav />
        <ResumeIndex />
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

export default Resume;
