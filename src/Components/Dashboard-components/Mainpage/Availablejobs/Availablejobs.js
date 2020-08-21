import React, { Component } from "react";

import availableJobs from "../AvailablejobsList";
import Card from "./Card/Card";

class Availablejobs extends Component {
  state = {
    availableJobs: availableJobs,
  };
  render() {
    const aJobs = this.state.availableJobs.map((aJob) => (
      <Card
        key={aJob.Id}
        topic={aJob.title}
        description={aJob.description}
        price={aJob.price}
      />
    ));

    return (
      
      <div className="full-width">
      <div className="container-v mt-4">
      <div className="row my-4">
      <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
      <div className="row bg-primary"> hi </div>
      </div>
      <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
      <div className="row">
        <div className="col-7 row" >
        <div className="ml-4 p-2" style={{border:"1px solid #aaa",width:"80%"}}>
        <span> <i className="fa fa-search ml-1"></i></span> <input style={{outline:"none",border:"none",width:"90%"}} type="text" />
        </div>  
        </div>
        <div className="col-4" >
        sort by - <span className="text-primary">latest</span>
        </div>
      </div>
      <div className="row">{aJobs}</div>
      </div>

      </div> 
      </div> 
      </div>
    );
  }
}
export default Availablejobs;
