import React, { Component } from 'react';
import nanoid from 'nanoid';

import Tag from './Tag';

const styles = {
  group: {
    padding: '10px 0px 30px 0px',
    display: 'block'
  }
};

class TagGroup extends Component {
  defaultDisplayCount = 2;
  state = {
    expanded: false
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

    return <span className={styles.group}>{tags}</span>;
  }
}

export default TagGroup;
