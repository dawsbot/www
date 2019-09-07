import React, { Component } from 'react';
import { css } from 'glamor';
import SocialIcon from '../presentational/SocialIcon';

const styles = {
  main: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%'
  },
  header: {
    fontSize: '40px',
    fontFamily: `'Work Sans', sans-serif`,
    letterSpacing: '3px',
    lineHeight: '1',
    weight: 90,
    margin: '30px 0px 10px 0px',
    textTransform: 'uppercase',
    // make text not as huge on smaller screens
    '@media(max-width: 670px)': {
      fontSize: '30px'
    },
    // align heading properly on print
    '@media print': {
      fontSize: '34px'
    }
  },
  linksContainer: {
    margin: '30px 0px 0px 0px',
    textAlign: 'right'
  },
  row: {
    display: 'flex',
    width: '220px',
    justifyContent: 'space-between'
  }
};

class ResumeHeader extends Component {
  render() {
    return (
      <div>
        <div className={css(styles.main)}>
          <h1 className={css(styles.header)}>
            Dawson
            <br />
            Botsford
          </h1>
          <section className={css(styles.linksContainer)}>
            <div className={css(styles.row)}>
              <SocialIcon
                label="GitHub"
                iconName="github"
                url="https://github.com/dawsbot"
              />
              <SocialIcon
                label="LinkedIn"
                iconName="linkedin"
                url="https://linkedin.com/in/dawsonbotsford"
              />
            </div>
            <div className={css(styles.row)}>
              <SocialIcon
                label="Twitter"
                iconName="twitter"
                url="https://twitter.com/dawsonbotsford"
              />
              <a
                href="mailto:&#100;&#097;&#119;&#115;&#111;&#110;&#098;&#111;&#116;&#115;&#102;&#111;&#114;&#100;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
                style={{ color: 'black' }}
              >
                Email Me
              </a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ResumeHeader;
