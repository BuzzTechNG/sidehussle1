import React, { Component } from "react";
import "./Register.css";
import { register } from "../../apolloHelper";

class SignUp extends Component {
  state = {
    firstName: "",
    middleName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    email: "",
    address: "",
    loading: false,
    response: {},
  };

  inputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  register = async () => {
    this.setState({ loading: true, response: {} });
    const response = await register(
      this.state.firstName,
      this.state.middleName,
      this.state.lastName,
      this.state.password,
      this.state.confirmPassword,
      this.state.address,
      this.state.mobileNumber,
      this.state.email
    );

    console.log(response);
    this.setState({
      loading: false,
      response: response.data.register.userDetail,
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
            name="middleName"
            value={this.state.middleName}
            placeholder="Middle Name"
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
            name="email"
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
            name="password"
            type="password"
            onChange={this.inputHandler}
          />
        </p>

        <p>
          <input
            className="inputElement"
            value={this.state.confirmPassword}
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            onChange={this.inputHandler}
          />
        </p>
        <p>
          <input
            className="inputElement"
            value={this.state.address}
            name="address"
            placeholder="Enter your address"
            onChange={this.inputHandler}
            type="text"
          />
        </p>

        <p>
          <input
            className="inputElement"
            type="number"
            name="mobileNumber"
            value={this.state.mobileNumber}
            placeholder="Mobile Number"
            onChange={this.inputHandler}
            title="Your mobile number"
          />
        </p>

        <button
          className="buttonLogin link"
          title="Register your account"
          onClick={this.register}
        >
          Register{" "}
        </button>
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
