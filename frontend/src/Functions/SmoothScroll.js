/*
* @Author: Junar Alinsub
* @Date:   2017-12-19 04:37:19
* @Last Modified by:   Narnia
* @Last Modified time: 2017-12-19 23:56:03
*/

const currentPos = () => {
  let yScroll;
  console.log('pageYOffset', window.pageYOffset);
  if (window.pageYOffset) {
    yScroll = window.pageYOffset;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    yScroll = document.documentElement.scrollTop;
  } else if (document.body) {
    yScroll = document.body.scrollTop;
  }
  return yScroll;
};

const scroll = (sectionContainer, id) => {
  let targetOffset = document.getElementById(id).offsetTop;
  const currentPosition = currentPos();
  const body = document.getElementById(sectionContainer);
  const animateTime = 700;
  let mainNav = document.querySelector('.main-navigation');

  if (targetOffset < 350) {
    mainNav.classList.add('onTop');
    mainNav.classList.remove('onScroll');
  } else {
    mainNav.classList.add('onScroll');
    mainNav.classList.remove('onTop');
  }

  body.classList.add('in-transition');
  if (targetOffset > currentPosition) {
    body.style.WebkitTransform =
      'translate(0, -' + (targetOffset - currentPosition) + 'px)';
    body.style.MozTransform =
      'translate(0, -' + (targetOffset - currentPosition) + 'px)';
    body.style.transform =
      'translate(0, -' + (targetOffset - currentPosition) + 'px)';
  } else {
    body.style.WebkitTransform =
      'translate(0, +' + (currentPosition - targetOffset) + 'px)';
    body.style.MozTransform =
      'translate(0, +' + (currentPosition - targetOffset) + 'px)';
    body.style.transform =
      'translate(0, +' + (currentPosition - targetOffset) + 'px)';
  }

  window.setTimeout(function() {
    body.classList.remove('in-transition');
    body.style.cssText = '';
    window.scrollTo(0, targetOffset);
  }, animateTime);
};

export default scroll;
