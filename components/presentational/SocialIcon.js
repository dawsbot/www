import React, { Component } from 'react';
// import {style} from 'next/css';

const styles = {
  container: {
    marginBottom: '3px'
  },
  anchor: {
    color: 'black'
  },
  icon: {
    paddingRight: '6px'
  }
};

class SocialIcon extends Component {
  static displayName: 'SocialIcon';

  static propTypes = {
    iconName: React.PropTypes.string,
    url: React.PropTypes.string,
    label: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    // testString: 'middle'
  };

  render() {
    const Icon = this.props.iconName ? (
      <i
        style={styles.icon}
        className={`fa fa-${this.props.iconName}`}
        aria-hidden="true"
      />
    ) : null;
    return (
      <div style={styles.container}>
        <a href={this.props.url} style={styles.anchor}>
          {Icon}
          {this.props.label}
        </a>
      </div>
    );
  }
}

export default SocialIcon;
