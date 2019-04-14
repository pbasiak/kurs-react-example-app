import React, { Component } from 'react';

import {Heading} from './components/Heading/Heading';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading title="React App" variant="secondary"/>
      </div>
    );
  }
}

export default App;
