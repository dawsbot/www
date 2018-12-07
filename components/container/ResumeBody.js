import React, { Component } from "react";
import { style, merge } from "next/css";

import JobPosition from "./JobPosition";
import PaddedLi from "../presentational/PaddedLi";
import UnpaddedUl from "../presentational/UnpaddedUl";

const styles = {
  main: {
    display: "flex",
    content: "center",
    flexWrap: "wrap"
  },
  sectionHeading: {
    borderBottom: "3px solid lightgray",
    width: "100%",
    fontFamily: `'Scratch', sans-serif`,
    textTransform: "uppercase",
    fontSize: "24px",
    letterSpacing: "3px",
    padding: "0px 0px 4px 0px"
  },
  bodySection: {
    margin: "16px"
  },
  sectionLeft: {
    flex: "11",
    textAlign: "left"
  },
  sectionRight: {
    flex: "18",
    textAlign: "right"
  },
  h2: {
    marginBottom: "0px",
    fontSize: "20px"
  }
};

const SectionHeading = displayText => {
  return <h2 className={style(styles.sectionHeading)}> {displayText} </h2>;
};

// helper fn for calculating years since a date
const timeSince = (year, month) => {
  const today = new Date();
  // MM DD YYYY
  const then = new Date(`${month} 1 ${year}`);

  const oneDay = 86400;
  const oneYear = oneDay * 365.25;

  let secondsDiff = Math.floor((today - then) / 1000);

  const years = Math.floor(secondsDiff / oneYear);
  secondsDiff -= years * oneYear;

  const days = Math.floor(secondsDiff / oneDay);
  secondsDiff -= days * oneDay;

  // const decimaltimeSince = (currentYear - year) + ((currentMonth - month) / 12);
  // const yearDiff = today.getFullYear() - then.getFullYear()
  // const dayDiff = today.getDay() - then.getDay()

  // const dayEpoch = 60 * 60 * 24 * 365.25;
  // const yearEpoch = 60 * 60 * 24 * 365.25;

  // const epochDiff = today.getTime() - then.getTime();
  return `${years} years, ${days} days, ${secondsDiff} seconds`;
};

class ResumeBody extends Component {
  static displayName = "ResumeBody";
  state = {
    now: new Date().getTime()
  };

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ now: new Date().getTime() }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div className={style(styles.main)}>
          <section className={merge(styles.bodySection, styles.sectionRight)}>
            {SectionHeading("Experience")}
            <JobPosition
              jobTitle="Freelance Web Engineer"
              companyName="Me"
              companyUrl=""
              jobDescription={`Crafting delightful web experiences. Send me a message! -- ${timeSince(
                2018,
                10
              )}`}
            />
            {/* <JobPosition
              jobTitle="Lead Frontend Engineer"
              companyName="Karuna Health"
              companyUrl="https://meetkaruna.com"
              jobDescription={`Crafting delightful web experiences for the sickest in the U.S. Healthcare system -- ${timeSince(2018, 9)}`}
            /> */}
            <JobPosition
              jobTitle="Lead Software Engineer"
              companyName="Driver"
              companyUrl="https://driver.xyz"
              jobDescription={`Owned and delivered flagship web app. Heavy leadership, tasking, and coding. React and Redux -- 1.08 years`}
            />
            <JobPosition
              jobTitle="Full-stack Web Engineer"
              companyName="Uber"
              companyUrl="https://uber.com"
              jobDescription="PM'd and coded JavaScript to all of Uber's
              web with React & Node.js. -- 1.08 years"
            />
            <JobPosition
              jobTitle="Co-founder & Director"
              companyName="HackCU"
              companyUrl="https://hackcu.org"
              jobDescription="Started and grew this collegiate
              hackathon to > 200 students -- 1.66 years"
            />
            <JobPosition
              jobTitle="Frontend Engineer Intern"
              companyName="Shape"
              companyUrl="https://shapesecurity.com"
              jobDescription="KPCB Engineering Fellow in Silicon Valley
              (< 3% acceptance) -- 0.33 years"
            />
            <JobPosition
              jobTitle="Software Engineer"
              companyName="NSA"
              companyUrl="https://nsa.gov"
              jobDescription="Held a U.S. Top-Secret Security
              Clearance 2012 - 2015. Stokes Scholar (< 2% acceptance rate) -- 2.75 years"
            />
          </section>
          <section className={merge(styles.bodySection, styles.sectionLeft)}>
            {/* <section className={merge(styles.bodySection, styles.sectionLeft)}> */}
            {SectionHeading("Skills")}
            <ul style={{ paddingLeft: "32px" }}>
              <PaddedLi>JavaScript</PaddedLi>
              <UnpaddedUl>
                <PaddedLi>
                  {timeSince(2015, 5)} React.js{" "}
                  <small>(This resume was coded with it)</small>
                </PaddedLi>
                <PaddedLi>{timeSince(2014, 9)} Node.js</PaddedLi>
                <PaddedLi>{timeSince(2014, 8)} generic JavaScript</PaddedLi>
              </UnpaddedUl>
              <PaddedLi>{timeSince(2014, 8)} HTML</PaddedLi>
              <PaddedLi>{timeSince(2014, 8)} CSS</PaddedLi>
            </ul>
            <div className={style(styles.main)}>
              {SectionHeading("Education")}
              <h2 className={style(styles.h2)}>B.S. Computer Science</h2>
              University of Colorado
              <div className={merge(styles.bodySection, styles.sectionLeft)} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ResumeBody;
