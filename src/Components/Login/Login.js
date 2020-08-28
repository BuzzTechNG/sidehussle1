import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./Login.css";
import "./logindark.scss";
import { login } from "../../apolloHelper";
class LogIn extends Component {
  state = {
    Username: "",
    Password: "",
    loading:false,
    response: ""
  };
  line() {
    return <div className="line"></div>;
  }
  inputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    
  };
  
   login = async ()=>{
    this.setState({loading:true,response:""})
   const response = await login(this.state.Username,this.state.Password)
   
   console.log(response)
   this.setState({loading:false, response:response.data.login.message})
  }

  render() {
    // const [login, { data , loading, error }] =  useMutation(LOGIN)
    return (
      <div>
    
                  <input
                  name="Username"
            className="inputElement"
            value={this.state.email}
            type="mail"
            placeholder="Email or Phone Number"
            onChange={this.inputHandler}
          />{" "}
        
        
          <input
          name="Password"
            className="inputElement"
            value={this.state.Password}
            placeholder="Password"
            onChange={this.inputHandler}
            type="password"
          />
        
        <div className="row justify-content-end mr-2">
          <div className="mb-4 info link">Forgotten password?</div>
        </div>
        <div style={{height:"50px"}}>{!this.state.loading ? 
        <Link
          // to="/dashboard"
          onClick={this.login}
          className="buttonLogin link text-white"
          title="Log in to your dashboard"
        >
          Log in
        </Link> : 
        <img style={{height:"100%"}} src={require('../../assets/sh-logo-svg.svg')} alt="loading"/>
        }
        </div>
      <div style={{height:"10px"}} className="subtitle1 text-left">{
        this.state.response
        }</div>
        <br></br>
        <div className="line-div my-2">
          {this.line()}
          <div>OR</div>
          {this.line()}
        </div>
        <div className="row justify-content-center my-4 text-white">
          <div
            className="col-5 facebook padding link"
            title="Log in with your facebook account"
          >
            <i className="fa fa-facebook mr-2 i"></i>
            Facebook
          </div>
          <div className="col-1"></div>
          <div
            className="col-5 google padding link"
            title="Log in with your google account"
          >
            <i className="fa fa-google mr-2 i"></i>
            Google
          </div>
        </div>
        <div className="mt-4 mb-4 info">
          Don't have an account?{" "}
          <span
            className="link"
            onClick={this.props.switchView}
            style={{ color: "#44c" }}
          >
            Sign up
          </span>
        </div>
        <div className="row justify-content-center my-4">
          <div
            className="playstore store-settings link"
            title="Download for android device on Playstore"
          ></div>
          <div style={{ width: "15px" }}></div>
          <div
            className="appstore store-settings link"
            title="Download for iOS device o App Store"
          ></div>
        </div>
      </div>
    );
  }
}

export default LogIn;
