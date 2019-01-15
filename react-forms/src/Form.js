import React, {Component} from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      color: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: {name, value} }) {
    this.setState({
      [name]: value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
    this.setState ({
      name: "",
      age: "",
      color: ""
    })
  }

  render() {
    const {name, age, color} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="name" value={name} type="text" placeholder="Enter Name" />
        <input onChange={this.handleChange} name="age" value={age} type="number" placeholder="Enter Age" />
        <input onChange={this.handleChange} name="color" value={color} type="text" placeholder="Enter Color" />
        <button>Submit</button>
        </form>
    )
  }
}

export default Form;
