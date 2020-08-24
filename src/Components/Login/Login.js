import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

class LogIn extends Component {
  state = {
    Username: "",
    Password: "",
  };
  line() {
    return (<div className="line"></div>);
  }
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
            placeholder="Email or Phone Number"
            onChange={this.inputHandler}
          />{" "}
        </p>
        <p>
          <input
            className="inputElement"
            value={this.state.Password}
            placeholder="Password"
            onChange={this.inputHandler}
            type="password"
          />
        </p>
        <div className="row justify-content-end mr-2"> 
        <div className="mb-4 info link">
        Forgotten password?
        </div>
        
        </div>
        <Link to="/dashboard" className="buttonLogin link text-white">
          Log in
        </Link>
        <br></br>
        <div className="line-div my-2">
          {this.line()}
          <div>OR</div>
          {this.line()}
        </div>
        <div className="row justify-content-center my-4 text-white">
        <div className="col-5 facebook padding link">
        <i className="fa fa-facebook mr-2 i"></i>
        Facebook
        </div>
        <div className="col-1"></div>
        <div className="col-5 google padding link">
        <i className="fa fa-google mr-2 i"></i>
        Google
        </div>
        </div>
        <div className="mt-4 mb-4 info">
        Don't have an account? <span className="link" onClick={this.props.switchView} style={{color:"#44c"}}>Sign up</span>
        </div>
        <div className="row justify-content-center my-4">
          <div className="playstore store-settings link"></div>
          <div style={{width:"15px"}}></div>
          <div className="appstore store-settings link"></div>
        </div>
      </div>
    );
  }
}

export default LogIn;
