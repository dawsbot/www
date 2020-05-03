import React, { Component } from 'react';
import { css } from 'glamor';
import Link from 'next/link';

const styles = {
  main: {
    color: 'white',
    backgroundColor: 'black',
    width: '100%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media print': {
      display: 'none'
    }
  },
  white: {
    color: 'white'
  },
  link: {
    padding: '0 52px',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  borderRight: {
    borderRight: '1px solid white'
  }
};

class TopNav extends Component {
  render() {
    return (
      <div className={css(styles.main)}>
        <Link href="/">
          <a {...css(styles.link, styles.white, styles.borderRight)}>Home</a>
        </Link>

        <Link href="/tips">
          <a {...css(styles.link, styles.white, styles.borderRight)}>
            Developer Tips
          </a>
        </Link>
        <Link href="/resume">
          <a {...css(styles.link, styles.white)}>Resume</a>
        </Link>
      </div>
    );
  }
}

export default TopNav;
