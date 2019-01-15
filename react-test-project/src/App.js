import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button, {OkButton, NotOkButton} from "./Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>
          Default
        </Button>
        <OkButton>
        Ok
        </OkButton>
        <NotOkButton>
        Not Ok
        </NotOkButton>
      </div>
    );
  }
}

export default App;
