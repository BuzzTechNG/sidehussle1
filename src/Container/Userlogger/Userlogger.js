import React from "react";

import "./Userlogger.css";

import LogIn from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";

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
        return <LogIn />;
      case false:
        return <Register />;
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
  render() {
    return (
      <div className="userLogger">
        <button className="switchButton" onClick={(e) => this.switchView()}>
          {this.renderContentinsideButton()}
        </button>
        <br></br>
        {this.renderContent()}
      </div>
    );
  }
}

export default Userlogger;
