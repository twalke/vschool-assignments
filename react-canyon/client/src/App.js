import React, { Component } from 'react';
import './App.css';

import Nav from "./Nav";
import SearchCanyons from "./SearchCanyons"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <SearchCanyons />
      </div>
    );
  }
}

export default App;
