import React, { Component } from 'react';
import { rehydrate } from 'glamor';

import IndexIndex from '../src/components/Index/IndexIndex';

// Adds server generated styles to glamor cache.
// Has to run before any `css()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  // eslint-disable-next-line
  rehydrate(window.__NEXT_DATA__.ids);
}

class Index extends Component {
  render() {
    return <IndexIndex />;
  }
}

export default Index;
