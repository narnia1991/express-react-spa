/*
* @Author: Narnia
* @Date:   2017-12-19 05:12:22
* @Last Modified by:   Narnia
* @Last Modified time: 2017-12-20 00:26:15
*/
import React from 'react';
import { baseUrl } from './config';
import scroll from './Functions/SmoothScroll';

const tab = navButtons => {
  return navButtons.map(tabs => {
    return (
      <a
        href={'#' + tabs}
        className="scrollButton"
        key={tabs}
        onClick={e => {
          e.preventDefault();
          scroll('section-container', tabs);
        }}
      >
        {tabs}
      </a>
    );
  });
};

const Navigation = tabs => {
  return (
    <div className="main-navigation" id="main-navigation">
      <div className="logo">
        <img src="./logo.svg" />
      </div>
      <div className="tab-container">{tab(tabs)}</div>
    </div>
  );
};

export default Navigation;
