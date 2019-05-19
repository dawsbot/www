import React, { Component } from 'react';

const styles = {
  ul: {
    paddingLeft: '1.2em'
  }
};

class UnpaddedUl extends Component {
  render() {
    return <ul styles={styles.ul}>{this.props.children}</ul>;
  }
}

export default UnpaddedUl;
