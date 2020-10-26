import React, { Component } from "react";
import "./Register.css";
import Apollo from "../../apolloHelper";
import { withRouter } from "react-router";

const apollo = new Apollo();

class SignUp extends Component {
  constructor(props){
    super(props)
    this.state = {
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
      passwordLength: false,
      confirmPasswordError: false,
      confirmPasswordErrorMessage: "",
      passwordErrorMessage:"",
      mobileError: false,
      mobileErrorMessage: "",
    };
  }
  

  NOT_NULL = "This Field is Required*"
  INVALID = "Not acceptable (invalid number)*"
  DONT_MATCH = "Doesn't match password*"
  GREATER_THAN_VALUE = "Password lenght must be greater than 6*"
  
  isMobileValid = () => {
    if(this.state.mobileNumber.length <= 1){
      this.setState({mobileError:true, mobileErrorMessage:this.NOT_NULL})
      return false
    }
    if(!this.state.mobileNumber.match(/^(\+\d{1,3}[- ]?)?\d{11}$/) ||  (this.state.mobileNumber.match(/0{5,}/)) ){
      this.setState({mobileError:true, mobileErrorMessage:this.INVALID})
      return false
    }
    this.setState({mobileError:false,mobileErrorMessage:""})
    return true

  }
  
  isPasswordValid = () =>{
    
    if(this.state.password.length <= 1){
      
      this.setState({passwordLength:true, passwordErrorMessage:this.NOT_NULL})
      return false
    }
    if(this.state.password.length > 1 && this.state.password.length < 6){
      
      this.setState({passwordLength:true, passwordErrorMessage: this.GREATER_THAN_VALUE})
      return false
    }

    if(this.state.confirmPassword.length > 0){
      this.isConfirmPasswordMatch()
    }
    this.setState({passwordLength:false,passwordErrorMessage:""})
    return true
    
  }
  isConfirmPasswordMatch = () =>{
    
    if(this.state.password.length <= 1 ){
      
      this.setState({confirmPasswordError:true, confirmPasswordErrorMessage:this.NOT_NULL})
      return false
    }
    if(this.state.password !== this.state.confirmPassword ){
      
      this.setState({confirmPasswordError:true, confirmPasswordErrorMessage:this.DONT_MATCH})
      return false
    }
    
    this.setState({confirmPasswordError:false,confirmPasswordErrorMessage:""})
    return true
    
  }

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
      
      "lastName",
      
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
    
    if (this.validateForm() > 0 || !this.isMobileValid() || !this.isPasswordValid() || !this.isConfirmPasswordMatch() ){ return;}

    this.setState({ loading: true, response: {} });
    // uncomment block after testing validation
    const response = await apollo.register(
      this.state.firstName,
      // this.state.middleName,
      this.state.lastName,
      this.state.password,
      this.state.confirmPassword,
      // this.state.address,
      this.state.mobileNumber,
      // this.state.email
    );

    console.log(response);
    this.setState({
      loading: false,
      response: response.data.register.message,
    });
    if(response.data.register.message === "successful"){
      this.registerSuccessfull({
        mobileNumber:response.data.register.mobileNumber, 
        id: response.data.register.id
      })
    }
  };

  registerSuccessfull({mobileNumber,id}){
    localStorage.setItem("mobileNumber",mobileNumber)
    this.props.history.push(`/verifyUser/${id}`);
  }

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
        {/* <div>
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
        </div> */}
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
            show-validation-error={`${this.state.mobileNumberRequired}`}
            className="inputElement"
            type="number"
            name="mobileNumber"
            value={this.state.mobileNumber}
            placeholder="Mobile Number"
            onChange={(e)=>{this.inputHandler(e);}}
            title="Your mobile number"
            onBlur={(e)=>{this.cancelError(e);this.isMobileValid()}}
          />
          {this.state.mobileError && (
            <div className="password-message">{this.state.mobileErrorMessage}</div>
          )}
        </div>
        {/* <div>
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
        </div> */}
        <div>
          <input
            // show-validation-error={`${this.state.passwordRequired}`}
            show-password-error={`${this.state.passwordLength}`}
            className="inputElement"
            value={this.state.password}
            placeholder="Password"
            name="password"
            type="password"
            onChange={(e) =>{this.inputHandler(e);this.isPasswordValid()}}
            onBlur={this.cancelError}
          />
          {/* {this.state.passwordRequired && (
            <div className="validation-message"></div>
          )} */}
          {this.state.passwordLength && (
            <div className="password-message"> {this.state.passwordErrorMessage}</div>
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
            onBlur={this.isConfirmPasswordMatch}
          />
          {this.state.confirmPasswordError && (
            <div className="password-message">{this.state.confirmPasswordErrorMessage}</div>
          )}
        </div>
        {/* <div>
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
        </div> */}

        

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

export default withRouter(SignUp);
