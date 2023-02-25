/*
 * @Author: Narnia
 * @Date:   2017-12-19 05:12:22
 * @Last Modified by:   Narnia
 * @Last Modified time: 2017-12-20 00:26:15
 */

import React, { useCallback, useState } from "react";
import scroll from "./Functions/SmoothScroll";

const classes = {
  tab: {
    cursor: "pointer",
  },
  activeTab: {
    backgroundColor: "#121e1e",
    height: "inherit",
  },
  scrollButton: {
    textDecoration: "none",
    fontSize: "20px",
    color: "white",
    padding: "1rem",
  },
  mainNavigation: {
    display: "flex",
    alignContent: "center",
    position: "fixed",
    height: "10vh",
    width: "100vw",
    zIndex: 99,
    backgroundColor: "rgba(200, 200, 200, 0)",
  },
  tabContainer: {
    flex: 3,
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "flex-end",
    alignContent: "center",
  },
};

const Navigation = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState("");

  const handleClick = useCallback(
    (tab) => (e) => {
      e.preventDefault();
      scroll("section-container", tab);
      setActiveTab(tab);
    },
    [scroll, setActiveTab]
  );

  const TabRenderer = ({ navButtons }) =>
    navButtons.map((navButton) => (
      <a
        href={"#" + navButton}
        key={navButton}
        onClick={handleClick(navButton)}
        style={{
          ...classes.scrollButton,
          ...classes.tab,
          ...(navButton === activeTab ? classes.activeTab : {}),
        }}
      >
        {navButton}
      </a>
    ));

  return (
    <div
      style={classes.mainNavigation}
      className="main-navigation"
      id="main-navigation"
    >
      <div style={classes.tabContainer}>
        <TabRenderer navButtons={tabs} />
      </div>
    </div>
  );
};

export default Navigation;
