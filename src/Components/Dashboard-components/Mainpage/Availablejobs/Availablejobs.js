import React, { Component } from "react";

import availableJobs from "../AvailablejobsList";
import Pagination from "./Pagination";
import Card from "./Card/Card";
import { apolloHelper } from "../../../..";
import  { MultiSelect } from "../../../SIdeHussleComponents/customMultiSelect";
import Lottie from "../../../../lottie";
import NoFile from "../../../SIdeHussleComponents/NoFile";
import CustomSelect from "../../../SIdeHussleComponents/customSelect";

class Availablejobs extends Component {
  constructor(props) {
    super(props);
    this.LeftContainer = this.LeftContainer.bind(this)
    this.LeftModal = this.LeftModal.bind(this)
    this.loadUser()
  }
  async loadUser(){
    this.setState({loading: true})
    const user = await apolloHelper.getUser()
    const value = user?.data?.getUser?.userDetails?.services || []
    const err = user?.error
    console.log(err)
    console.log(value)
    await this.setFilterValue('services',value)
    this.getAvaliableJobs("7.4444 3.1455")
  }
  state = {
    availableJobs: [],
    locationList: [],
    isGrid: false,
    currentPage: 1,
    postsPerPage: 20,
    loading: true,
    filterModal: false,
    filters: {
      verifiedUser: false,
      verifiedPayment: false,
      services:[],
      location: "",
      showJobsInOtherLocations: false,
      showOtherServices: false,
    }
  };
  
  componentDidUpdate(prevProps,prevState){
    if(prevState.filters !== this.state.filters){
      console.log(this.state.filters)
      this.getAvaliableJobs()
    }
  }
  async locationSearch(l){
    if(l.length < 3) return
   let locationList = await apolloHelper.locationAutocomplete(l)
    locationList = JSON.parse(locationList.data.locationAutocomplete)
    this.setState({locationList})
    console.log(locationList)
  }
  setFilterValue(state,value){
    this.setState(prevState =>({
      ...prevState,  filters: {...prevState.filters, [state]: value} 
    }))
    console.log("set service")
  }
  getAvaliableJobs = async () => {
    this.setState({ loading: true });
    try {
      const jobs = await apolloHelper.getAvaliableJobs({
        verifiedUser: this.state.filters.verifiedUser,
        verifiedPayment: this.state.filters.verifiedPayment,
        services: this.state.filters.services,
        location: this.state.filters.location,
        showJobsInOtherLocations: this.state.filters.showJobsInOtherLocations,
        showOtherServices: this.state.filters.showOtherServices
      });  
      this.setState({ availableJobs: jobs.data.getAvaliableJobs });
    } catch (error) {
    console.log(error)  
    }
    
    
    this.setState({ loading: false });
  };
  changePPP = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: +value,
    });
  };

  ToggleFilterProp(props) {
    console.log(props)
    return (
      <div className="d-flex align-items-center">
        <label className="subtitle2">
          <input
            className="mr-2"
            type="checkbox"
            checked={props.value}
            onChange={(e) => {
              // props.func(e.target.value);
              console.log(`${props.value}`.split())  
              this.setState(prevState =>({
                ...prevState,  filters: {...prevState.filters, [props.name]: !prevState.filters[`${props.name}`]} 
              }))
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
      <div className="row mb-4  p-lg-3 custom-shadow2">
      <div className="p-2 ml-md-2 ml-lg-0 mb-lg-4 mb-md-0 subtitle1">
        Filter settings <i className="fa fa-cog"> </i>{" "}
      </div>{" "}
      {/* Search Location */}
      <div
        className="p-2 d-flex col-sm-12 mb-2 bdb bdt bdl bdr"
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
          list="location"
          onChange={e => { this.locationSearch(e.target.value);}}
          placeholder="Search Location"
          className="filter-input"
        />
        <datalist id="location">
          {this.state.locationList.map((item,index)=>(
          <option style={{fontSize:"12px"}} dangerouslySetInnerHTML={{ __html: item.label }} key={`data-location-${index}`}></option>
          ))}
        </datalist>
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
        className="d-flex p-2 mb-sm-3 col-sm-12 mb-2 bdb bdt bdl bdr"
        
      >
        
        <MultiSelect
          onChange={(value) => {
            console.log(value)
            console.log(this.state.filters.services)
           if(JSON.stringify(value) !== JSON.stringify(this.state.filters.services)){
            this.setFilterValue("services",value);console.log("service call call")}}}
          placeholder="Select Services"
          items={this.state.filters.services}
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
          value: this.state.filters.verifiedUser,
          func: () => {},
          name: 'verifiedUser',
          text: "Verfied Users",
        })}
      </div>
      <div className="col-12">
        {this.ToggleFilterProp({
          value: this.state.filters.verifiedPayment,
          name: 'verifiedPayment',
          func: () => {},
          text: "Verfied Payments",
        })}
      </div>
      <div className="subtitle1 my-2">Others</div>
      <div className="col-12">
        {this.ToggleFilterProp({
          value: this.state.filters.showJobsInOtherLocations,
          name: 'showJobsInOtherLocations',
          func: () => {

            this.setState(prevState =>({
              ...prevState,  filters: {...prevState.filters, showJobsInOtherLocations: !prevState.filters.showJobsInOtherLocations} 
            }))
          },
          text: "Other locations",
        })}
      </div>
      <div className="col-12">
        {this.ToggleFilterProp({
          value: this.state.filters.showOtherServices,
          name: 'showOtherServices',
          func: () => {},
          text: "Other services",
        })}
      </div>
    </div>
    )
  }
  LeftModal(){
    return( 
       <div className={`filter-modal display-show px-4 pt-5 custom-shadow ${this.state.filterModal ? 'filter-modal-open': 'filter-modal-close'}`}>
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
        
        <div className="container-v px-2 px-md-4 full-width">
          {/* <div className="page-title"> Avaliable Jobs </div>{" "} */}
          <div className="row my-2">
            {" "}
            {/* Left container */}
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 pl-md-4 display-none">
             { this.LeftContainer() }
            </div>{" "}
            {/* Right Container */}
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 px-md-4">
              <div className="custom-shadow col">
                <div className="px-md-3 pt-4 pb-1 d-flex align-items-center justify-content-left mx-0">
                <div
                  className="col"
                  style={{
                    // width: "60%",
                    // minWidth: "250px",
                  }}
                >
                  <div
                    className="col p-2 px-0 row align-items-center bdr bdb bdl bdt"
                    style={{
                      // border: "1px solid #aaa",
                      borderRadius:"7px"
                    }}
                  >
                    
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
                    <span className=" mr-1 square-btn mx-0">
                      <i className="fa fa-search p-0"> </i>{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                  
                
                </div>
                <div className="px-md-3 pb-2  d-flex justify-content-between">
                      <div className="px-md-3 py-0 d-flex align-items-center d-flex subtitle3">
                        <i className="fa fa-rss mr-2" style={{color:aJobs.length>0?"red":""}}></i>
                        { aJobs.length } jobs found
                      </div>
                      <div className="job-form d-flex">
                        <div className="d-flex align-items-center mr-4">
                          <div className="subtitle3 mr-2">
                          Sort: 
                          </div>
                          <select className="subtitle3" name="" id="">
                            <option value="">Newest</option>
                            <option value="">Oldest</option>
                          </select>
                        </div>
                        
                        <div 
                        title="Click to change view to grid or list"
                        className="d-flex align-items-center subtitle1" style={{fontWeight:"800"}}>
                          <div className="subtitle3 mr-2">
                          View: 
                          </div>
                          <div
                          onClick={() => setIsGrid()}
                          className="mr-3"  > <i style={{fontWeight:"800"}} className={`fa fa-list ${this.state.isGrid ?  "subtitle1": " "}`}></i> </div>
                          
                          <div
                          onClick={() => setIsGrid()}
                          > <i style={{fontWeight:"800"}} className={`far fa-th-large ${!this.state.isGrid ?  "subtitle1": " "}`} ></i> </div>
                          
                        </div>

                      </div>
                </div>
              </div>{" "}
              {this.state.loading && <div className="row mt-3"> <Lottie style={{width:"120px",height:"40px", margin:"auto auto"}} animation="/loading4.json"/> </div>}
              <div className="row mt-0 col px-0 mx-auto"> {aJobs} </div>{" "}
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
                    right: "25px",
                    bottom:"5%",
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
