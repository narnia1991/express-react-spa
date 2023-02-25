/*
 * @Author: Junar Alinsub
 * @Date:   2017-12-19 04:37:19
 * @Last Modified by:   Narnia
 * @Last Modified time: 2017-12-19 23:56:03
 */

const currentPos = () => {
  let yScroll;
  if (window.pageYOffset) {
    yScroll = window.pageYOffset;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    yScroll = document.documentElement.scrollTop;
  } else if (document.body) {
    yScroll = document.body.scrollTop;
  }
  return yScroll;
};

const navStyles = {
  onTop: {
    backgroundColor: "rgba(200, 200, 200, 0)",
    color: "white",
    height: "10vh",
  },
  onScroll: {
    backgroundColor: "rgba(50, 90, 90, 0.85)",
    height: "5vh",
  },
};

const applyStyle = (node, styles) =>
  Object.keys(styles).forEach((key) => (node.style[key] = styles[key]));

const scroll = (sectionContainer, id) => {
  let targetOffset = document.getElementById(id).offsetTop;
  const currentPosition = currentPos();
  const body = document.getElementById(sectionContainer);
  const animateTime = 700;
  let mainNav = document.querySelector(".main-navigation");

  if (targetOffset < 350) {
    applyStyle(mainNav, navStyles.onTop);
  } else {
    applyStyle(mainNav, navStyles.onScroll);
  }

  body.classList.add("in-transition");
  if (targetOffset > currentPosition) {
    body.style.WebkitTransform =
      "translate(0, -" + (targetOffset - currentPosition) + "px)";
    body.style.MozTransform =
      "translate(0, -" + (targetOffset - currentPosition) + "px)";
    body.style.transform =
      "translate(0, -" + (targetOffset - currentPosition) + "px)";
  } else {
    body.style.WebkitTransform =
      "translate(0, +" + (currentPosition - targetOffset) + "px)";
    body.style.MozTransform =
      "translate(0, +" + (currentPosition - targetOffset) + "px)";
    body.style.transform =
      "translate(0, +" + (currentPosition - targetOffset) + "px)";
  }

  const scrollTimeout = window.setTimeout(function() {
    body.classList.remove("in-transition");
    body.style.cssText = "";
    window.scrollTo(0, targetOffset);
    clearTimeout(scrollTimeout);
  }, animateTime);
};

export default scroll;
