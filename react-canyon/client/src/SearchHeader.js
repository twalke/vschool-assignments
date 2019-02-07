import React, { Component } from 'react';
import './App.css';

class SearchCanyons extends Component {
  render() {
    return (
      <div className = "Search">
        <div className = "searchTitle">Search Canyons<hr /></div>
        <div className = "stateTitle" id = "az">Arizona</div>
        <div className = "stateTitle" id = "ca">California</div>
        <div className = "stateTitle" id = "ut">Utah</div>
        <div className = "stateTitle" id = "wa">Washington</div>
      </div>
    );
  }
}

export default SearchCanyons;
