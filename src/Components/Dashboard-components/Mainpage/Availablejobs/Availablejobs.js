import React, { Component } from "react";

import availableJobs from "../AvailablejobsList";
import Card from "./Card/Card";

class Availablejobs extends Component {
  state = {
    availableJobs: availableJobs,
    isGrid: false,
  };
  render() {
    const aJobs = this.state.availableJobs.map((aJob) => (
      <Card
        isGrid={this.state.isGrid}
        key={aJob.Id}
        topic={aJob.title}
        description={aJob.description}
        price={aJob.price}
      />
    ));
    const setIsGrid = () => {
      this.setState((state) => {
        return {
          isGrid: !state.isGrid,
        };
      });
    };
    return (
      <div className="full-width">
        <div className="container-lg mt-3 py-2 px-4">
          <div className="page-title">Avaliable Jobs</div>
          <div className="row my-4">
            {/* Left container */}

            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <div className="row mb-4 category-card p-lg-3">
                <div className="p-2 ml-md-2 ml-lg-0 mb-lg-4 mb-md-0 subtitle1">
                  Filter settings <i className="fa fa-cog"></i>
                </div>
                {/* Search Location */}
                <div
                  className="p-2 col-sm-12 col-md-4 col-lg-12 ml-md-4 ml-lg-0 mb-lg-4 mb-md-0"
                  style={{ border: "1px solid #aaa" }}
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
                  />
                  <span>
                    {" "}
                    <i className="fa fa-map-marker-alt ml-1"></i>
                  </span>
                </div>
                {/* space */}
                <div
                  className=".d-none .d-sm-block .d-md-none col-none"
                  style={{ height: "12px", width: "5px" }}
                ></div>
                {/* Search Service */}
                <div
                  className=" p-2 mb-sm-3 col-sm-12 col-md-4 col-lg-12 ml-md-4 ml-lg-0 mb-lg-4 mb-md-0"
                  style={{ border: "1px solid #aaa" }}
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
                  />
                  <span>
                    {" "}
                    <i className="fa fa-layer-group ml-1"></i>
                  </span>
                </div>
              </div>
            </div>
            {/* Right Container */}

            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 pl-2">
              <div className="row pt-lg-3 align-items-center justify-content-left">
                <div
                  onClick={() => setIsGrid()}
                  className="square-btn"
                  style={{margin:"0px 30px 0 22px ",padding:"13px 15px"}}
                >
                  <i
                    className={
                      this.state.isGrid ? "fa fa-th-large " : "fa fa-list"
                    }
                  ></i>{" "}
                </div>
                <div className="" style={{width:"60%",minWidth:"250px"}}>
                  <div
                    className="col p-2 row align-items-center"
                    style={{ border: "1px solid #aaa" }}
                  >
                    <span className=" mr-2">
                      <i className="fa fa-search"></i>{" "}
                    </span>{" "}
                    <input
                      className="col"
                      style={{ outline: "none", border: "none" }}
                      type="text"
                      placeholder="Search Job"
                    />
                  </div>
                </div>
                <div className="py-3 ml-2">
                  sort by - <span className="text-primary">latest</span>
                </div>
              </div>
              <div className="row mt-3">{aJobs}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Availablejobs;
