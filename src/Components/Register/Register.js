import React, { Component } from "react";
import "./Register.css";
import Apollo from "../../apolloHelper";
const apollo = new Apollo();

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
    firstNameRequired: false,
    middleNameRequired: false,
    lastNameRequired: false,
    passwordRequired: false,
    confirmPasswordRequired: false,
    mobileNumberRequired: false,
    emailRequired: false,
    addressRequired: false,
  };

  inputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  validateForm = () => {
    let error = 0;

    const validationItems = [
      "firstName",
      "middleName",
      "lastName",
      "password",
      "confirmPassword",
      "mobileNumber",
      "email",
      "address",
      "loading",
    ]; //items to validate would be inserted here

    validationItems.forEach((item) => {
      if (this.state[item].length === 0) {
        error++;
        this.state[`${item}Required`] = true;
      }
    });
    if (error > 0) {
      this.setState({});
    }
    return error;
  };

  cancelError = (event) => {
    const { name } = event.target;
    if (this.state[`${name}Required`] && this.state[name].length > 0) {
      this.setState({
        [`${name}Required`]: false,
      });
    }
  };

  register = async () => {
    if (this.validateForm() > 0) return;

    this.setState({ loading: true, response: {} });
    // uncomment block after testing validation
    const response = await apollo.register(
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
      <div className="register">
        <div>
          <input
            show-validation-error={`${this.state.firstNameRequired}`}
            className="inputElement"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.inputHandler}
            type="text"
            onBlur={this.cancelError}
          />
          {this.state.firstNameRequired && (
            <div className="validation-message"></div>
          )}
        </div>
        <div>
          <input
            show-validation-error={`${this.state.middleNameRequired}`}
            className="inputElement"
            name="middleName"
            value={this.state.middleName}
            placeholder="Middle Name"
            onChange={this.inputHandler}
            type="text"
            onBlur={this.cancelError}
          />
          {this.state.middleNameRequired && (
            <div className="validation-message"></div>
          )}
        </div>
        <div>
          <input
            show-validation-error={`${this.state.lastNameRequired}`}
            className="inputElement"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.inputHandler}
            type="text"
            onBlur={this.cancelError}
          />
          {this.state.lastNameRequired && (
            <div className="validation-message"></div>
          )}
        </div>
        <div>
          <input
            show-validation-error={`${this.state.emailRequired}`}
            className="inputElement"
            value={this.state.email}
            name="email"
            placeholder="E-mail Address"
            type="mail"
            onBlur={this.cancelError}
            onChange={this.inputHandler}
          />
          {this.state.emailRequired && (
            <div className="validation-message"></div>
          )}
        </div>
        <div>
          <input
            show-validation-error={`${this.state.passwordRequired}`}
            className="inputElement"
            value={this.state.password}
            placeholder="Password"
            name="password"
            type="password"
            onChange={this.inputHandler}
            onBlur={this.cancelError}
          />
          {this.state.passwordRequired && (
            <div className="validation-message"></div>
          )}
        </div>

        <div>
          <input
            show-validation-error={`${this.state.confirmPasswordRequired}`}
            className="inputElement"
            value={this.state.confirmPassword}
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            onChange={this.inputHandler}
            onBlur={this.cancelError}
          />
          {this.state.confirmPasswordRequired && (
            <div className="validation-message"></div>
          )}
        </div>
        <div>
          <input
            show-validation-error={`${this.state.addressRequired}`}
            className="inputElement"
            value={this.state.address}
            name="address"
            placeholder="Enter your address"
            onChange={this.inputHandler}
            type="text"
            onBlur={this.cancelError}
          />
          {this.state.addressRequired && (
            <div className="validation-message"></div>
          )}
        </div>

        <div>
          <input
            show-validation-error={`${this.state.mobileNumberRequired}`}
            className="inputElement"
            type="number"
            name="mobileNumber"
            value={this.state.mobileNumber}
            placeholder="Mobile Number"
            onChange={this.inputHandler}
            title="Your mobile number"
            onBlur={this.cancelError}
          />
          {this.state.mobileNumberRequired && (
            <div className="validation-message"></div>
          )}
        </div>

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
