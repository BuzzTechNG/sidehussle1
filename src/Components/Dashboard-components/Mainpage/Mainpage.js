import React, { Component } from "react";
import "./Mainpage.css";
import "./MainPageDark.scss";
import Jobprogress from "./Jobprogress/Jobprogress";
import PostJob from "./Jobprogress/PostJob";
import Previousjobs from "./Previousjobs/Previousjobs";
import Startjob from "./Startjob/Startjob";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Availablejobs from "./Availablejobs/Availablejobs";
import MyJobs from "./Availablejobs/MyJobs";
import ActiveJobs from "./Availablejobs/ActiveJobs";
import Home from "./Home/Home.jsx";
import Thistory from "./Transactionhistory/Transactionhistory";
import DepositFund from "./Transactionhistory/DepositFund";
import AccountSetUp from "./Transactionhistory/AccountSetUp";
import WithdrawFund from "./Transactionhistory/WithdrawFund";
import jobPage from "./Jobprogress/JobPage";
import Report from "./Report/Report";
import Message from "./MessageModule/Message";
import Proposal from './Availablejobs/MyProposals'
import Market from "./Market/MarketView"
// import ItemPage from "./Market/MarketView"

import Findperson from "./Findperson/Findpersons";
import { appLogic, apolloHelper } from "../../..";
import PageNotFound from "./PageNotFound";
import ItemPage from "./Market/ItemPage";


class Mainpage extends Component {
  constructor(props){
    super(props)
    this.updateLocation()
  }
  async updateLocation(){
  const location = await appLogic.getLocationLatLog()
  const newLocation = await apolloHelper.updateUserLocation(location)
  console.log(newLocation)
}
  render() {
    return (
      <div className="mainpage">
      
        <Switch>
          <Route path="/dashboard/transactionhistory" component={Thistory} />
          <Route path="/dashboard/startjob" component={Startjob} />
          <Route path="/dashboard/inprogress" component={Jobprogress} />
          <Route path="/dashboard/myproposals" component={Proposal} />
          <Route path="/dashboard/postjob" component={PostJob} />
          <Route path="/dashboard/jobprofile/:id" component={jobPage} />
          <Route path="/dashboard/myjobs" component={MyJobs} />
          <Route path="/dashboard/activejobs" component={ActiveJobs} />
          <Route path="/dashboard/previousjobs" component={Previousjobs} />
          <Route path="/dashboard/message" component={Message} />
          <Route path="/dashboard/deposit" component={DepositFund} />
          <Route path="/dashboard/account_setup" component={AccountSetUp} />
          <Route path="/dashboard/withdraw" component={WithdrawFund} />
          <Route path="/dashboard/finduser" component={Findperson} />
          <Route path="/dashboard/report" component={Report} />
          <Route path="/dashboard/market" component={Market} />
          <Route path="/dashboard/item" component={ItemPage} />
          <Route
            path="/dashboard/avaliablejobs"
            exact
            component={Availablejobs}
          />
          <Route path="/dashboard/" exact component={Home} />
          <Route path="*" exact component={PageNotFound} />
          </Switch>
      
      </div>
    );
  }
}
export default Mainpage;
