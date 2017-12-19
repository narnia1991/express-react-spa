/*
* @Author: Narnia
* @Date:   2017-12-19 13:17:15
* @Last Modified by:   Narnia
* @Last Modified time: 2017-12-19 15:32:27
*/
import React from 'react';

export default function asyncComponent(Component) {
  class AsyncComponent extends React.Component {
    render() {
      if (Component) {
        return <Component {...this.props} />;
      }
      return null;
    }
  }
  return AsyncComponent;
}
