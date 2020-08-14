import React, { Component } from "react";

import "./Dashboard";

import Mainpage from "../../Components/Dashboard-components/Mainpage/Mainpage";
import NavInfo from "../../Components/Dashboard-components/NavInfo/NavInfo";
import Footer from "../../Components/Dashboard-components/Footer/Footer";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
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
