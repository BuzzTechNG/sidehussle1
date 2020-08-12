import React, { Component } from "react";
import "./Register.css";

class SignUp extends Component {
  state = {
    name: "",
    password: "",
    password2: "",
    DOB: "",
    email: "",
    location: "",
  };

  inputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <p>
          <input
            className="inputElement"
            name="name"
            value={this.state.name}
            placeholder="Enter Your Name"
            onChange={this.inputHandler}
            type="text"
          />
        </p>
        <p>
          <input
            className="inputElement"
            value={this.state.email}
            placeholder="E-mail Address"
            type="mail"
            onChange={this.inputHandler}
          />
        </p>
        <p>
          <input
            className="inputElement"
            value={this.state.password}
            placeholder="Enter Your Password"
            type="password"
            onChange={this.inputHandler}
          />
        </p>

        <p>
          <input
            className="inputElement"
            value={this.state.password2}
            placeholder="Enter Your Password Again"
            type="password"
            onChange={this.inputHandler}
          />
        </p>
        <p>
          <input
            className="inputElement"
            value={this.state.location}
            placeholder="Enter your location"
            onChange={this.inputHandler}
            type="password"
          />
        </p>

        <p>
          <input
            className="inputElement"
            type="number"
            value={this.state.DOB}
            placeholder="Enter your Date of Birth format(dd/mm/yyyy)"
            onChange={this.inputHandler}
          />
        </p>

        <button className="button">Register </button>
        <br></br>
      </div>
    );
  }
}

export default SignUp;
