import React, { Component } from 'react';
import { css } from 'glamor';

const styles = {
  ul: {
    paddingLeft: '1.2em',
  },
};

class UnpaddedUl extends Component {
  render() {
    return (
      <ul {...css(styles.ul)} className="cheers">
        {this.props.children}
      </ul>
    );
  }
}

export default UnpaddedUl;
