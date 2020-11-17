import React, { Component } from "react";
import Findperson from "./Findperson";
import { useQuery, useLazyQuery } from "@apollo/client";
import { appLogic, apolloHelper } from "../../../..";
import NoFile from "../../../SIdeHussleComponents/NoFile";
import { MultiSelect } from "../../../SIdeHussleComponents/customMultiSelect";
import LottieCircleLoading from "../../../SIdeHussleComponents/LottieCircleLoading";

function ToggleFilterProp(props) {
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
            props.setFilters(prevState =>({
              ...prevState, [props.name]: !prevState[`${props.name}`] 
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
function LeftContainer({filters, setFilters, locationSearch, setFilterValue, locationList}){
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
        onChange={e => { locationSearch(e.target.value);}}
        placeholder="Search Location"
        className="filter-input"
      />
      <datalist id="location">
        {locationList.map((item,index)=>(
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
          console.log(filters.services)
         if(JSON.stringify(value) !== JSON.stringify(filters.services)){
          setFilterValue("services",value);console.log("service call call")}}}
        placeholder="Select Services"
        items={filters.services}
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
      {<ToggleFilterProp
        value= {filters.verifiedUser}
        func= {() => {}}
        setFilter ={ setFilters }
        name= 'verifiedUser'
        text= "Verfied Users"
      />}
    </div>
    <div className="col-12">
      {<ToggleFilterProp
        value= {filters.verifiedPayment}
        name= 'verifiedPayment'
        setFilter ={ setFilters }
        func= {() => {}}
        text= "Verfied Payments"
      />}
    </div>
    <div className="subtitle1 my-2">Others</div>
    <div className="col-12">
      {<ToggleFilterProp
        value= {filters.showJobsInOtherLocations}
         setFilter ={ setFilters }
        name= 'showJobsInOtherLocations'
        func= {() => {

          this.setState(prevState =>({
            ...prevState,  filters: {...prevState.filters, showJobsInOtherLocations: !prevState.filters.showJobsInOtherLocations} 
          }))
        }}
        text= "Other locations"
      />}
    </div>
    
  </div>
  )
}
function Findpersons() {
    const [searchFilter,{data, loading, error}] = useLazyQuery(apolloHelper.SEARCH_USER_WITH_FILTER,{
      variables:{
        services: []
      }
    })
    const [locationList, setLocationList] = React.useState([])
    const [filters, setFilters] = React.useState({
      
        verifiedUser: false,
        services:[],
        location: "",
        search:""
      
    })
    console.log(error)
    React.useEffect(() => {
      searchFilter({variables:{
        services:filters.services,
      }})
      return () => {
        
      }
    }, [filters])
    async function locationSearch(l){
      if(l.length < 3) return
     let locationList = await apolloHelper.locationAutocomplete(l)
      locationList = JSON.parse(locationList.data.locationAutocomplete)
      setLocationList({locationList})
      console.log(locationList)
    }

    function setFilterValue(state,value){
      setFilters(prevState =>({
        ...prevState, [state]: value
      }))
      console.log("set service")
    }

    
    console.log(data)

    

    return (
      <div className="full-width">
        <div className="container-v">
          <div className="page-title">Users</div>
        <div className="row mb-3">
          {/*sidemenu*/}
          <div className="col-md-3 pr-4 display-none ">
          <LeftContainer filters={filters} 
          setFilters={setFilters} 
          locationSearch={locationSearch} 
          setFilterValue={setFilterValue} 
          locationList={locationList}
          />
          </div>

          {/* filtered data */}

          <div className=" col-md-8 pl-3">
          <div className=" custom-shadow p-3">
          <div
                    className="col p-2 px-0 d-flex align-items-center bdr bdb bdl bdt"
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
            <hr className="px-3 my-3" />
            {
              loading && <LottieCircleLoading/>
            }
            {
              error && <div className="subtitle1 text-center my-5">An error occurried <div className="action-btn mx-auto">Retry <i className="fa fa-recycle"></i></div></div>
            }
            {
              data?.searchUserWithFilter?.map((info,index)=>(
                <div key={`search-${index}`}>

                  <Findperson {...info} />
                </div>
              ))
            }
            {
              data?.searchUserWithFilter?.length < 1 && <NoFile text="No user/organisation found matching the given parameters"/>
            }
          </div>
        </div>
        </div>
        </div>
      </div>
    );
  }

export default Findpersons;
