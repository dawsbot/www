import React, { Component } from 'react';
import {style} from 'next/css';
import SocialIcon from '../presentational/SocialIcon';

const styles = {
  main: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  header: {
    fontSize: '44px',
    fontFamily: 'sans-serif',
    letterSpacing: '3px',
    lineHeight: '1.16',
    weight: 100,
    margin: '30px 0px 10px 0px',
    textTransform: 'uppercase',
    // make text not as huge on smaller screens
    '@media(max-width: 670px)': {
      fontSize: '40px'
    },
    // align heading properly on print
    '@media print': {
      fontSize: '46px'
    }
  },
  linksContainer: {
    margin: '30px 0px 0px 0px',
    textAlign: 'right'
  }
};

// const SocialIcon = () => (<div>SocialIcon</div>);

class ResumeHeader extends Component {
  displayName: 'ResumeHeader'

  render() {
    return (
      <div>
        <div className={style(styles.main)}>
          <h1 className={style(styles.header)}>Dawson<br/>Botsford</h1>
          <section className={style(styles.linksContainer)}>
            <SocialIcon
              label="GitHub"
              iconName="github"
              url="https://github.com/dawsbot"/>
            <SocialIcon
              label="LinkedIn"
              iconName="linkedin"
              url="https://linkedin.com/in/dawsonbotsford"/>
            <SocialIcon
              label="Twitter"
              iconName="twitter"
              url="https://twitter.com/dawsonbotsford"/>
            <div>DawsonBotsford@gmail.com</div>
          </section>
        </div>
      </div>
    );
  }
}

export default ResumeHeader;
