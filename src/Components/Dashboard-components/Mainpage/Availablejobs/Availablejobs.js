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
      <div className="container">
        <div className="row">{aJobs}</div>
      </div>
    );
  }
}
export default Availablejobs;
