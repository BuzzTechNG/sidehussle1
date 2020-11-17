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
import AccountSetUp from "./Settings/AccountSetUp";
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
import SetupStore from "./Market/SetupStore";
import ProductList from "./Market/ProductList";
import ProductPage from "./Market/ProductPage";
import MobileMessage from "./MessageModule/MobileMessage";
import Wallet from "./Transactionhistory/Wallet";
import UserPage from "./Home/UserPage";
import Collection from "./Market/Collection";
import CollectionList from "./Market/CollectionList";


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
      <div className="mainpage" >
      
        <Switch>
          <Route path="/transactionhistory" component={Thistory} />
          <Route path="/startjob" component={Startjob} />
          <Route path="/inprogress" component={Jobprogress} />
          <Route path="/myproposals" component={Proposal} />
          <Route path="/postjob" component={PostJob} />
          <Route path="/jobprofile/:id" component={jobPage} />
          <Route path="/myjobs" component={MyJobs} />
          <Route path="/activejobs" component={ActiveJobs} />
          <Route path="/previousjobs" component={Previousjobs} />
          <Route path="/message" exact component={Message} />
          <Route path="/message/:id" component={MobileMessage} />
          <Route path="/deposit" component={DepositFund} />
          <Route path="/account_setup" component={AccountSetUp} />
          <Route path="/store_setup" component={SetupStore} />
          <Route path="/withdraw" component={WithdrawFund} />
          <Route path="/finduser" component={Findperson} />
          <Route path="/report" component={Report} />
          <Route path="/market" component={Market} />
          <Route path="/collection" component={Collection} />
          <Route path="/collection_list" component={CollectionList} />
          <Route path="/item" component={ItemPage} />
          <Route path="/productlist" component={ProductList} />
          <Route path="/product" component={ProductPage} />
          <Route path="/wallet" component={Wallet} />
          <Route
            path="/avaliablejobs"
            exact
            component={Availablejobs}
          />
          <Route path="/user/:id" component={UserPage} />
          <Route path="/"  component={Home} />
          {/* <Route path="/:id" exact  component={Home} /> */}
          <Route path="*" exact component={PageNotFound} />
          </Switch>
      
      </div>
    );
  }
}
export default Mainpage;
