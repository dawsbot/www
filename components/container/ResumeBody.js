import React, { Component } from 'react';
import {style, merge} from 'next/css';

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

const SectionHeading = (displayText) => {
  return <h2 className={style(styles.sectionHeading)}> {displayText} </h2>;
};

// helper fn for calculating years since a date
const yearsSince = (year, month) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const decimalYearsSince = (currentYear - year) + ((currentMonth - month) / 12);
  return Math.floor(decimalYearsSince * 100) / 100;
};

class ResumeBody extends Component {
  static displayName = 'ResumeBody'

  render() {
    return (
      <div>
        <div className={style(styles.main)}>
          <section className={merge(styles.bodySection, styles.sectionRight)}>
            {SectionHeading('Experience')}
            <JobPosition
              jobTitle="Lead Frontend Engineer"
              companyName="Karuna Health"
              companyUrl="https://meetkaruna.com"
              jobDescription={`Crafting delightful web experiences for the sickest in the U.S. Healthcare system -- ${yearsSince(2018, 9)} years`}
            />
            <JobPosition
              jobTitle="Lead Software Engineer"
              companyName="Driver"
              companyUrl="https://driver.xyz"
              jobDescription={`Owned and delivered flagship web app. Heavy leadership, tasking, and coding. React and Redux -- ${yearsSince(2017, 7)} years`}
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
            {SectionHeading('Skills')}
            <ul style={{paddingLeft: '32px'}}>
              <PaddedLi>
                JavaScript
              </PaddedLi>
              <UnpaddedUl>
                <PaddedLi>
                  {yearsSince(2015, 5)} years React.js <small>(This resume was coded with it)</small>
                </PaddedLi>
                <PaddedLi>
                  {yearsSince(2014, 9)} years Node.js
                </PaddedLi>
                <PaddedLi>
                  {yearsSince(2014, 8)} years generic JavaScript
                </PaddedLi>
              </UnpaddedUl>
              <PaddedLi>{yearsSince(2014, 8)} years HTML</PaddedLi>
              <PaddedLi>{yearsSince(2014, 8)} years CSS</PaddedLi>
              <PaddedLi>1 year engineering management</PaddedLi>
            </ul>
            <div className={style(styles.main)}>
              {SectionHeading('Education')}
              <h2 className={style(styles.h2)}>B.S. Computer Science</h2>
            University of Colorado
              <div className={merge(styles.bodySection, styles.sectionLeft)}>
              </div>
            </div>
          </section>
        </div>

      </div>
    );
  }
}

export default ResumeBody;
