import React, { Component } from "react";

import "./Dashboard";

import Mainpage from "../../Components/Dashboard-components/Mainpage/Mainpage";
import NavInfo from "../../Components/Dashboard-components/NavInfo/NavInfo";
import Footer from "../../Components/Dashboard-components/Footer/Footer";
import DarkModeContext from "../../DarkModeContext";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static contextType = DarkModeContext
  render() {
    const mode = this.context[0]
    return (
      <div>
        <div className="container-fluid" dark={mode}>
          <div className="row">
            <NavInfo />
            <Mainpage />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
