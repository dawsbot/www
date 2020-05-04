import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { css } from 'glamor';

const styles = {
  cardWrapper: {
    paddingBottom: '4px',
  },
  header: {
    marginBottom: '0px',
    fontSize: '20px',
  },
  jobDescription: {
    marginTop: '6px',
  },
  anchor: {
    color: 'black',
  },
};

class JobPosition extends Component {
  render() {
    const {
      companyUrl,
      companyName,
      jobDescription,
      jobTitle,
      TimeSince,
    } = this.props;

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

        <p className={css(styles.jobDescription)}>
          {jobDescription}
          {TimeSince && <> - {TimeSince}</>}
          {/* {TimeSince && ' - ' + TimeSince} */}
        </p>
      </div>
    );
  }
}

JobPosition.propTypes = {
  companyName: PropTypes.string.isRequired,
  companyUrl: PropTypes.string,
  jobTitle: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
};

export default JobPosition;
