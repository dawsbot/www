import React from 'react';
import { css } from 'glamor';

const styles = {
  tag: {
    border: '1px solid white',
    borderRadius: '20px',
    display: 'inline-block',
    padding: '4px 14px',
    margin: '4px 6px',
    fontSize: '14px'
  }
};

const Tag = ({ children, ...rest }) => (
  <div className={css(styles.tag)} {...rest}>
    {children}
  </div>
);

export default Tag;
