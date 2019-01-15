import React, {Component} from 'react';

import Controls from './Controls';
import Grid from './Grid';

class Platform extends Component {
  constructor() {
    super();
    this.state = {
      colors: ["white", "white", "white", "white"]
    }
    this.handleSmallTime = this.handleSmallTime.bind(this);
    this.handlePartyDj = this.handlePartyDj.bind(this);
  }

handleSmallTime() {
  this.setState(ps => ({
    colors: ps.colors.every(color => color === "black") ?
    ps.colors.map(color => "white") :
    ps.colors.map(color => "black")
  }))
}

handlePartyDj() {
  this.setState(ps => ({
    colors: ps.colors.map((color, i) => i < ps.colors.length / 2 ? "purple" : color)
  }))
}

  render() {
    const {colors} = this.state;
    return (
      <div>
        <Controls handleSmallTime={this.handleSmallTime} handlePartyDj={this.handlePartyDj}/>
        <Grid colors = {colors} />
      </div>
    )
  }
}

export default Platform;
