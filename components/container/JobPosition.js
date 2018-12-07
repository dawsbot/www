import React, { Component } from 'react';
import { style } from 'next/css';

const styles = {
  cardWrapper: {
    paddingBottom: '4px'
    // paddingTop: '6px',
    // marginBottom: '14px'
  },
  header: {
    marginBottom: '0px',
    fontSize: '20px'
  },
  jobDescription: {
    marginTop: '6px'
  },
  anchor: {
    color: 'black'
  }
};

class JobPosition extends Component {
  displayName: 'JobPosition';

  render() {
    const { companyUrl, companyName, jobDescription, jobTitle } = this.props;

    const company = companyUrl ? (
      <a href={companyUrl} className={style(styles.anchor)}>
        @{companyName}
      </a>
    ) : (
      `@${companyName}`
    );
    return (
      <div className={style(styles.cardWrapper)}>
        <h2 className={style(styles.header)}>
          {jobTitle} {company}
        </h2>

        <p className={style(styles.jobDescription)}>{jobDescription}</p>
      </div>
    );
  }
}

JobPosition.propTypes = {
  companyName: React.PropTypes.string.isRequired,
  companyUrl: React.PropTypes.string,
  jobTitle: React.PropTypes.string.isRequired,
  jobDescription: React.PropTypes.string.isRequired
};

export default JobPosition;
