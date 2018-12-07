import React, { Component } from "react";
import style from "next/css";

const styles = {
  li: {
    marginBottom: "8px"
  }
};

class PaddedLi extends Component {
  static displayName = "PaddedLi";
  static propTypes = {
    children: React.PropTypes.node
  };
  render() {
    return <li className={style(styles.li)}>{this.props.children}</li>;
  }
}

export default PaddedLi;
