import React, { Component } from 'react';
import Body from '../components/container/Body';

const Heading = () => (<div>heading</div>);
class Resume extends Component {
  static displayName: 'Resume'

  render() {
    return (
      <div>
        <Heading/>
        <Body/>
      </div>
    );
  }
}

export default Resume;
