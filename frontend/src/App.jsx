import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Navigation from "./Navigation";
import Sections from "./Sections";
import { serverUrl } from "./config";

const App = () => {
  const [files, setFiles] = useState([]);
  const [tabs, setTabs] = useState([]);

  const getData = async () => {
    const {
      data: { results },
    } = await axios({
      method: "get",
      url: `${serverUrl}/`,
    });

    const trimmed = results.map((files) => {
      const filename = files.slice(0, -3);
      const file = filename.split("_");
      return file[1];
    });

    setFiles(results || []);
    setTabs(trimmed || []);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navigation tabs={tabs} />
      <Sections sections={files} />
    </div>
  );
};

export default App;
