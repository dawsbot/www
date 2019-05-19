import React, { Component } from 'react';
import { css } from 'glamor';

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
  render() {
    const { companyUrl, companyName, jobDescription, jobTitle } = this.props;

    const company = companyUrl ? (
      <span>
        @
        <a href={companyUrl} className={css(styles.anchor)}>
          {companyName}
        </a>
      </span>
    ) : (
      `@${companyName}`
    );
    return (
      <div className={css(styles.cardWrapper)}>
        <h2 className={css(styles.header)}>
          {jobTitle} {company}
        </h2>

        <p className={css(styles.jobDescription)}>{jobDescription}</p>
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
