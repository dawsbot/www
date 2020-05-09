import React, { Component } from 'react';
import { css } from 'glamor';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const styles = {
  main: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  header: {
    fontSize: '40px',
    fontFamily: `'Work Sans', sans-serif`,
    letterSpacing: '3px',
    lineHeight: '1',
    weight: 90,
    margin: '0px 0px 10px 0px',
    textTransform: 'uppercase',
    // make text not as huge on smaller screens
    '@media(max-width: 670px)': {
      fontSize: '30px',
    },
    // align heading properly on print
    '@media print': {
      fontSize: '34px',
    },
  },
  linksContainer: {
    margin: '30px 0px 0px 0px',
    textAlign: 'right',
  },
  row: {
    display: 'flex',
    width: '220px',
    justifyContent: 'space-between',
  },
};

const SocialIconAnchor = styled.a`
  text-decoration: none;
  color: black;
  display: grid;
  grid-template-columns: auto 1fr; /* put inline */
  grid-column-gap: 6px; /* space between icon and text */
  align-items: center;
`;

const SocialMediaGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
  /* height of row */
  grid-template-rows: 40px;
`;

class ResumeHeader extends Component {
  render() {
    return (
      <div className={css(styles.main)}>
        <h1 className={css(styles.header)}>
          Dawson
          <br />
          Botsford
        </h1>
        <SocialMediaGrid>
          {/* <section className={css(styles.linksContainer)}>
          <div className={css(styles.row)}> */}
          <SocialIconAnchor href="https://github.com/dawsbot">
            <FaGithub /> GitHub
          </SocialIconAnchor>
          <SocialIconAnchor href="https://linkedin.com/in/dawsonbotsford">
            <FaLinkedinIn /> LinkedIn
          </SocialIconAnchor>
          <SocialIconAnchor href="https://twitter.com/dawsonbotsford">
            <FaTwitter /> Twitter
          </SocialIconAnchor>

          <SocialIconAnchor href="mailto:&#100;&#097;&#119;&#115;&#111;&#110;&#098;&#111;&#116;&#115;&#102;&#111;&#114;&#100;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
            <MdEmail /> Email
          </SocialIconAnchor>
        </SocialMediaGrid>
        {/* </div>
        </section> */}
      </div>
    );
  }
}

export default ResumeHeader;
