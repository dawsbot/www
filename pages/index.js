import React, { Component } from 'react';
import Head from 'next/head';
import { rehydrate } from 'glamor';

import TopNav from '../components/container/TopNav';
import IndexIndex from '../components/Index/IndexIndex';

// Adds server generated styles to glamor cache.
// Has to run before any `css()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  // eslint-disable-next-line
  rehydrate(window.__NEXT_DATA__.ids);
}

class Index extends Component {
  render() {
    return (
      <div>
        <Head />
        <TopNav />
        <IndexIndex />
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

export default Index;
