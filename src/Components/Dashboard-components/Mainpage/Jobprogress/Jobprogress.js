import React, { Component } from "react";
import "./Jobprogress.css";

class Jobprogress extends Component {
  state = {
    loading: "Loader",
    inProgress: "You have a job in Progress",
  };
  taskDone = () => {
    this.setState({
      loading: "",
      inProgress: "You don't have any task. Await payment.",
    });
  };
  render() {
    return (
      <div>
        <div className={this.state.loading}></div>
        <h1>{this.state.inProgress}</h1>
        <br />
        <br />
        <p>Click button when you are done:</p>
        <button className="btn-success mb-5" onClick={this.taskDone}>
          End Task
        </button>
      </div>
    );
  }
}
export default Jobprogress;
