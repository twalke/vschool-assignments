import React, { Component } from 'react';

import TodoService from "./TodoService";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <TodoService />
      </div>
    )
  }
}

export default App;
