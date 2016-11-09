import React, {Component} from 'react';
import style from 'next/css';

const styles = {
  ul: {
    paddingLeft: '1.2em'
  }
};

class UnpaddedUl extends Component {
  static displayName = 'UnpaddedUl'
  static propTypes = {
    children: React.PropTypes.node
  }
  render() {
    return (<ul className={style(styles.ul)}>{this.props.children}</ul>);
  }
}

export default UnpaddedUl;
