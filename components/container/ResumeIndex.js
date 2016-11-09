import React, { Component } from 'react';
import ResumeBody from './ResumeBody';
import ResumeHeader from './ResumeHeader';
import {merge} from 'next/css';

const styles = {
  page: {
    // collapse printable-page view on smaller screens
    '@media(min-width: 670px)': {
      height: '842px',
      width: '670px',
    }
  },
  sectionWrapper: {
    padding: '50px 26px 50px 26px',
    maxWidth: '800px',
    margin: '0 auto'
  }
};

class ResumeIndex extends Component {
  static displayName: 'ResumeIndex'

  render() {
    return (
      <div className={merge(styles.sectionWrapper, styles.page)}>
        <ResumeHeader />
        <ResumeBody />
      </div>
    );
  }
}

export default ResumeIndex;
