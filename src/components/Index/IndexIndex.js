import React from 'react';
import { css } from 'glamor';
import Typed from 'typed.js';

import styled from 'styled-components';

import { darkPurple, bleen } from '../colors';

import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

import {
  ProjectCard,
  BuiltWithBubblesContainer,
  BubbleContainer,
  ProjectsGridContainer,
} from './styled-components';

const SocialIconAnchor = styled.a`
  text-decoration: none;
  color: ${darkPurple};
`;
const styles = {
  introTextContainer: {
    textAlign: 'center',
  },
  mega: {
    fontSize: '50px',
  },
  sectionWrapper: {
    padding: '110px 26px 100px 26px',
  },
  section: {
    margin: '0 auto',
    maxWidth: '1000px',
  },
  headshot: {
    borderRadius: '3px',
    padding: '4px',
    border: '2px solid grey',
    width: '300px',
  },
  darkBackground: {
    backgroundColor: darkPurple,
    boxShadow: '0px 4px 14px 0px rgba(71,71,71,1)',
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
  dark: {
    color: darkPurple,
  },
  introHeader: {
    lineHeight: '36px',
  },
  loveHeader: {
    lineHeight: '36px',
    height: '60px',
    marginBottom: '40px',
  },
  bioDescription: {
    borderRadius: '16px',
    boxShadow: '0px 4px 14px 0px rgba(71,71,71,1)',
    backgroundColor: darkPurple,
    color: 'white',
    lineHeight: 1.4,
    display: 'flex',
    padding: '60px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  formContainer: {
    border: '2px solid white',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '16px',
    padding: '40px',
  },
  input: {
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid black',
    height: '42px',
    marginTop: '8px',
    marginBottom: '20px',
    borderRadius: '4px',
    paddingLeft: '20px',
    fontSize: '17px',
  },
  submitButton: {
    fontSize: '17px',
    height: '46px',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: darkPurple,
    borderColor: darkPurple,
    color: bleen,
  },
  textArea: {
    height: '120px',
    paddingTop: '14px',
    paddingBottom: '14px',
  },
};

const TalkButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 18px 44px;
  border-radius: 18px;
  background-color: ${bleen};
  color: ${darkPurple};
  font-weight: bold;
  border-width: 0px;
  font-size: 18px;
`;

class IndexIndex extends React.Component {
  componentDidMount() {
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: [
        'a Solidity Dev',
        'a React Dev',
        'a YouTuber',
        'an Open-Source contributor',
        'a Consultant',
      ],
      typeSpeed: 36,
      backSpeed: 35,
      backDelay: 1700,
      loop: true,
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
      <>
        <div className={css(styles.sectionWrapper)}>
          <section className={css(styles.section)}>
            <div className={css(styles.introTextContainer)}>
              <img
                className={css(styles.headshot)}
                src="/my-face.jpg"
                alt="my face"
              />
              <h1 className={css(styles.introHeader)}>Hi, I'm Dawson!</h1>
              <h1 className={css(styles.mega)}>
                <span role="img" aria-label="hand wave">
                  👋
                </span>
              </h1>
            </div>
            <h1 className={css(styles.loveHeader)}>
              I'm{' '}
              <span
                ref={el => {
                  this.el = el;
                }}
              />{' '}
              who ❤️'s the web
            </h1>
            <div className={css(styles.bioDescription)}>
              <h3 style={{ marginBottom: '40px' }}>
                I build DApps with JavaScript & Solidity
              </h3>
              <BuiltWithBubblesContainer>
                <BubbleContainer>
                  <img
                    src={require('../../../media/icons8-react-native.svg')}
                    style={{ height: 100 }}
                    alt="logo for react"
                  />
                  <div style={{ color: 'black' }}>React</div>
                </BubbleContainer>
                <BubbleContainer>
                  <img
                    src={require('../../../media/icons8-nodejs.svg')}
                    style={{ height: 100 }}
                    alt="logo for nodejs"
                  />
                  <div style={{ color: 'black' }}>Node.js</div>
                </BubbleContainer>
              </BuiltWithBubblesContainer>
              <BubbleContainer>
                <img
                  src={require('../../../media/icons8-ethereum.svg')}
                  style={{ height: 100 }}
                  alt="ethereum"
                />
                <div style={{ color: 'black' }}>Solidity</div>
              </BubbleContainer>
              <span style={{ marginTop: '40px' }}>
                I'm a software engineer consultant. I work this way to gather a
                breadth of knowledge. As Tony Robbins says, "compress years to
                days"{' '}
                <TalkButtonContainer>
                  <a href="#email-form">
                    <Button>Let's talk</Button>
                  </a>
                </TalkButtonContainer>
              </span>
            </div>
          </section>
        </div>

        <div {...css(styles.sectionWrapper, styles.darkBackground)}>
          <div className={css(styles.untilt)}>
            <section className={css(styles.section)}>
              <h2 style={{ color: bleen }}>Some of my creations:</h2>
              <ProjectsGridContainer>
                <ProjectCard
                  href="https://github.com/teamsempo/StableVoucher"
                  title="🏅 Stable Voucher 🏅"
                  description="A web-app for distibuting humanitarian aid with crypocurrency. (Hackathon winner)"
                  uses={['ethereum', 'javascript', 'reactjs']}
                />
                <ProjectCard
                  title="Uplift"
                  href="https://uplift.now.sh"
                  description="A website for happy quotes"
                  uses={['javascript']}
                />
                <ProjectCard
                  href="https://mailto.now.sh"
                  title="Mailto"
                  description="⚡️ A web app for software devs to create email mailto's"
                  uses={['javascript', 'reactjs']}
                />
                <ProjectCard
                  href="https://vimrc-builder.now.sh"
                  title="vimrc Builder"
                  description="A web app for software devs to build a vimrc file"
                  uses={['javascript', 'reactjs']}
                />
                <ProjectCard
                  href="https://github.com/dawsbot/skrub"
                  title="Skrub"
                  description="Irreversible file deletion on every Operating System"
                  uses={['javascript', 'nodejs']}
                />
              </ProjectsGridContainer>
            </section>
          </div>
        </div>

        <div className={css(styles.sectionWrapper)}>
          <section className={css(styles.section)}>
            <h2 style={{ color: bleen }}>See more at:</h2>
            <div
              style={{
                maxWidth: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                marginRight: '40px',
                marginLeft: '40px',
              }}
            >
              <SocialIconAnchor href="https://github.com/dawsbot">
                <FaGithubSquare size="300px" title="github icon" />
              </SocialIconAnchor>
              <SocialIconAnchor href="https://linkedin.com/in/dawsonbotsford">
                <FaLinkedin size="300px" title="LinkedIn icon" />
              </SocialIconAnchor>
              <SocialIconAnchor href="https://twitter.com/dawsonbotsford">
                <FaTwitterSquare size="300px" title="Twitter icon" />
              </SocialIconAnchor>
            </div>
          </section>
        </div>

        <div {...css(styles.sectionWrapper, styles.darkBackground)}>
          <div className={css(styles.untilt)}>
            <section className={css(styles.section)} id="email-form">
              <h2 style={{ color: bleen }}>Let's Talk!</h2>

              <form
                className={css(styles.formContainer)}
                action="https://formspree.io/db-travel@tryninja.io"
                method="POST"
              >
                <label htmlFor="name">
                  Name
                  <input
                    className={css(styles.input)}
                    type="text"
                    name="name"
                    placeholder="Jane"
                  />
                </label>

                <label htmlFor="email">
                  Email
                  <input
                    className={css(styles.input)}
                    type="email"
                    name="_replyto"
                    placeholder="Jane@gmail.com"
                  />
                </label>

                <label htmlFor="subject">
                  Subject
                  <textarea
                    {...css(styles.input, styles.textArea)}
                    name="subject"
                    placeholder="Can we get your thoughts on our software project? We're trying to do _"
                  />
                </label>

                {/* catch the bots */}
                <input
                  className={css(styles.input)}
                  type="text"
                  name="_gotcha"
                  style={{ display: 'none' }}
                />

                <input
                  {...css(styles.input, styles.submitButton)}
                  type="submit"
                  value="Send"
                />
                <p>
                  icons from{' '}
                  <a
                    href="https://icons8.com/"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    icons8
                  </a>
                </p>
              </form>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default IndexIndex;
