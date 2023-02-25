/*
 * @Author: Narnia
 * @Date:   2017-12-19 22:38:23
 * @Last Modified by:   Narnia
 * @Last Modified time: 2017-12-19 23:32:01
 */
import React from "react";

const SectionRenderer = ({ sections }) =>
  sections.map((section) => {
    //take the filename to get the id
    const filename = section.slice(0, -3);
    const sectionId = filename.split("_");

    const ImportFile = require(`./Sections/${section}`).default; //dynamically import the sections
    return (
      <ImportFile key={sectionId[1]} className="sections" id={sectionId[1]} />
    );
  });

const Sections = ({ sections }) => {
  return (
    <div className="section-container" id="section-container">
      <SectionRenderer sections={sections} />
    </div>
  );
};

export default Sections;
