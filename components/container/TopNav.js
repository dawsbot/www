import React, { Component } from 'react';
import {style, merge} from 'next/css';
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
  static displayName: 'TopNav'

  render() {
    return (
      <div className={style(styles.main)}>

        <Link href="/">
          <a className={merge(styles.link, styles.white, styles.borderRight)}>
            Home
          </a>
        </Link>

        <Link href="/resume">
          <a className={merge(styles.link, styles.white, styles.borderRight)}>
            Resume
          </a>
        </Link>

        <Link href="/bot">
          <a className={merge(styles.link, styles.white)}>
            Gravatar Bot
          </a>
        </Link>

      </div>
    );
  }
}

export default TopNav;
