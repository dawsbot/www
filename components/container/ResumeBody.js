import React, { Component } from 'react';
import { css } from 'glamor';
import styled from 'styled-components';

import JobPosition from './JobPosition';
import UnpaddedUl from '../presentational/UnpaddedUl';

const PaddedLi = styled.li`
  margin-bottom: 14px;
`;
const styles = {
  main: {
    display: 'flex',
    content: 'center',
    flexWrap: 'wrap',
  },
  sectionHeading: {
    borderBottom: '3px solid lightgray',
    width: '100%',
    fontFamily: `'Scratch', sans-serif`,
    textTransform: 'uppercase',
    fontSize: '24px',
    letterSpacing: '3px',
    padding: '0px 0px 4px 0px',
  },
  bodySection: {
    margin: '16px',
  },
  leftColumn: {
    flex: '18',
    textAlign: 'left',
    marginLeft: '0px',
  },
  rightColumn: {
    flex: '11',
    textAlign: 'left',
    marginRight: '0px',
  },
  h2: {
    marginBottom: '0px',
    marginTop: '0px',
    fontSize: '20px',
  },
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

  const secondsDiff = (today - then) / 1000;
  const years = secondsDiff / oneYear;
  const yr = years.toFixed(8);
  return <code style={{ fontSize: 16 }}>{yr} yrs</code>;
};

class ResumeBody extends Component {
  state = {
    now: new Date().getTime(),
  };

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ now: new Date().getTime() }),
      100,
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className={css(styles.main)}>
        <section {...css(styles.bodySection, styles.leftColumn)}>
          {SectionHeading('Experience')}
          <JobPosition
            jobTitle={'Senior Full-Stack Engineer'}
            companyName="Everipedia"
            companyUrl="https://everipedia.org"
            jobDescription="Leading product & engineering of everipedia.org; One of the world's largest crypto DApps with over 1.5 million visitors/month. Build on EOS."
            TimeSince={timeSince(2019, 12)}
          />
          <JobPosition
            jobTitle={`Founder & Engineer`}
            companyName="Dark Triangle"
            companyUrl="https://darktriangle.now.sh/"
            jobDescription="Consulting with startups who want world-class web apps."
            TimeSince={timeSince(2018, 10)}
          />
          <JobPosition
            jobTitle="Lead Software Engineer"
            companyName="Driver"
            companyUrl="https://driver.xyz"
            jobDescription={`Started and lead public-facing marketing site. Heavy leadership and coding React web-app - 1.08 yrs`}
          />
          <JobPosition
            jobTitle="Full-stack Web Engineer"
            companyName="Uber"
            companyUrl="https://uber.com"
            jobDescription="Web platform team. Programmed shared library of React and Node.js code. - 1.08 yrs"
          />
          <JobPosition
            jobTitle="Co-founder"
            companyName="HackCU"
            companyUrl="https://hackcu.org"
            jobDescription="Started and grew this
              hackathon to > 200 students - 1.66 yrs"
          />
          {/* <JobPosition
            jobTitle="Frontend Engineer"
            companyName="Shape Security"
            companyUrl="https://shapesecurity.com"
            jobDescription="KPCB Engineering Fellow. College internship
              (< 3% acceptance) - 0.33 yrs"
          /> */}
          <JobPosition
            jobTitle="Software Engineer"
            companyName="NSA"
            companyUrl="https://www.defense.gov/"
            jobDescription="U.S. Security
              Clearance 2012 - 2015. Stokes Scholar (< 2% acceptance rate) - 2.75 yrs"
          />
        </section>
        <section {...css(styles.bodySection, styles.rightColumn)}>
          {SectionHeading('Skills')}
          <ul style={{ paddingLeft: '22px' }}>
            <PaddedLi>Software Engineering {timeSince(2011, 9)}</PaddedLi>
            <PaddedLi>JavaScript</PaddedLi>
            <UnpaddedUl>
              <PaddedLi>JavaScript {timeSince(2014, 8)}</PaddedLi>
              <PaddedLi>
                React.js {timeSince(2015, 5)}
                <small> (I made this page with React)</small>
              </PaddedLi>
              <PaddedLi>Node.js {timeSince(2014, 9)}</PaddedLi>
            </UnpaddedUl>
            <PaddedLi>HTML {timeSince(2014, 8)}</PaddedLi>
            <PaddedLi>CSS {timeSince(2014, 8)}</PaddedLi>
            <br />
            <PaddedLi>
              <a href="/YTT-cert.pdf" style={{ color: 'black' }}>
                Certified Power Yoga Teacher - 200 hr training
              </a>
            </PaddedLi>
            <PaddedLi>
              <a href="/eth-cert.jpg" style={{ color: 'black' }}>
                Ethereum and Solidity
              </a>{' '}
              {timeSince(2018, 12)}
            </PaddedLi>
          </ul>
          <div className={css(styles.main)}>
            {SectionHeading('Education')}
            <h2 className={css(styles.h2)}>B.S. Computer Science</h2>
            University of Colorado
            <div {...css(styles.bodySection, styles.rightColumn)} />
          </div>
        </section>
      </div>
    );
  }
}

export default ResumeBody;
