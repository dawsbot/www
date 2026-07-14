import React, { Component } from 'react';
import { css } from 'glamor';
import styled from 'styled-components';

import JobPosition from './JobPosition';
import UnpaddedUl from '../presentational/UnpaddedUl';
import { darkPurple } from '../colors';

const PaddedLi = styled.li`
  margin-bottom: 14px;

  @media print {
    margin-bottom: 8px;
  }
`;
const styles = {
  main: {
    display: 'flex',
    content: 'center',
    flexWrap: 'wrap',
  },
  sectionHeading: {
    color: '#0e0e0e',
    borderBottom: `2px solid ${darkPurple}`,
    width: '100%',
    fontFamily: `'Archivo', 'Helvetica Neue', sans-serif`,
    fontWeight: 800,
    textTransform: 'uppercase',
    fontSize: '24px',
    letterSpacing: '2px',
    padding: '0px 0px 4px 0px',
  },
  bodySection: {
    margin: '12px',
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
  h3: {
    marginBottom: '0px',
    marginTop: '0px',
    fontSize: '20px',
  },
};

const SectionHeading = displayText => {
  return <h3 className={css(styles.sectionHeading)}> {displayText} </h3>;
};

class ResumeBody extends Component {
  // `now` stays null during SSR and the first client render so both produce
  // identical markup (a live timestamp here causes a hydration mismatch)
  state = {
    now: null,
  };

  componentDidMount() {
    this.setState({ now: new Date().getTime() });
    this.interval = setInterval(
      () => this.setState({ now: new Date().getTime() }),
      100,
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // helper fn for calculating years since a date
  timeSince = (year, month) => {
    const { now } = this.state;
    if (now === null) return null;
    const then = new Date(year, month, 1);

    const oneDay = 86400;
    const oneYear = oneDay * 365.25;

    const secondsDiff = (now - then.getTime()) / 1000;
    const years = secondsDiff / oneYear;
    const yr = years.toFixed(8);
    return <code style={{ fontSize: 16 }}>{yr} yrs</code>;
  };

  render() {
    return (
      <div className={css(styles.main)}>
        <section {...css(styles.bodySection, styles.leftColumn)}>
          {SectionHeading('Experience')}
          <JobPosition
            jobTitle="Founder & CTO"
            companyName="Lost in the Sauce LLC"
            companyUrl="https://darktriangle.now.sh/"
            jobDescription="AI consulting, fractional CTO engagements, and technical leadership for startups. Building AI-integrated products and advising on AI strategy, fintech architecture, and engineering team scaling."
            TimeSince={this.timeSince(2018, 10)}
          />
          <JobPosition
            jobTitle="Co-Founder & CTO"
            companyName="Haraka"
            companyUrl="https://haraka.xyz"
            jobDescription="Making finance borderless & personalized. Jul 2025 to May 2026."
          />
          <JobPosition
            jobTitle="Founder, then CTO"
            companyName="Earnifi (acquired by Bankless)"
            companyUrl="https://earni.fi"
            jobDescription="Built an airdrop platform that helped crypto users find over $1B USD in unclaimed tokens and NFTs. After acquisition, served as CTO of Bankless, leading engineering of Claimables and web3 fintech products. - 4.2 years"
          />
          <JobPosition
            jobTitle="Senior Full-Stack Engineer"
            companyName="Everipedia"
            companyUrl="https://everipedia.org"
            jobDescription="Led product & engineering for one of the world's largest crypto DApps with 1.5M+ visitors/month. Built on Ethereum and EOS. - 1.18 yrs"
          />
          <JobPosition
            jobTitle="Full-stack Web Engineer"
            companyName="Uber"
            companyUrl="https://uber.com"
            jobDescription="Web platform team. Built shared React and Node.js library used across engineering org. - 1.08 yrs"
          />
          <JobPosition
            jobTitle="Co-founder"
            companyName="HackCU"
            companyUrl="https://hackcu.org"
            jobDescription="Started and grew this hackathon to 200+ students - 1.66 yrs"
          />
        </section>
        <section {...css(styles.bodySection, styles.rightColumn)}>
          {SectionHeading('Skills')}
          <ul style={{ paddingLeft: '22px' }}>
            <PaddedLi>Software Engineering {this.timeSince(2011, 9)}</PaddedLi>
            <PaddedLi>AI Strategy & Integration</PaddedLi>
            <PaddedLi>Technical Leadership & Engineering Management</PaddedLi>
            <PaddedLi>Fintech & Neobanking Architecture</PaddedLi>
            <PaddedLi>
              <a href="/eth-cert.jpg" style={{ color: 'black' }}>
                Ethereum, Solidity & Blockchain
              </a>{' '}
              {this.timeSince(2018, 12)}
            </PaddedLi>
            <PaddedLi>JavaScript / TypeScript</PaddedLi>
            <UnpaddedUl>
              <PaddedLi>JavaScript {this.timeSince(2014, 8)}</PaddedLi>
              <PaddedLi>
                React.js {this.timeSince(2015, 5)}
                <small> (I made this page with React)</small>
              </PaddedLi>
              <PaddedLi>Node.js {this.timeSince(2014, 9)}</PaddedLi>
            </UnpaddedUl>
            <PaddedLi>HTML {this.timeSince(2014, 8)}</PaddedLi>
            <PaddedLi>CSS {this.timeSince(2014, 8)}</PaddedLi>
            <br />
            <PaddedLi>
              <a
                href="https://certificates.crossfit.com/88e8a73f-a235-4911-a878-916a9b13ed33#gs.83sn2p"
                style={{ color: 'black' }}
                target="_blank"
                rel="noreferrer"
              >
                CrossFit Level 1 Trainer (CF-L1)
              </a>
            </PaddedLi>
            <PaddedLi>
              <a
                href="/YTT-cert.pdf"
                style={{ color: 'black' }}
                target="_blank"
                rel="noreferrer"
              >
                Certified Power Yoga Teacher - 200 hr training
              </a>
            </PaddedLi>
          </ul>
          <div className={css(styles.main)}>
            {SectionHeading('Education')}
            <h4 className={css(styles.h3)}>B.S. Computer Science</h4>
            University of Colorado, 2012-2016
            <div {...css(styles.bodySection, styles.rightColumn)} />
          </div>
        </section>
      </div>
    );
  }
}

export default ResumeBody;
