import React, { Component } from 'react';
import './App.css';

import {Link} from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className = "Nav">
        <div className = "navTitle">Canyon Guide</div>
        <div className = "buttonDiv"><Link className="navButton" to={{pathname: `/`}}>Search Canyons</Link></div>
        <div className = "buttonDiv"><a className="navButton">Canyons Near Me</a></div>
        <div className = "buttonDiv"><a className="navButton">Favorites</a></div>
        <div className = "buttonDiv"><a className="navButton">Resources</a></div>
        <div className = "buttonDiv"><a className="navButton">Contact</a></div>
      </div>
    );
  }
}

export default Nav;
