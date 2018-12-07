import React, { Component } from "react";
import { style, merge } from "next/css";
import Typed from "typed.js";

import PaddedLi from "../presentational/PaddedLi";

const styles = {
  sectionWrapper: {
    padding: "110px 26px 100px 26px"
  },
  section: {
    margin: "0 auto",
    maxWidth: "800px"
  },
  headshot: {
    width: "170px",
    borderRadius: "3px",
    padding: "4px",
    border: "1px solid black"
  },
  blackBackground: {
    backgroundColor: "black",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,.6), 0 22px 70px 4px rgba(0,0,0,0.56), 0 0 0 1px rgba(0, 0, 0, 0.3)",
    color: "white",
    width: "100vw",
    boxSizing: "border-box",
    transform: "skewY(8deg)",
    marginTop: "80px",
    paddingTop: "80px",
    paddingBottom: "180px",
    paddingLeft: "26px",
    paddingRight: "26px"
  },
  untilt: {
    transform: "skewY(-8deg)"
  },
  liWorkedOn: {
    color: "white",
    borderBottom: "1px solid white"
  },
  black: {
    color: "black"
  },
  introHeader: {
    lineHeight: "36px"
  },
  loveHeader: {
    lineHeight: "36px",
    height: "60px",
    marginBottom: "40px"
  },
  available: {
    color: "rgb(125, 241, 131)",
    fontWeight: "bold"
  },
  unavailable: {
    color: "#E8B00C",
    fontWeight: "bold"
  },
  bioDescription: {
    border: "1px solid grey",
    borderRadius: "4px",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,.6), 0 22px 70px 4px rgba(0,0,0,0.56), 0 0 0 1px rgba(0, 0, 0, 0.3)",
    padding: "20px 30px",
    backgroundColor: "black",
    color: "white"
  },
  formContainer: {
    border: "2px solid white",
    backgroundColor: "white",
    color: "black",
    borderRadius: "4px",
    padding: "40px"
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid black",
    height: "42px",
    marginTop: "8px",
    marginBottom: "20px",
    borderRadius: "4px",
    paddingLeft: "20px",
    fontSize: "17px"
  },
  submitButton: {
    fontSize: "17px",
    height: "46px",
    fontWeight: "bold",
    cursor: "pointer",
    backgroundColor: "black",
    color: "white"
  },
  textArea: {
    height: "120px",
    paddingTop: "14px",
    paddingBottom: "14px"
  },
  vendorLink: {
    textDecoration: "underline",
    fontWeight: "bold",
    color: "#E8B00C"
  }
};

class IndexIndex extends Component {
  static displayName: "IndexIndex";

  componentDidMount() {
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: ["a Freelancer", "a Nomad", "a Developer", "a ⛷", "an Engineer"],
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
            <img
              className={style(styles.headshot)}
              src="https://avatars0.githubusercontent.com/u/3408480?v=3&s=460"
              alt="my face"
            />
            <h1 className={style(styles.loveHeader)}>
              I'm{" "}
              <span
                ref={el => {
                  this.el = el;
                }}
              />{" "}
              who ❤️'s the web
            </h1>
            <p className={style(styles.bioDescription)}>
              React.js and Node.js are my specialties, but all of the web is
              beautiful! I'm a freelance software engineer{" "}
              <span className={style(styles.unavailable)}>
                unavailable for hire{" "}
              </span>
              (crafting beautiful web UI's for{" "}
              <a
                href="https://www.gitprime.com/"
                className={style(styles.vendorLink)}
              >
                GitPrime
              </a>{" "}
              Reach out again on{" "}
              <span className={style(styles.unavailable)}>
                January 4th, 2019
              </span>{" "}
              if you would like to work together)
            </p>
          </section>
        </div>

        <div className={merge(styles.sectionWrapper, styles.blackBackground)}>
          <div className={style(styles.untilt)}>
            <section className={style(styles.section)}>
              <h2>Things I've Worked on</h2>
              <ul>
                <PaddedLi>
                  <a
                    className={style(styles.liWorkedOn)}
                    href="https://uplift.now.sh"
                  >
                    Uplift
                  </a>
                  : 🙌 A minimal happy quote website
                </PaddedLi>
                <PaddedLi>
                  <a
                    className={style(styles.liWorkedOn)}
                    href="https://mailto.now.sh"
                  >
                    Mailto
                  </a>
                  : 💌⚡️ HTML mailto's made easy
                </PaddedLi>
                <PaddedLi>
                  <a
                    className={style(styles.liWorkedOn)}
                    href="https://github.com/dawsbot/o-o"
                  >
                    o-o
                  </a>
                  : A terminal command-line tool for opening url's and files
                </PaddedLi>
                <PaddedLi>
                  <a
                    className={style(styles.liWorkedOn)}
                    href="https://vimrc-builder.now.sh"
                  >
                    vimrc Builder
                  </a>
                  : A web app for building your first vimrc
                </PaddedLi>
                <PaddedLi>
                  <a
                    className={style(styles.liWorkedOn)}
                    href="https://github.com/dawsbot/skrub"
                  >
                    Skrub
                  </a>
                  : Irreversible file deletion on every Operating System
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
                <a
                  className={merge(styles.li, styles.black)}
                  href="https://github.com/dawsbot"
                >
                  GitHub
                </a>
              </PaddedLi>
              <PaddedLi>
                <a
                  className={merge(styles.li, styles.black)}
                  href="https://linkedin.com/in/dawsonbotsford"
                >
                  LinkedIn
                </a>
              </PaddedLi>
              <PaddedLi>
                <a
                  className={merge(styles.li, styles.black)}
                  href="https://twitter.com/dawsonbotsford"
                >
                  Twitter
                </a>
              </PaddedLi>
            </ul>
          </section>
        </div>

        <div className={merge(styles.sectionWrapper, styles.blackBackground)}>
          <div className={style(styles.untilt)}>
            <section className={style(styles.section)}>
              <h2>Say Hello!</h2>

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
                  />
                </label>

                <label htmlFor="subject">
                  Subject
                  <textarea
                    className={merge(styles.input, styles.textArea)}
                    name="subject"
                  />
                </label>

                {/* catch the bots */}
                <input
                  className={style(styles.input)}
                  type="text"
                  name="_gotcha"
                  style={{ display: "none" }}
                />

                <input
                  className={merge(styles.input, styles.submitButton)}
                  type="submit"
                  value="SEND"
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
