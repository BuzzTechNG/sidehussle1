import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./Login.css";

class LogIn extends Component {
  state = {
    Username: "",
    Password: "",
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
        <br />
        <p>
          <input
            className="inputElement"
            value={this.state.email}
            type="mail"
            placeholder="Enter Your email Address"
            onChange={this.inputHandler}
          />{" "}
        </p>
        <p>
          <input
            className="inputElement"
            value={this.state.Password}
            placeholder="Enter Your Password"
            onChange={this.inputHandler}
            type="password"
          />
          <br />
        </p>

        <Link to="/dashboard" className="buttonLogin">LogIn</Link> 
        <br></br>
      </div>
    );
  }
}

export default LogIn;
