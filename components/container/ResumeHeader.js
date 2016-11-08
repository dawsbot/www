import React, { Component } from 'react';
import {style} from 'next/css';

const styles = {
  main: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  header: {
    fontSize: '52px',
    fontFamily: `'Scratch', sans-serif`,
    letterSpacing: '3px',
    lineHeight: '1.16',
    margin: '30px 0px 10px 0px',
    textTransform: 'uppercase',
    // make text not as huge on smaller screens
    '@media(max-width: 595px)': {
      fontSize: '40px'
    }
  },
  linksContainer: {
    margin: '30px 0px 0px 0px',
    textAlign: 'right'
  }
}
function SocialIcon() {
  return <div>SocialIcon</div>
}
class ResumeHeader extends Component {
  displayName: 'ResumeHeader'

  render() {
    return (
      <div className={style(styles.main)}>
        <h1 className={style(styles.header)}>Dawson<br/>Botsford</h1>
        <section className={style(styles.linksContainer)}>
          <SocialIcon
            label="GitHub"
            iconName="github"
            url="https://github.com/dawsonbotsford"/>
          <SocialIcon
            label="LinkedIn"
            iconName="linkedin"
            url="https://linkedin.com/in/dawsonbotsford"/>
          <SocialIcon
            label="Twitter"
            iconName="twitter"
            url="https://twitter.com/dawsonbotsford"/>
          <div>865-804-9305</div>
          <div>DawsonBotsford@gmail.com</div>
        </section>
      </div>
    );
  }
}

export default ResumeHeader;
