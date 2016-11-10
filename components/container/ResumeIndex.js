import React, { Component } from 'react';
import ResumeBody from './ResumeBody';
import ResumeHeader from './ResumeHeader';
import {style, merge} from 'next/css';
import Button from '../presentational/Button';

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
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '100px'
  },
  printButton: {
    margin: 'auto',
    '@media print': {
      display: 'none'
    },
    '@media(max-width: 769px)': {
      display: 'none'
    }
  }
};

class ResumeIndex extends Component {
  static displayName: 'ResumeIndex'

  render() {
    return (
      <div className={merge(styles.sectionWrapper, styles.page)}>
        <ResumeHeader />
        <ResumeBody />

        <div className={style(styles.buttonWrapper)}>
          <Button onClick={() => (window.print())} styles={styles.printButton}>
            Print This Resume
          </Button>
        </div>
      </div>
    );
  }
}

export default ResumeIndex;
