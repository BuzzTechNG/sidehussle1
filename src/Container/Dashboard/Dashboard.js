import React, { Component } from "react";

import "./Dashboard";

import Mainpage from "../../Components/Dashboard-components/Mainpage/Mainpage";
import NavInfo from "../../Components/Dashboard-components/NavInfo/NavInfo";
import Footer from "../../Components/Dashboard-components/Footer/Footer";
import DarkModeContext from "../../DarkModeContext";
import { CustomiseDisplayModal } from "../../Components/Dashboard-components/Mainpage/Modals/Modal";

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
        <div className="container-fluid" dark={mode[0]} theme={mode[1]}>
        <img className="container-fluid-bg" src={require('../../assets/main-bg.svg')} />
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
