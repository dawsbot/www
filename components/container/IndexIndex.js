import React, { Component } from 'react';
import {style, merge} from 'next/css';
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
    '@media(min-width: 600px)': {
      position: 'absolute',
      right: '0px',
      top: '0px',
    }
  },
  inline: {
    display: 'inline'
  },
  blackBackground: {
    backgroundColor: 'black',
    color: 'white'
  },
  white: {
    color: 'white'
  },
  black: {
    color: 'black'
  }
};

class IndexIndex extends Component {
  static displayName: 'IndexIndex'
  render() {
    return (
      <div>
        <div className={style(styles.sectionWrapper)}>
          <section className={merge(styles.section, {
            position: 'relative'
          })}>
            <div>
              <span>
                <h1 className={style(styles.inline)}>Hi, I'm Dawson! </h1>
              </span>
              <ul>
                <PaddedLi className={style(styles.li)}>
                  <span>
                    Lead Frontend Engineer at <a href="https://meetkaruna.com">Karuna Health</a>
                  </span>
                </PaddedLi>
                <PaddedLi className={style(styles.li)}>
                  Open-Source Obsessed
                </PaddedLi>
                <PaddedLi className={style(styles.li)}>
                  JavaScript Lover
                </PaddedLi>
              </ul>
              <br/>
            </div>
            <img className={style(styles.headshot)}
              src="https://avatars0.githubusercontent.com/u/3408480?v=3&s=460"
              alt="my face"></img>
          </section>
        </div>

        <div className={
          merge(
            styles.sectionWrapper,
            styles.blackBackground)}>
          <section className={style(styles.section)}>
            <h2>Things I've Worked on</h2>
            <ul>
              <PaddedLi>
                <a className={merge(styles.li, styles.white)} href="https://uplift.now.sh">
                  Uplift
                </a>: 🙌 A minimal AF happy quote website
              </PaddedLi>
              <PaddedLi>
                <a className={merge(styles.li, styles.white)} href="https://mailto.now.sh">
                  Mailto
                </a>: 💌⚡️ HTML mailto's made easy
              </PaddedLi>
              <PaddedLi>
                <a className={merge(styles.li, styles.white)} href="http://divecoding.com">
                  DiveCoding
                </a>: Hackathon Organizing as a service
              </PaddedLi>
              <PaddedLi>
                <a className={merge(styles.li, styles.white)} href="https://github.com/dawsbot/o-o">
                  o-o
                </a>: A terminal command-line tool for opening url's and files
              </PaddedLi>
              <PaddedLi>
                <a className={merge(styles.li, styles.white)} href="https://vimrc-builder.now.sh">
                  vimrc Builder
                </a>: A web app for building your first vimrc
              </PaddedLi>
              <PaddedLi>
                <a className={merge(styles.li, styles.white)} href="https://github.com/dawsbot/skrub">
                  Skrub
                </a>: Irreversible file deletion on every Operating System
              </PaddedLi>
            </ul>
          </section>
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
