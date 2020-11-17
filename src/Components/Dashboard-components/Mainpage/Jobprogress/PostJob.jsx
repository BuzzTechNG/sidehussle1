import React, { Component } from "react";
import MultiSelect from "../../../SIdeHussleComponents/customMultiSelect";
import { appLogic } from "../../../../index";
import Apollo, { apolloHelper } from "../../../../apolloHelper";
import Accordion from "../../../SIdeHussleComponents/Accordion";
import { useQuery, useLazyQuery } from "@apollo/client";
import CustomSelect from "../../../SIdeHussleComponents/customSelect";
import PostJobModal from "../Modals/PostJobModal";
import FullPageLoading from "../../../SIdeHussleComponents/FullPageLoading";
import FullPageSucess from "../../../SIdeHussleComponents/FullPageSucess";
import FullPageError from "../../../SIdeHussleComponents/FullPageError";
const apollo = new Apollo();

function LocationComponent({ getEditLocation }) {
  const [loc, setLoc] = React.useState("");

  const [locationSearch, { data, loading }] = useLazyQuery(
    apolloHelper.LOCATION_AUTOCOMPLETE,
    {
      variables: {
        location: "",
      },
    }
  );
  console.log(data);
  async function getLogLat() {
    const loglat = await appLogic.getLocation();
    setLoc(loglat);
  }
  React.useEffect(() => {
    getLogLat();
    return () => {};
  }, []);
  React.useEffect(() => {
    getEditLocation(loc);
    return () => {};
  }, [loc]);
  return (
    <div>
      {loc && <div className="hint">detected your location as</div>}
      {`${loc}`}
      <Accordion
        title={"not correct? change location"}
        titleClass={"subtitle3 link"}
        icon={"fa fa-sync"}
      >
        {/* <input
          list="job-location"
          onChange={(e) => {
            locationSearch({ variables: { location: e.target.value } });
          }}
        ></input>
        <datalist id="job-location">
          {data?.locationAutocomplete &&
            JSON.parse(data?.locationAutocomplete).map((item, index) => (
              <div
                key={`data-location-${index}`}
                onClick={() => {
                  setLoc(`${item.address?.city}, ${item.address?.country}`);
                  console.log("object set loc");
                }}
              >
                <option style={{ fontSize: "12px" }}>
                  <div
                    onClick={() => {
                      setLoc(`${item.address?.city}, ${item.address?.country}`);
                      console.log("object set loc");
                    }}
                    dangerouslySetInnerHTML={{ __html: item.label }}
                  >
                    {" "}
                  </div>{" "}
                </option>
              </div>
            ))}
        </datalist> */}
        <CustomSelect
          selected={loc}
          filterString={(filterdata) =>
            locationSearch({ variables: { location: filterdata } })
          }
          filter
        >
          <div style={{ width: "500px" }}>
            {data?.locationAutocomplete &&
              JSON.parse(data?.locationAutocomplete).map((item, index) => (
                <p
                  className="option"
                  dangerouslySetInnerHTML={{ __html: item.label }}
                  key={`data-location-${index}`}
                  onClick={() => {
                    setLoc(`${item.address?.city}, ${item.address?.country}`);
                    console.log("object set loc");
                  }}
                ></p>
              ))}
          </div>
        </CustomSelect>
      </Accordion>
    </div>
  );
}
export default class PostJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationSensitive: false,
      jobBudget: 1000,
      userId: null,
      jobTitle: "",
      jobDescription: "",
      jobLocation: "",
      jobAddress: "",
      isBudgetNegotiable: true,
      jobSpecification: [],
      //jobBudget: "",
      loading: false,
      success: false,
      response: {},
    };
    this.initJobLocation();
  }

  async initJobLocation() {
    const response = await apolloHelper.getUser();
    const details = response.data.getUser.userDetails;
    this.setState({
      jobLocation: details.logAndlat,
      jobAddress: details.address,
    });
  }
  validateForm = () => {
    if (
      this.state.jobTitle &&
      this.state.jobDescription &&
      // this.state.locationSensitive &&
      (this.state.jobSpecification.length > 0) &&
      this.state.jobBudget
    ) {
      return true;
    } else {
      return false;
    }
  };

  inputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  jobSpecificationChange = (value) => {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.jobSpecification = value;
    console.log(this.state);
  };
  createJob = async () => {
    if (!this.validateForm()) return;

    this.setState({ loading: true, response: {} });
    // uncomment block after testing validation
    const response = await apollo.createJob({
      jobTitle: this.state.jobTitle,
      jobDescription: this.state.jobDescription,
      jobLocation: this.state.jobLocation,
      jobAddress: this.state.jobAddress,
      jobSpecification: this.state.jobSpecification,
      locationSensitive: this.state.locationSensitive,
      isBudgetNegotiable: this.state.isBudgetNegotiable,
      jobBudget: parseInt(this.state.jobBudget),
    });
    if(response.data.createJob){
      this.showResponseStatus("success")  
    }else{
      this.showResponseStatus("error")  
    }
    this.setState({
      loading: false,
    });
    console.log(response);
  };
  showResponseStatus(state){
    this.setState({[state]:true})
    setTimeout(() => {
      this.setState({[state]:false})
    }, 5000);
  }
  render() {
    return (
      <div className="full-width" style={{ position: "relativ" }}>
        {/* <div className="image-background"></div> */}

        <div className="form-width pt-4" style={{ zIndex: "0" }}>
          <div className="">
            <div className="post-title">Tell us what you need done</div>
            <div className="post-subtitle">
              Contact skilled hussler within minutes. View profiles and ratings
              and chat with them. Pay the freelancer only when you are 100%
              satisfied with their work
            </div>
          </div>

          <div className="my-4">
            <div className="mcard p-4">
              {/*  */}
              <div className="job-form">
                <div>
                  {" "}
                  <i className="fa fa-edit"></i> Choose a project title
                </div>

                <input
                  type="text"
                  name="jobTitle"
                  value={this.state.jobTitle}
                  placeholder="Job Title"
                  onChange={this.inputHandler}
                />
              </div>
              {/*  */}
              <div className="job-form">
                <div>
                  <i className="fa fa-edit"></i> Kindly give a description of
                  the job
                </div>
                <div className="hint">
                  Kindly give a detailed description/detail amount the job
                </div>
                <textarea
                  type="text"
                  name="jobDescription"
                  value={this.state.jobDescription}
                  placeholder="Job Description"
                  onChange={this.inputHandler}
                  rows="7"
                ></textarea>
              </div>
              {/*  */}
              <div className="job-form">
                <div>
                  <i className="fa fa-edit"></i> What skills are required
                </div>
                <div className="hint">
                  Enter and select skills needed. People with the needed skills
                  will be prioritized
                </div>
                {/* <input type="text" /> */}
                <MultiSelect
                  onChange={this.jobSpecificationChange}
                  options={[
                    "plumbing",
                    "tailoring",
                    "hairdressing",
                    "cooking",
                    "dancing",
                    "washing",
                  ]}
                />
              </div>
              {/*  */}
              <div className="job-form">
                <div>
                  <i
                    className="fa fa-map-marker"
                    style={{ fontWeight: "700" }}
                  ></i>{" "}
                  Is the job location sensitive?
                </div>
                <div className="hint">
                  Do you want only people around you to see the offer?
                </div>
                <div
                  className="row ml-0 mt-2 align-items-center"
                  style={{ fontSize: "13px" }}
                >
                  location-sensitive?
                  <input
                    type="checkbox"
                    checked={this.state.locationSensitive}
                    onChange={() =>
                      this.setState((state, props) => ({
                        locationSensitive: !state.locationSensitive,
                      }))
                    }
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                      color: "red",
                    }}
                  />
                </div>
                <div>
                  {this.state.locationSensitive && (
                    <LocationComponent
                      getEditLocation={(value) => {
                        this.state.jobAddress = value;
                        this.state.jobLocation = "";
                      }}
                    />
                  )}
                </div>
              </div>
              {/*  */}
            </div>
            <div className="px-4 py-2 my-4 mcard ">
              {/*  */}
              <div className="job-form">
                <div>
                  <i className="fa fa-money"></i> What is your budget
                </div>
                <div className="hint">
                  This shows the amount you are willing to pay the hussler
                </div>
                <div>N{appLogic.numberWithCommas(this.state.jobBudget)}</div>
                <div className="rangecontainer">
                  <input
                    type="range"
                    step="500"
                    value={this.state.jobBudget}
                    onChange={(e) =>
                      this.setState({ jobBudget: e.target.value })
                    }
                    className="range"
                    min="1000"
                    max="200000"
                  />
                </div>
                <div
                  className="row ml-0 mt-2 align-items-center"
                  style={{ fontSize: "13px" }}
                >
                  is this price negotiable
                  <input
                    type="checkbox"
                    selected={this.state.isBudgetNegotiable}
                    value={this.state.isBudgetNegotiable}
                    onChange={(e) =>
                      this.setState({ isBudgetNegotiable: Boolean(e.target.value) })
                    }
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                      color: "red",
                    }}
                  />
                </div>
              </div>
              {/*  */}
              <div className="job-form">
                <div>
                  <i className="fa fa-clock mr-1"></i>
                  How long(hours) would you like to keep the project before
                  'Auto Cancel'
                </div>
                <div className="hint">
                  The project status will be changed from "avaliable" to
                  "cancelled" after the set time. Set 24 for a day
                </div>
                <input type="number" value={24 * 14} min="1" />
              </div>
              {/*  */}
              {this.validateForm() && (
                <div
                type="button"  
                data-toggle="modal"
                data-target="#modal-postjob-view"
                className="action-btn"
                >
                  Post Job{" "}
                </div>
              )}
            </div>
          </div>
        </div>
        <PostJobModal 
        title={this.state.jobTitle}
        desc={this.state.jobDescription}
        budget={this.state.jobBudget}
        action={()=>{this.createJob()}}
        />
        <FullPageLoading
        message="Posting Job"
        loading={this.state.loading}
        />
        <FullPageSucess
        show={this.state.success}
        message={"Job successfully posted."}
        />
        <FullPageError
        show={this.state.error}
        message={"An error occuried while trying to post job."}
        />
      </div>
    );
  }
}
