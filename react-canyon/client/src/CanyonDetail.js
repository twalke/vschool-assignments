import React, { Component } from 'react';
import axios from "axios";

class CanyonDetail extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      rating: "",
      minTime: "",
      distance: "",
      totalRaps: "",
      longestRap: "",
      description: "",
      loading: true,
      errMsg: null
    }
  }

  getCanyon() {
    axios.get("/api/canyons/:id")
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
    this.getCanyon();
  }

  render() {
    return (
      // this.props.children(this.state)
      <div>sup</div>
    );
  }
}

export default CanyonDetail;
