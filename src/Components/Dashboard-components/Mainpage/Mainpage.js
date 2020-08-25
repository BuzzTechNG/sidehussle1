import React, { Component } from "react";
import "./Mainpage.css";
import "./MainPageDark.scss";
import Jobprogress from "./Jobprogress/Jobprogress";
import PostJob from "./Jobprogress/PostJob";
import Previousjobs from "./Previousjobs/Previousjobs";
import Startjob from "./Startjob/Startjob";
import { Route, Switch } from "react-router-dom";
import Availablejobs from "./Availablejobs/Availablejobs";
import Home from "./Home/Home.jsx";
import Thistory from "./Transactionhistory/Transactionhistory";
import jobPage from "./Jobprogress/JobPage";

class Mainpage extends Component {
  render() {
    return (
      <div className="mainpage">
        <Switch>
          <Route path="/dashboard/transactionhistory" component={Thistory} />
          <Route path="/dashboard/startjob" component={Startjob} />
          <Route path="/dashboard/inprogress" component={Jobprogress} />
          <Route path="/dashboard/postjob" component={PostJob} />
          <Route path="/dashboard/avaliablejobs/:id" component={jobPage} />
          <Route path="/dashboard/previousjobs" component={Previousjobs} />
          <Route
            path="/dashboard/avaliablejobs"
            exact
            component={Availablejobs}
          />
          <Route path="/dashboard/" exact component={Home} />
        </Switch>
      </div>
    );
  }
}
export default Mainpage;
