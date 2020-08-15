import React, { Component } from "react";
import previousJobsList from "../../Mainpage/Previousjobslist";
import Previousjobview from "./Previousjobstable/Previousjobtable";

import "./Previousjobs.css";

class Previousjob extends Component {
  state = {
    previousJobsList: previousJobsList,
  };
  render() {
    const previousJob = this.state.previousJobsList.map((pJobList) => (
      <Previousjobview
        key={pJobList.id}
        id={pJobList.id}
        topic={pJobList.title}
        description={pJobList.description}
        price={pJobList.price}
        location={pJobList.location}
      />
    ));

    return (
      <div className="container">
        <div className="row">{previousJob}</div>
      </div>
    );
  }
}
export default Previousjob;
