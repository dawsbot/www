import React from 'react';
import { style } from 'next/css';

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
  <div className={style(styles.tag)} {...rest}>
    {children}
  </div>
);

export default Tag;
