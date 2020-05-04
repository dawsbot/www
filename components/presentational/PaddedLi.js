import React, { Component } from 'react';
import { css } from 'glamor';

const styles = {
  li: {
    marginBottom: '8px',
  },
};

class PaddedLi extends Component {
  render() {
    return <li className={css(styles.li)}>{this.props.children}</li>;
  }
}

export default PaddedLi;
