import React from "react";

import "./Userlogger.css";

import LogIn from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pressed: true,
    };
  }
  pressing = () => {
    this.setState({ pressed: !this.state.pressed });
  };
  renderContent = () => {
    switch (this.state.pressed) {
      case true:
        return <LogIn />;
      case false:
        return <Register />;
      default:
    }
  };

  renderContentinsideButton = () => {
    switch (this.state.pressed) {
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
        <button className="switchButton" onClick={(e) => this.pressing()}>
          {this.renderContentinsideButton()}
        </button>
        <br></br>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
