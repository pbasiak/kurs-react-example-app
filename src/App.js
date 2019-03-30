import React, { Component } from 'react';
import './App.css';

function Heading(props) {
  return (
    <h1>
      {props.title}
    </h1>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading title="React App"/>
      </div>
    );
  }
}

export default App;
