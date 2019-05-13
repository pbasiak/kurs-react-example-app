import React, { Component } from 'react';

import {Heading} from './components/Heading/Heading';

import './App.css';
import Button from './components/Button/Button';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isClicked: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState(state => ({
      isClicked: !state.isClicked,
    }));
  }

  render() {
    return (
      <div className="App">
        <Heading title="React App" variant="secondary"/>
        <Button onClick={this.onClick}>
          {this.state.isClicked ? 'Clicked! Click again to reset' : 'Click me!'}
        </Button>
      </div>
    );
  }
}

export default App;
