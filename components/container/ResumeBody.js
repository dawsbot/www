import React, { Component } from 'react';
import { css } from 'glamor';

import JobPosition from './JobPosition';
import PaddedLi from '../presentational/PaddedLi';
import UnpaddedUl from '../presentational/UnpaddedUl';

const styles = {
  main: {
    display: 'flex',
    content: 'center',
    flexWrap: 'wrap'
  },
  sectionHeading: {
    borderBottom: '3px solid lightgray',
    width: '100%',
    fontFamily: `'Scratch', sans-serif`,
    textTransform: 'uppercase',
    fontSize: '24px',
    letterSpacing: '3px',
    padding: '0px 0px 4px 0px'
  },
  bodySection: {
    margin: '16px'
  },
  sectionLeft: {
    flex: '11',
    textAlign: 'left'
  },
  sectionRight: {
    flex: '18',
    textAlign: 'right'
  },
  h2: {
    marginBottom: '0px',
    fontSize: '20px'
  }
};

const SectionHeading = displayText => {
  return <h2 className={css(styles.sectionHeading)}> {displayText} </h2>;
};

// helper fn for calculating years since a date
const timeSince = (year, month) => {
  const today = new Date();
  // MM DD YYYY
  const then = new Date(year, month, 1);

  const oneDay = 86400;
  const oneYear = oneDay * 365.25;

  let secondsDiff = Math.floor((today - then) / 1000);

  const years = Math.floor(secondsDiff / oneYear);
  secondsDiff -= years * oneYear;

  const days = Math.floor(secondsDiff / oneDay);
  secondsDiff -= days * oneDay;

  if (years > 0) {
    return `${years} years, ${days} days, ${secondsDiff} seconds`;
  }
  return `${days} days, ${secondsDiff} seconds`;
};

class ResumeBody extends Component {
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
        <div className={css(styles.main)}>
          <section {...css(styles.bodySection, styles.sectionRight)}>
            {SectionHeading('Experience')}
            <JobPosition
              jobTitle="Owner and Software Consultant"
              companyName="Dark Triangle"
              companyUrl="https://darktriangle.tech"
              jobDescription={`I'm a travelling senior React.js developer. Joining into teams with hard PR's, code reviews, and best practices -- ${timeSince(
                2018,
                10
              )}`}
            />
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
              companyName="DoD"
              companyUrl="https://www.defense.gov/"
              jobDescription="U.S. Security
              Clearance 2012 - 2015. Stokes Scholar (< 2% acceptance rate) -- 2.75 years"
            />
          </section>
          <section {...css(styles.bodySection, styles.sectionLeft)}>
            {SectionHeading('Skills')}
            <ul style={{ paddingLeft: '22px' }}>
              <PaddedLi>JavaScript</PaddedLi>
              <UnpaddedUl>
                <PaddedLi>JavaScript {timeSince(2014, 8)}</PaddedLi>
                <PaddedLi>
                  React.js {timeSince(2015, 5)}
                  <small>(This resume was coded with it)</small>
                </PaddedLi>
                <PaddedLi>Node.js {timeSince(2014, 9)}</PaddedLi>
              </UnpaddedUl>
              <PaddedLi>HTML {timeSince(2014, 8)}</PaddedLi>
              <PaddedLi>CSS {timeSince(2014, 8)}</PaddedLi>
              <br />
              <PaddedLi>
                <a href="../../static/YTT-cert.pdf" style={{ color: 'black' }}>
                  Certified Power Yoga Teacher - 200 hr training
                </a>
              </PaddedLi>
              <PaddedLi>
                <a href="../../static/eth-cert.jpg" style={{ color: 'black' }}>
                  Ethereum and Solidity
                </a>{' '}
                {timeSince(2018, 12)}
              </PaddedLi>
            </ul>
            <div className={css(styles.main)}>
              {SectionHeading('Education')}
              <h2 className={css(styles.h2)}>B.S. Computer Science</h2>
              University of Colorado
              <div {...css(styles.bodySection, styles.sectionLeft)} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ResumeBody;
