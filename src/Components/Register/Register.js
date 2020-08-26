import React, { Component } from "react";
import "./Register.css";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
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
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.inputHandler}
            type="text"
          />
        </p>
        <p>
          <input
            className="inputElement"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
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
            placeholder="Password"
            type="password"
            onChange={this.inputHandler}
          />
        </p>

        <p>
          <input
            className="inputElement"
            value={this.state.password2}
            placeholder="Confirm Password"
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
            type="text"
          />
        </p>

        <p>
          <input
            className="inputElement"
            type="date"
            value={this.state.DOB}
            placeholder="Date of Birth"
            onChange={this.inputHandler}
          />
        </p>

        <button className="buttonLogin link">Register </button>
        <br></br>
        <div className="mt-4 mb-4 info">
          Already have an account?{" "}
          <span
            className="link"
            onClick={this.props.switchView}
            style={{ color: "#44c" }}
          >
            Sign In
          </span>
        </div>
      </div>
    );
  }
}

export default SignUp;
