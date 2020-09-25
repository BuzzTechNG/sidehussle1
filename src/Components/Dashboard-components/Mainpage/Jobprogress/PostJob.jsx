import React, { Component } from "react";
import Apollo from "../../../../apolloHelper";
const apollo = new Apollo();

export default class PostJob extends Component {
  state = {
    userId: null,
    jobTitle: "",
    jobDescription: "",
    jobLocation: "",
    jobSpecification: "",
    locationSensitive: false,
    JobBudget: "",
    loading: false,
    response: {},
    // jobTitleRequired: false,
    // jobDescriptionRequired: false,
    // //jobLocationRequired:false,
    // jobSpecificationRequired: false,
    // locationSensitiveRequired: false,
    // JobBudgetRequired: false,
    showBtn: false,
  };

  inputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  locationSensitiveHandler = () => {
    this.setState({ locationSensitive: !this.state.locationSensitive });
  };

  priceRangeHandler = (event) => {
    let jobBudget = event.target.value;
    this.setState({
      jobBudget: jobBudget,
    });
    console.log(jobBudget);
  };

  validateForm = () => {
    //let error = 0;
    let requiredCounter = 0;

    const validationItems = [
      "jobTitle",
      "jobDescription",
      //"jobLocation",
      "locationSensitive",
      "jobSpecification",
      "jobBudget",
    ];

    validationItems.forEach((item) => {
      if (this.state[item].length >= 1) {
        // error++;
        requiredCounter++;
        console.log(requiredCounter);

        // this.state[`${item}Required`] = true;
      }
    });
    if (requiredCounter >= 1) {
      this.setState({ showBtn: true });
    }
  };

  createJob = async () => {
    if (this.state.showBtn !== true) return;

    this.setState({ loading: true, response: {} });
    // uncomment block after testing validation
    const response = await apollo.createJob(
      this.state.userId,
      this.state.jobTitle,
      this.state.jobDescription,
      this.state.jobLocation,
      this.state.jobSpecification,
      this.state.locationSensitive,
      this.state.jobBudget
    );

    console.log(response);
    this.setState({
      loading: false,
      response: response.data.createJob.Job,
    });
  };

  render() {
    return (
      <div
        className="full-width"
        style={{
          position: "relativ",
        }}
      >
        {" "}
        {/* <div className="image-background"></div> */}
        <div
          className="form-width pt-4"
          style={{
            zIndex: "0",
          }}
        >
          <div className="">
            <div
              className="post-title"
              style={{
                fontSize: "40px",
              }}
            >
              Tell us what you need done{" "}
            </div>{" "}
            <div className="subtitle1 post-subtitle">
              Contact skilled hussler within minutes.View profiles and ratings
              and chat with them.Pay the freelancer only when you are 100 %
              satisfied with their work{" "}
            </div>{" "}
          </div>
          <div className="my-4">
            <div className="mcard p-4">
              {" "}
              {/*  */}{" "}
              <div className="job-form">
                <div>
                  {" "}
                  <i className="fa fa-edit"> </i> Choose a project title{" "}
                </div>{" "}
                <input
                  type="text"
                  //show-validation-error={`${this.state.jobTitleRequired}`}
                  // className="inputElement"
                  name="jobTitle"
                  value={this.state.jobTitle}
                  placeholder="Job Title"
                  onChange={this.inputHandler}
                  //onBlur={this.cancelError}
                />
              </div>{" "}
              {/*  */}{" "}
              <div className="job-form">
                <div>
                  <i className="fa fa-edit"> </i> Kindly give a description of
                  the job{" "}
                </div>{" "}
                <textarea
                  type="text"
                  // show-validation-error={`${this.state.jobDescriptionRequired}`}
                  //className="inputElement"
                  name="jobDescription"
                  value={this.state.jobDescription}
                  placeholder="Job Description"
                  onChange={this.inputHandler}
                  // onBlur={this.cancelError}
                  rows="7"
                >
                  {" "}
                </textarea>{" "}
              </div>{" "}
              {/*  */}{" "}
              <div className="job-form">
                <div>
                  <i className="fa fa-edit"> </i> What skills are required{" "}
                </div>{" "}
                <div className="hint">
                  Enter skills needed.People with the needed skills will be
                  prioritized{" "}
                </div>{" "}
                <input
                  type="text"
                  // show-validation-error={`${this.state.jobSpecificationRequired}`}
                  //className="inputElement"
                  name="jobSpecification"
                  value={this.state.jobSpecification}
                  placeholder="Job Specification"
                  onChange={this.inputHandler}
                  //onBlur={this.cancelError}
                />
              </div>{" "}
              {/*  */}{" "}
              <div className="job-form">
                <div>
                  <i className="fa fa-address"> </i> Is the job location
                  sensitive ?
                </div>{" "}
                <div className="hint">
                  Do you want only people around you to see the offer ?
                </div>{" "}
                <div
                  className="row ml-0 mt-2 align-items-center"
                  style={{
                    fontSize: "13px",
                  }}
                >
                  location - sensitive ?
                  <input
                    type="checkbox"
                    name="locationSensitive"
                    onChange={this.locationSensitiveHandler}
                    defaultChecked={false}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                      color: "red",
                    }}
                  />{" "}
                </div>{" "}
              </div>{" "}
              {/*  */}{" "}
            </div>{" "}
            <div className="px-4 py-2 my-4 mcard ">
              {" "}
              {/*  */}{" "}
              <div className="job-form">
                <div>
                  <i className="fa fa-money"> </i> What is your budget{" "}
                </div>{" "}
                <input
                  type="range"
                  //  show-validation-error={`${this.state.jobBudgetRequired}`}
                  //className="inputElement"
                  name="jobBudget"
                  value={this.state.jobBudget}
                  placeholder="Job Budget"
                  onChange={this.priceRangeHandler}
                  // onBlur={this.cancelError}
                />
                <h5>#{this.state.jobBudget}</h5>
              </div>{" "}
              {/*  */}{" "}
              <div className="job-form">
                <div>
                  How long would you like to keep the project before 'Auto
                  Cancel '{" "}
                </div>{" "}
                <input type="number" min="1" />
              </div>{" "}
              {/*  */}{" "}
            </div>{" "}
            {this.state.showBtn && (
              <button
                className="buttonLogin link"
                title="Post Job"
                onClick={this.postJob}
              >
                Post Job{" "}
              </button>
            )}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
