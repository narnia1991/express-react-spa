import React from 'react';
import './App.css';
import axios from 'axios';
import Navigation from './Navigation';
import Sections from './Sections';
import { serverUrl } from './config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      tabs: []
    };
  }

  componentDidMount = async () => {
    try {
      //get the filenames from the sections folder
      const files = await axios({
        method: 'get',
        url: `${serverUrl}/`
      });

      //extract names from filenames
      const trimmed = files.data.results.map(files => {
        const filename = files.slice(0, -3);
        const file = filename.split('_');
        return file[1];
      });

      this.setState({ files: files.data.results, tabs: trimmed });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="App">
        {Navigation(this.state.tabs)}
        {Sections(this.state.files)}
      </div>
    );
  }
}

export default App;

