import React from "react";

class SearchCanyonPage extends Component {
  constructor() {
    super();
    this.state = {
      minMax: "",
      age: "",
      color: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: {minMax, value} }) {
    this.setState({
      [minMax]: value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
    this.setState ({
      minMax: "",
      age: "",
      color: ""
    })
  }

  render() {
    const {minMax, age, color} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="minMax" value={minMax} type="text" placeholder="Enter Name" />
        <input onChange={this.handleChange} name="age" value={age} type="number" placeholder="Enter Age" />
        <input onChange={this.handleChange} name="color" value={color} type="text" placeholder="Enter Color" />
        <input onChange={this.handleChange} name="color" value={color} type="text" placeholder="Enter Color" />
        <button>Submit</button>
        </form>
    )
  }
}

export default SearchCanyonPage;
