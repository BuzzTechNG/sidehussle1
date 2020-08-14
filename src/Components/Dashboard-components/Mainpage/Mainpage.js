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
      <div className="mainpage mx-lg-auto">
        <Switch>
          <Route path="/dashboard/startjob" component={Startjob} />
          <Route path="/dashboard/inprogress" component={Jobprogress} />
          <Route path="/dashboard/previousjobs" component={Previousjobs} />
          <Route path="/dashboard/" exact component={Availablejobs} />
        </Switch>
      </div>
    );
  }
}
export default Mainpage;
