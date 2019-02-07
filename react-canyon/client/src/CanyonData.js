import React, { Component } from 'react';
import './App.css';
import SearchHeader from "./SearchHeader"

import axios from "axios";

export default class CanyonData extends Component {
  constructor() {
    super();
    this.state = {
      canyons: [],
      loading: true,
      errMsg: null
    }
  }

  getCanyons() {
    axios.get("/api/canyon")
    .then(response => this.setState({
      canyons: response.data,
      loading: false,
      errMsg: null
    }))
    .catch (err => this.setState({
      loading: false,
      errMsg: "data unavailable"
    }))
  }

  componentDidMount() {
    this.getCanyons();
  }

  render() {
    return (
      this.props.children(this.state)
    );
  }
}
