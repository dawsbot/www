import React, { Component } from 'react';
import style from 'next/css';
import nanoid from 'nanoid';

import Tag from './Tag';

const styles = {
  group: {
    padding: '10px 0px 30px 0px',
    display: 'block'
  }
};

class TagGroup extends Component {
  static displayName = 'TagGroup';
  defaultDisplayCount = 2;
  state = {
    expanded: false
  };

  static propTypes = {
    children: React.PropTypes.node
  };

  expand = () => {
    this.setState({
      expanded: true
    });
  };

  render() {
    const tags = this.props.children.map((tag, index) => {
      if (!this.state.expanded) {
        if (index === this.defaultDisplayCount) {
          return (
            <span style={{ cursor: 'pointer' }} key={nanoid()}>
              <Tag key={index} onClick={this.expand} role="button">
                Click here to see more
              </Tag>
            </span>
          );
        } else if (index > this.defaultDisplayCount) {
          return null;
        }
      }
      return tag;
    });

    return <span className={style(styles.group)}>{tags}</span>;
  }
}

export default TagGroup;
