import React, { Component } from "react";

import availableJobs from "../AvailablejobsList";
import Pagination from "./Pagination";
import Card from "./Card/Card";
import { apolloHelper } from "../../../..";
import { MultiSelect } from "../../../SIdeHussleComponents/customMultiSelect";
import Lottie from "../../../../lottie";
import NoFile from "../../../SIdeHussleComponents/NoFile";

class Availablejobs extends Component {
  constructor(props) {
    super(props);
    this.LeftContainer = this.LeftContainer.bind(this)
    this.LeftModal = this.LeftModal.bind(this)
    this.getAvaliableJobs("7.4444 3.1455");
  }
  state = {
    availableJobs: [],
    isGrid: false,
    currentPage: 1,
    postsPerPage: 5,
    loading: true,
    filterModal: false
  };
  getAvaliableJobs = async () => {
    this.setState({ loading: true });
    const jobs = await apolloHelper.getAvaliableJobs("");
    console.log(jobs);
    this.setState({ availableJobs: jobs.data.getAvaliableJobs });
    this.setState({ loading: false });
  };
  changePPP = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: +value,
    });
  };

  ToggleFilterProp(props) {
    return (
      <div className="d-flex align-items-center">
        <label className="subtitle2">
          <input
            className="mr-2"
            type="checkbox"
            value={props.value}
            onChange={(e) => {
              props.func(e.target.value);
            }}
            name=""
            id=""
          />
          {props.text}
          {/* <div className="subtitle1">{props.text}</div> */}
        </label>
      </div>
    );
  }
  LeftContainer(){
    return ( 
      <div className="row mb-4  p-lg-3">
      <div className="p-2 ml-md-2 ml-lg-0 mb-lg-4 mb-md-0 subtitle1">
        Filter settings <i className="fa fa-cog"> </i>{" "}
      </div>{" "}
      {/* Search Location */}
      <div
        className="p-2 d-flex col-sm-12 mb-2"
        style={{
          border: "1px solid #aaa",
        }}
      >
        <span>
          {" "}
          <i className="fa fa-map-marker-alt mr-1"> </i>{" "}
        </span>{" "}
        <input
          style={{
            outline: "none",
            border: "none",
            // width: "90%",
            backgroundColor: "transparent",
          }}
          type="text"
          placeholder="Search Location"
          className="filter-input"
        />
      </div>{" "}
      {/* space */}{" "}
      <div
        className="d-none d-sm-block d-md-none col-none"
        style={{
          height: "12px",
          width: "5px",
        }}
      ></div>{" "}
      {/* Search Service */}{" "}
      <div
        className="d-flex p-2 mb-sm-3 col-sm-12 mb-2 "
        style={{
          border: "1px solid #aaa",
        }}
      >
        
        <MultiSelect
          onChange={() => {}}
          placeholder="Select Services"
          options={[
            "plumbing",
            "tailoring",
            "hairdressing",
            "cooking",
            "dancing",
            "washing",
          ]}
        />
      </div>{" "}
      {/*Posts Per Page */}
      <div className="subtitle1 mb-1">Verification</div>
      <div className="col-12">
        {this.ToggleFilterProp({
          value: true,
          func: () => {},
          text: "Verfied Users",
        })}
      </div>
      <div className="col-12">
        {this.ToggleFilterProp({
          value: true,
          func: () => {},
          text: "Verfied Payments",
        })}
      </div>
      <div className="subtitle1 my-2">Others</div>
      <div className="col-12">
        {this.ToggleFilterProp({
          value: true,
          func: () => {},
          text: "Show jobs in other locations",
        })}
      </div>
      <div className="col-12">
        {this.ToggleFilterProp({
          value: true,
          func: () => {},
          text: "Verfied Payments",
        })}
      </div>
    </div>
    )
  }
  LeftModal(){
    return( 
      this.state.filterModal && <div className="filter-modal display-show px-4 pt-5 custom-shadow">
        {  this.LeftContainer() }
      </div>
    )
  }
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
        key={aJob.id}
        id={aJob.id}
        topic={aJob.jobTitle}
        description={aJob.jobDescription}
        price={aJob.jobBudget}
        specification={aJob.jobSpecification}
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
      <div className="full-width" style={{position:"relative"}}>
        
        <div className="container-v px-2 px-md-4">
          <div className="page-title"> Avaliable Jobs </div>{" "}
          <div className="row my-2">
            {" "}
            {/* Left container */}
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 pl-md-4 category-card display-none">
             { this.LeftContainer() }
            </div>{" "}
            {/* Right Container */}
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 px-4">
              <div className="px-1 py-1 d-flex align-items-center justify-content-left ">
                
                <div
                  className="col"
                  style={{
                    // width: "60%",
                    // minWidth: "250px",
                  }}
                >
                  <div
                    className="col p-2 px-0 row align-items-center"
                    style={{
                      border: "1px solid #aaa",
                    }}
                  >
                    <span className=" mr-1">
                      <i className="fa fa-search"> </i>{" "}
                    </span>{" "}
                    <input
                      className="col filter-input subtitle1 pr-0"
                      style={{
                        outline: "none",
                        border: "none",
                        backgroundColor: "transparent",
                      }}
                      type="text"
                      placeholder="Search.."
                    />
                  </div>{" "}
                </div>{" "}
                
                <div
                  title="Click to change view to grid or list"
                  onClick={() => setIsGrid()}
                  className="round-btn mx-0 ml-2 ml-1 "
                  style={{
                    
                    padding: "8px",
                  }}
                >
                  <i
                    className={
                      this.state.isGrid ? "fa fa-th-large my-auto " : "fa fa-list my-auto "
                    }
                  ></i>
                   {/* {this.state.isGrid ? "Expanded " : "Compact"} */}
                  
                </div>{" "}
              </div>{" "}
              {this.state.loading && <div className="row mt-3"> <Lottie style={{width:"120px",height:"40px", margin:"auto auto"}} animation="/loading4.json"/> </div>}
              <div className="row mt-3"> {aJobs} </div>{" "}
              <div className="row mt-3"> {aJobs.length < 1 && !this.state.loading &&<NoFile text={"No Job Avaliable"}/>} </div>{" "}
              <div className="d-flex mt-3">
                {/* post per page */}
                {/* <div
                  className="px-3 py-1"
                  style={{
                    border: "1px solid #aaa",
                    height: "100%",
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
                </div>{" "} */}
                {/* <Pagination
                  postsPerPage={this.state.postsPerPage}
                  totalPosts={availableJobs.length}
                  paginate={paginate}
                /> */}
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* filter fab */}
        
                  <div 
                  onClick={ ()=> this.setState(p=>({filterModal:!p.filterModal}))}
                  className="round-btn display-show fa fa-sliders-h" style={{
                    position:"fixed",
                    right: "30px",
                    bottom:"25%",
                    zIndex:"100",
                    padding:"15px"
                  }}>
                    </div>
                    { this.LeftModal() }
      </div>
    );
  }
}
export default Availablejobs;
