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
    // fontFamily: '\'Pacifico\', cursive',
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

class ResumeBody extends Component {
  static displayName = 'ResumeBody'

  render() {
    return (
      <div>
        <div className={style(styles.main)}>
          <section className={merge(styles.bodySection, styles.sectionRight)}>
            {SectionHeading('Experience')}
            <JobPosition
              jobTitle="Front-end Web Engineer"
              companyName="Driver"
              companyUrl="https://driver.xyz"
              jobDescription="Owned and delivered flagship web app. Heavy leadership and self-organization."
            />
            <JobPosition
              jobTitle="Full-stack Web Engineer"
              companyName="Uber"
              companyUrl="https://uber.com"
              jobDescription="PM'd and shipped JavaScript to all of Uber's
              web frontends using React and Node.js."
            />
            <JobPosition
              jobTitle="Co-founder & Director"
              companyName="HackCU"
              companyUrl="https://hackcu.org"
              jobDescription="Started and grew this collegiate
              hackathon to > 200 students."
            />
            <JobPosition
              jobTitle="Full-Stack Web Engineer Intern"
              companyName="Shape Security"
              companyUrl="https://shapesecurity.com"
              jobDescription="KPCB Fellowship in Silicon Valley
              with < 3% acceptance."
            />
            <JobPosition
              jobTitle="Software Engineer"
              companyName="NSA"
              companyUrl="https://nsa.gov"
              jobDescription="Held a U.S. Top-Secret Security
              Clearance July 2012 - March 2015"
              />
          </section>
          <div className={merge(styles.bodySection, styles.sectionLeft)}>
            {SectionHeading('Skills')}
            <ul style={{paddingLeft: '32px'}}>
              <PaddedLi>
                JavaScript
              </PaddedLi>
              <UnpaddedUl>
                <PaddedLi>
                  3 years React.js <small>(This resume was coded with it)</small>
                </PaddedLi>
                <PaddedLi>
                  3 years Node.js
                </PaddedLi>
              </UnpaddedUl>
              <PaddedLi>4 years HTML</PaddedLi>
              <PaddedLi>4 years CSS</PaddedLi>
            </ul>
          </div>
        </div>

        <div className={style(styles.main)}>
          <section className={merge(styles.bodySection, styles.sectionRight)}>
            {SectionHeading('Education')}
            <h2 className={style(styles.h2)}>B.S. Computer Science</h2>
            University of Colorado
            {/* University of Colorado - 2016 */}
          </section>
          <div className={merge(styles.bodySection, styles.sectionLeft)}>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeBody;
