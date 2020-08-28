import React from "react";

import "./Userlogger.css";

import LogIn from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import DarkModeContext, { DarkModeToggler } from "../../DarkModeContext";

class Userlogger extends React.Component {
  constructor() {
    super();
    this.state = {
      signUpView: true,
    };
  }
  switchView = () => {
    this.setState({ signUpView: !this.state.signUpView });
  };
  renderContent = () => {
    switch (this.state.signUpView) {
      case true:
        return <LogIn switchView={this.switchView} />;
      case false:
        return <Register switchView={this.switchView} />;
      default:
    }
  };

  renderContentinsideButton = () => {
    switch (this.state.signUpView) {
      case true:
        return "SignUp";
      case false:
        return "Log In";
      default:
    }
  };
  static contextType = DarkModeContext;
  render() {
    const mode = this.context[0];
    return (
      <div className="main-background" dark={mode}>
        <div className="userLogger">
          <DarkModeToggler />
          <div>
            <img
              src={require("../../assets/logo-with-name.png")}
              alt="SideHussle Logo"
              title="Sidehussle Logo"
              style={{ width: "250px", height: "100%" }}
            ></img>
          </div>
          <br></br>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default Userlogger;
