import React, { Component } from 'react';
import { css } from 'glamor';
import omit from 'just-omit';
import PropTypes from 'prop-types';

const styles = {
  main: {
    color: 'white',
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: '2px',
    borderRadius: '3px',
    padding: '8px 18px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

class Button extends Component {
  static propTypes = {
    styles: PropTypes.object
  };

  render() {
    const props = omit(this.props, ['styles']);
    return (
      <button {...props} {...css(styles.main, this.props.styles)}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
