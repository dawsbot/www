import React, { Component } from 'react';
import {merge} from 'next/css';
import omit from 'just-omit';

const styles = {
  main: {
    color: 'white',
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: '2px',
    borderRadius: '3px',
    padding: '8px 16px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

class Button extends Component {
  static displayName: 'Button'

  render() {
    const props = omit(this.props, ['styles']);
    return (
      <button {...props} className={merge(styles.main, this.props.styles)}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
