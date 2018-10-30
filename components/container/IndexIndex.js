import React, { Component } from 'react';
import {style, merge} from 'next/css';
import Typed from 'typed.js';

import PaddedLi from '../presentational/PaddedLi';

const styles = {
  sectionWrapper: {
    padding: '110px 26px 100px 26px'
  },
  section: {
    margin: '0 auto',
    maxWidth: '800px',
  },
  headshot: {
    width: '170px',
    borderRadius: '3px',
    padding: '4px',
    border: '1px solid black',
  },
  blackBackground: {
    backgroundColor: 'black',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,.6), 0 22px 70px 4px rgba(0,0,0,0.56), 0 0 0 1px rgba(0, 0, 0, 0.3)',
    color: 'white',
    width: '100vw',
    boxSizing: 'border-box',
    transform: 'skewY(8deg)',
    marginTop: '80px',
    paddingTop: '80px',
    paddingBottom: '180px',
    paddingLeft: '26px',
    paddingRight: '26px',
  },
  untilt: {
    transform: 'skewY(-8deg)',
  },
  liWorkedOn: {
    color: 'white',
    borderBottom: '1px solid white',
  },
  black: {
    color: 'black'
  },
  introHeader: {
    lineHeight: '36px'
  }
};

class IndexIndex extends Component {
  static displayName: 'IndexIndex'

  componentDidMount() {
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
    	strings: [
        'a Freelancer',
        'a Nomad',
        'a Developer',
        'a ⛷',
        'an Engineer'
      ],
      typeSpeed: 50,
      backSpeed: 35,
      backDelay: 1400,
      loop: true
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div>
        <div className={style(styles.sectionWrapper)}>
          <section className={style(styles.section)}>
            <h1 className={style(styles.introHeader)}>Hi, I'm Dawson!</h1>
            <img className={style(styles.headshot)}
              src="https://avatars0.githubusercontent.com/u/3408480?v=3&s=460"
              alt="my face">
            </img>
            <h1>I'm <span
            style={{ fontFamily: 'monospace' }}
            ref={(el) => { this.el = el; }}
          /> who ❤️'s the web</h1>
          </section>
        </div>

        <div className={
          merge(
            styles.sectionWrapper,
            styles.blackBackground)}>
          <div className={style(styles.untilt)}>
            <section className={style(styles.section)}>
              <h2>Things I've Worked on</h2>
              <ul>
                <PaddedLi>
                  <a className={style(styles.liWorkedOn)} href="https://uplift.now.sh">
                  Uplift
                </a>: 🙌 A minimal happy quote website
              </PaddedLi>
                <PaddedLi>
                  <a className={style(styles.liWorkedOn)} href="https://mailto.now.sh">
                  Mailto
                </a>: 💌⚡️ HTML mailto's made easy
              </PaddedLi>
                <PaddedLi>
                  <a className={style(styles.liWorkedOn)} href="https://github.com/dawsbot/o-o">
                  o-o
                </a>: A terminal command-line tool for opening url's and files
              </PaddedLi>
                <PaddedLi>
                  <a className={style(styles.liWorkedOn)} href="https://vimrc-builder.now.sh">
                  vimrc Builder
                </a>: A web app for building your first vimrc
              </PaddedLi>
                <PaddedLi>
                  <a className={style(styles.liWorkedOn)} href="https://github.com/dawsbot/skrub">
                  Skrub
                </a>: Irreversible file deletion on every Operating System
              </PaddedLi>
              </ul>
            </section>
          </div>
        </div>

        <div className={style(styles.sectionWrapper)}>
          <section className={style(styles.section)}>
            <h2>Say Hello On</h2>
            <ul>
              <PaddedLi>
                <a className={merge(styles.li, styles.black)} href="https://github.com/dawsbot">
                  GitHub
                </a>
              </PaddedLi>
              <PaddedLi>
                <a className={merge(styles.li, styles.black)} href="https://twitter.com/dawsonbotsford">
                  Twitter
                </a>
              </PaddedLi>
              <PaddedLi>
                <a className={merge(styles.li, styles.black)} href="https://linkedin.com/in/dawsonbotsford">
                  LinkedIn
                </a>
              </PaddedLi>
            </ul>
          </section>
        </div>

      </div>
    );
  }
}

export default IndexIndex;
