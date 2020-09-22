import React, { Component } from 'react';
import ResumeBody from './ResumeBody';
import ResumeHeader from './ResumeHeader';
import { css } from 'glamor';
import Button from '../presentational/Button';
import { darkPurple, bleen } from '../colors';

/* eslint-disable no-undef */
const styles = {
  page: {
    // collapse printable-page view on smaller screens
    '@media(min-width: 670px)': {
      height: '842px',
      width: '670px',
    },
  },
  sectionWrapper: {
    padding: '50px 26px 50px 26px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    // only show on desktop
    '@media(min-width: 769px)': {
      marginTop: '100px',
      marginBottom: '100px',
    },
    '@media print': {
      marginTop: '0px',
      marginBottom: '0px',
    },
  },
  printButton: {
    backgroundColor: darkPurple,
    borderColor: darkPurple,
    color: bleen,
    margin: 'auto',
    '@media print': {
      display: 'none',
    },
    // hide from mobile
    '@media(max-width: 769px)': {
      display: 'none',
    },
  },
};

class ResumeIndex extends Component {
  render() {
    return (
      <div {...css(styles.sectionWrapper, styles.page)}>
        <ResumeHeader />
        <ResumeBody />

        <div className={css(styles.buttonWrapper)}>
          <Button
            onClick={() => typeof window !== 'undefined' && window.print()}
            styles={styles.printButton}
          >
            Print This Resume
          </Button>
        </div>
      </div>
    );
  }
}

export default ResumeIndex;
