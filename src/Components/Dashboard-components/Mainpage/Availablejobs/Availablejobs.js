import React, { Component } from "react";

import availableJobs from "../AvailablejobsList";
import Pagination from "./Pagination";
import Card from "./Card/Card";
import { apolloHelper } from "../../../..";


class Availablejobs extends Component {
  constructor(props){
    super(props)
    this.getAvaliableJobs("7.4444 3.1455")
  }
  state = {
    availableJobs: [],
    isGrid: false,
    currentPage: 1,
    postsPerPage: 5,
  };
  getAvaliableJobs = async () =>{
   const jobs = await apolloHelper.getAvaliableJobs("")
    console.log(jobs)
    this.setState({availableJobs:jobs.data.getAvaliableJobs})
  }
  changePPP = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: +value,
    });
  };

  render() {
    const indexLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexFirstPost = indexLastPost - this.state.postsPerPage;
    const currentPosts = this.state.availableJobs.slice(
      indexFirstPost,
      indexLastPost
    );

    const aJobs = currentPosts.map((aJob) => (
      <Card
        isGrid={this.state.isGrid}
        key={aJob.Id}
        topic={aJob.jobTitle}
        description={aJob.jobDescription}
        price={aJob.jobBudget}
      />
    ));
    const setIsGrid = () => {
      this.setState((state) => {
        return {
          isGrid: !state.isGrid,
        };
      });
    };
    const paginate = (paginate) => {
      this.setState({ currentPage: paginate });
    };
    return (
      <div className="full-width">
        <div className="container-lg mt-3 py-2 px-4">
          <div className="page-title"> Avaliable Jobs </div>{" "}
          <div className="row my-2">
            {" "}
            {/* Left container */}
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <div className="row mb-4 category-card p-lg-3">
                <div className="p-2 ml-md-2 ml-lg-0 mb-lg-4 mb-md-0 subtitle1">
                  Filter settings <i className="fa fa-cog"> </i>{" "}
                </div>{" "}
                {/* Search Location */}{" "}
                <div
                  className="p-2 col-sm-12 col-md-4 col-lg-12 ml-md-4 ml-lg-0 mb-lg-4 mb-md-0"
                  style={{
                    border: "1px solid #aaa",
                  }}
                >
                  <input
                    style={{
                      outline: "none",
                      border: "none",
                      width: "90%",
                      backgroundColor: "transparent",
                    }}
                    type="text"
                    placeholder="Search Location"
                    className="filter-input"
                  />
                  <span>
                    {" "}
                    <i className="fa fa-map-marker-alt ml-1"> </i>{" "}
                  </span>{" "}
                </div>{" "}
                {/* space */}{" "}
                <div
                  className=".d-none .d-sm-block .d-md-none col-none"
                  style={{
                    height: "12px",
                    width: "5px",
                  }}
                ></div>{" "}
                {/* Search Service */}{" "}
                <div
                  className=" p-2 mb-sm-3 col-sm-12 col-md-4 col-lg-12 ml-md-4 ml-lg-0 mb-lg-4 mb-md-0 "
                  style={{
                    border: "1px solid #aaa",
                  }}
                >
                  <input
                    style={{
                      outline: "none",
                      border: "none",
                      width: "88%",
                      backgroundColor: "transparent",
                    }}
                    type="text"
                    placeholder="Search Services"
                    className="filter-input"
                  />
                  <span>
                    {" "}
                    <i className="fa fa-layer-group ml-1"> </i>{" "}
                  </span>{" "}
                </div>{" "}
                {/*Posts Per Page */}
                <div
                  className=" p-2 mt-md-3 col-sm-12 col-md-4 col-lg-12 ml-md-4 ml-lg-0 mb-lg-4 mb-md-0 "
                  style={{
                    border: "1px solid #aaa",
                  }}
                >
                  <select
                    style={{
                      outline: "none",
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                    className="postsperpage"
                    name="postsPerPage"
                    value={this.state.postsPerPage}
                    onChange={this.changePPP}
                  >
                    <option value="5">Posts Per Page</option>
                    <option value="5">5 Posts</option>
                    <option value="10">10 Posts</option>
                    <option value="20">20 Posts</option>
                    <option value="30">30 Posts</option>
                    <option value="50">50 Posts</option>
                  </select>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* Right Container */}
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 pl-2">
              <div className="row pt-lg-3 align-items-center justify-content-left">
                <div
                  title="Click to change view to grid or list"
                  onClick={() => setIsGrid()}
                  className="square-btn"
                  style={{
                    margin: "0px 30px 0 22px ",
                    padding: "13px 15px",
                  }}
                >
                  <i
                    className={
                      this.state.isGrid ? "fa fa-th-large " : "fa fa-list"
                    }
                  ></i>{" "}
                </div>{" "}
                <div
                  className=""
                  style={{
                    width: "60%",
                    minWidth: "250px",
                  }}
                >
                  <div
                    className="col p-2 row align-items-center"
                    style={{
                      border: "1px solid #aaa",
                    }}
                  >
                    <span className=" mr-2">
                      <i className="fa fa-search"> </i>{" "}
                    </span>{" "}
                    <input
                      className="col filter-input"
                      style={{
                        outline: "none",
                        border: "none",
                        backgroundColor: "transparent",
                      }}
                      type="text"
                      placeholder="Search Job"
                    />
                  </div>{" "}
                </div>{" "}
                <div className="py-3 ml-2">
                  sort by - <span className="text-primary"> latest </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="row mt-3"> {aJobs} </div>{" "}
              <Pagination
                postsPerPage={this.state.postsPerPage}
                totalPosts={availableJobs.length}
                paginate={paginate}
              />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
export default Availablejobs;
