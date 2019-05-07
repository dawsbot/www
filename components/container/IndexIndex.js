import React, { Component } from 'react';
import { style, merge } from 'next/css';
import Typed from 'typed.js';

import Tag from '../presentational/Tag';
import TagGroup from '../presentational/TagGroup';

import PaddedLi from '../presentational/PaddedLi';

const styles = {
  introTextContainer: {
    textAlign: 'center'
  },
  mega: {
    fontSize: '50px'
  },
  introWithPicture: {
    '@media(min-width: 670px)': {
      display: 'flex',
      alignItems: 'center'
    }
  },
  sectionWrapper: {
    padding: '110px 26px 100px 26px'
  },
  section: {
    margin: '0 auto',
    maxWidth: '800px'
  },
  headshot: {
    borderRadius: '3px',
    padding: '4px',
    border: '1px solid black',
    '@media(min-width: 670px)': {
      marginLeft: '140px'
    }
  },
  blackBackground: {
    backgroundColor: 'black',
    boxShadow:
      'inset 0 1px 0 rgba(255,255,255,.6), 0 22px 70px 4px rgba(0,0,0,0.56), 0 0 0 1px rgba(0, 0, 0, 0.3)',
    color: 'white',
    width: '100vw',
    boxSizing: 'border-box',
    transform: 'skewY(8deg)',
    marginTop: '80px',
    paddingTop: '80px',
    paddingBottom: '180px',
    paddingLeft: '26px',
    paddingRight: '26px'
  },
  untilt: {
    transform: 'skewY(-8deg)'
  },
  liWorkedOn: {
    color: 'white',
    borderBottom: '1px solid white'
  },
  black: {
    color: 'black'
  },
  introHeader: {
    lineHeight: '36px'
  },
  loveHeader: {
    lineHeight: '36px',
    height: '60px',
    marginBottom: '40px'
  },
  available: {
    color: 'rgb(125, 241, 131)',
    fontWeight: 'bold'
  },
  unavailable: {
    color: '#E8B00C',
    fontWeight: 'bold'
  },
  bioDescription: {
    border: '1px solid grey',
    borderRadius: '4px',
    boxShadow:
      'inset 0 1px 0 rgba(255,255,255,.6), 0 22px 70px 4px rgba(0,0,0,0.56), 0 0 0 1px rgba(0, 0, 0, 0.3)',
    padding: '20px 30px',
    backgroundColor: 'black',
    color: 'white',
    lineHeight: 1.4
  },
  formContainer: {
    border: '2px solid white',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '4px',
    padding: '40px'
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
    fontSize: '17px'
  },
  submitButton: {
    fontSize: '17px',
    height: '46px',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: 'black',
    color: 'white'
  },
  textArea: {
    height: '120px',
    paddingTop: '14px',
    paddingBottom: '14px'
  },
  vendorLink: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: '#E8B00C'
  },
  mediaImg: {
    maxWidth: '260px'
  }
};

class IndexIndex extends Component {
  static displayName: 'IndexIndex';

  componentDidMount() {
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: [
        'a Freelancer',
        'an Artist',
        'a Coder',
        'a Yogi',
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
            <div className={style(styles.introWithPicture)}>
              <div className={style(styles.introTextContainer)}>
                <h1 className={style(styles.introHeader)}>Hi, I'm Dawson!</h1>
                <h1 className={style(styles.mega)}>👋</h1>
              </div>
              <img
                className={style(styles.headshot)}
                src="../../static/my-face.jpg"
                alt="my face"
              />
            </div>
            <h1 className={style(styles.loveHeader)}>
              I'm{' '}
              <span
                ref={el => {
                  this.el = el;
                }}
              />{' '}
              who ❤️'s the web
            </h1>
            <p className={style(styles.bioDescription)}>
              React.js and Node.js are my specialties, but all of the web is
              beautiful! I'm a freelance software engineer{' '}
              <span className={style(styles.available)}>
                available for hire.
              </span>
              <br />
              <br />
              Let's work together to make your site fast and beautiful. Reach
              out now at the{' '}
              <a href="#email-form" style={{ color: 'white' }}>
                bottom of this page!
              </a>
            </p>

            <iframe
              src="https://player.vimeo.com/video/324015038"
              width="100%"
              height="360"
              frameBorder="0"
              style={{ marginTop: '80px' }}
            />
          </section>
        </div>

        <div className={merge(styles.sectionWrapper, styles.blackBackground)}>
          <div className={style(styles.untilt)}>
            <section className={style(styles.section)}>
              <h2 id="worked-on">Professional Creations</h2>
              <ul>
                <PaddedLi>
                  <a
                    className={style(styles.liWorkedOn)}
                    href="https://driver.xyz"
                  >
                    Driver Company Website
                  </a>
                  <span>
                    : A full application for marketing and signup. I lead the
                    frontend team from day one till near-launch.
                  </span>
                  <br />
                  <TagGroup>
                    <Tag>⚛️ React.js</Tag>
                    <Tag>JavaScript</Tag>
                    <Tag>FlowType</Tag>
                    <Tag>Create React App</Tag>
                    <Tag>Express.js</Tag>
                    <Tag>WebPack</Tag>
                    <Tag>Prettier</Tag>
                    <Tag>ESLint</Tag>
                    <Tag>Multi-Language</Tag>
                    <Tag>Stripe Payment Integration</Tag>
                    <Tag>WeChat Auth Integration</Tag>
                  </TagGroup>
                </PaddedLi>
                <PaddedLi>
                  <a
                    className={style(styles.liWorkedOn)}
                    href="https://aero.com"
                  >
                    Aero Company Website
                  </a>
                  : In late 2018, Aero wanted to update their web presence. I
                  embedded with their engineers on-site in San Francisco to
                  update their new web presence
                  <br />
                  <TagGroup>
                    <Tag>⚛️ React.js</Tag>
                    <Tag>Gatsby.js</Tag>
                    <Tag>JavaScript</Tag>
                    <Tag>TypeScript</Tag>
                    <Tag>Prettier</Tag>
                    <Tag>TSLint</Tag>
                  </TagGroup>
                </PaddedLi>
              </ul>
              <br />
              <br />
              <h2 id="worked-on">Passion Creations</h2>
              <ul>
                <PaddedLi>
                  <a
                    className={style(styles.liWorkedOn)}
                    href="https://uplift.now.sh"
                  >
                    Uplift
                  </a>
                  : 🙌 A website for happy quotes
                  <br />
                  <TagGroup>
                    <Tag>JavaScript</Tag>
                    <Tag>LightWeight</Tag>
                  </TagGroup>
                </PaddedLi>
                <br />
                <PaddedLi>
                  <a
                    className={style(styles.liWorkedOn)}
                    href="https://github.com/teamsempo/StableVoucher"
                  >
                    Stable Voucher 🏅 Hackathon Winner 🏅
                  </a>
                  : A crypto site for humanitarian aid
                  <br />
                  <TagGroup>
                    <Tag>⚛️ React.js</Tag>
                    <Tag>💅 UI/UX optimized</Tag>
                    <Tag>JavaScript</Tag>
                    <Tag>Ethereum</Tag>
                    <Tag>Solidity</Tag>
                    <Tag>Create React App</Tag>
                  </TagGroup>
                </PaddedLi>
                <br />
                <PaddedLi>
                  <a
                    className={style(styles.liWorkedOn)}
                    href="https://vimrc-builder.now.sh"
                  >
                    vimrc Builder
                  </a>
                  : A web app for software devs to build a vimrc file
                  <br />
                  <TagGroup>
                    <Tag>⚛️ React.js</Tag>
                    <Tag>💅 UI/UX optimized</Tag>
                    <Tag>Create React App</Tag>
                    <Tag>JavaScript</Tag>
                    <Tag>FlowType</Tag>
                    <Tag>Prettier.js</Tag>
                  </TagGroup>
                </PaddedLi>
                <PaddedLi>
                  <a
                    className={style(styles.liWorkedOn)}
                    href="https://mailto.now.sh"
                  >
                    Mailto
                  </a>
                  : 💌⚡️ A web app for software devs to create email mailto's
                  <br />
                  <TagGroup>
                    <Tag>⚛️ React.js</Tag>
                    <Tag>Next.js</Tag>
                    <Tag>JavaScript</Tag>
                    <Tag>Prettier.js</Tag>
                    <Tag>ESLint</Tag>
                  </TagGroup>
                </PaddedLi>
                <br />
                <PaddedLi>
                  <a
                    className={style(styles.liWorkedOn)}
                    href="https://github.com/dawsbot/skrub"
                  >
                    Skrub
                  </a>
                  : Irreversible file deletion on every Operating System
                  <br />
                  <TagGroup>
                    <Tag>JavaScript</Tag>
                    <Tag>Node.js</Tag>
                    <Tag>Dev Tool</Tag>
                  </TagGroup>
                </PaddedLi>
              </ul>
            </section>
          </div>
        </div>

        <div className={style(styles.sectionWrapper)}>
          <section className={style(styles.section)}>
            <h2>See more at:</h2>
            <div>
              <a
                className={merge(styles.li, styles.black)}
                href="https://github.com/dawsbot"
              >
                <img
                  src="../../static/github-huge.png"
                  alt="my github account"
                  className={style(styles.mediaImg)}
                />
              </a>
              <a
                className={merge(styles.li, styles.black)}
                href="https://linkedin.com/in/dawsonbotsford"
              >
                <img
                  src="../../static/linkedin-huge.png"
                  alt="my github account"
                  className={style(styles.mediaImg)}
                />
              </a>
              <a
                className={merge(styles.li, styles.black)}
                href="https://twitter.com/dawsonbotsford"
              >
                <img
                  src="../../static/twitter-huge.png"
                  alt="my github account"
                  className={style(styles.mediaImg)}
                />
              </a>
            </div>
          </section>
        </div>

        <div className={merge(styles.sectionWrapper, styles.blackBackground)}>
          <div className={style(styles.untilt)}>
            <section className={style(styles.section)} id="email-form">
              <h2>Let's Talk!</h2>

              <form
                className={style(styles.formContainer)}
                action="https://formspree.io/dawsonbotsford@gmail.com"
                method="POST"
              >
                <label htmlFor="name">
                  Name
                  <input
                    className={style(styles.input)}
                    type="text"
                    name="name"
                    placeholder="Jane"
                  />
                </label>

                <label htmlFor="email">
                  Email
                  <input
                    className={style(styles.input)}
                    type="email"
                    name="_replyto"
                    placeholder="Jane@gmail.com"
                  />
                </label>

                <label htmlFor="subject">
                  Subject
                  <textarea
                    className={merge(styles.input, styles.textArea)}
                    name="subject"
                    placeholder="Can we get your thoughts on our software project? We're trying to do _"
                  />
                </label>

                {/* catch the bots */}
                <input
                  className={style(styles.input)}
                  type="text"
                  name="_gotcha"
                  style={{ display: 'none' }}
                />

                <input
                  className={merge(styles.input, styles.submitButton)}
                  type="submit"
                  value="Send Me This Message"
                />
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexIndex;
