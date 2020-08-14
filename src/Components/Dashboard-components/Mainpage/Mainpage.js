import React, { Component } from "react";
import "./Mainpage.css";
import Jobprogress from "./Jobprogress/Jobprogress";
import Previousjobs from "./Previousjobs/Previousjobs";
import Startjob from "./Startjob/Startjob";
import { Route, Switch } from "react-router-dom";
import Availablejobs from "./Availablejobs/Availablejobs";

class Mainpage extends Component {
  render() {
    return (
      <div className="mainpage">
        <h1>Mainpage</h1>

        <Switch>
          <Route path="/startjob" component={Startjob} />
          <Route path="/inprogress" component={Jobprogress} />
          <Route path="/previousjobs" component={Previousjobs} />
          <Route path="/" exact component={Availablejobs} />
        </Switch>
      </div>
    );
  }
}
export default Mainpage;
