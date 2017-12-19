/*
* @Author: Narnia
* @Date:   2017-12-19 22:16:31
* @Last Modified by:   Junar Alinsub
* @Last Modified time: 2017-12-19 23:22:05
*/
import React from 'react';
import logo from '../logo.svg';

class BigTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div {...this.props}>
        <h1 className="App-title">React SPA Smooth Scroll</h1>
      </div>
    );
  }
}

export default BigTitle;
