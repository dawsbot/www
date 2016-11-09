import React, { Component } from 'react';
import {style, merge} from 'next/css';
import Link from 'next/Link';

const styles = {
  main: {
    color: 'white',
    backgroundColor: 'black',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    '@media print': {
      display: 'none'
    }
  },
  white: {
    color: 'white'
  },
  link: {
    padding: '0 15px',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  leftPad: {
    marginRight: '40px'
  }
};

class TopNav extends Component {
  static displayName: 'TopNav'

  render() {
    return (
      <div className={style(styles.main)}>

        <span className={style(styles.leftPad)}/>
        <Link href="/">
          <a className={merge(styles.link, styles.white)}>
            Home
          </a>
        </Link>

        <Link href="/resume">
          <a className={merge(styles.link, styles.white)}>
            Resume
          </a>
        </Link>

      </div>
    );
  }
}

export default TopNav;
