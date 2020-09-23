import React, { Component } from "react";
import MultiSelect from "../../../SIdeHussleComponents/customMultiSelect"
import { appLogic }  from "../../../../index"

function LocationComponent() {
  const [loc,setLoc] = React.useState("")
  async function getLogLat(){
    const loglat = await appLogic.getLocation()
   setLoc(loglat)
  }
  React.useEffect(() => {
    getLogLat()
   return () => {
      
    }
  }, [])
  return (<div> 
    {loc && <div className="hint">detected your location as</div>}
    { `${loc}` }
    
  </div>)
}
export default class PostJob extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      locationCheck: false,
      moneyRangeValue: 1000
    }
  }
  
  render() {
    return (
      <div className="full-width" style={{ position: "relativ" }}>
        {/* <div className="image-background"></div> */}

        <div className="form-width pt-4" style={{ zIndex: "0" }}>
          <div className="">
            <div className="post-title">
              Tell us what you need done
            </div>
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
                
                <input type="text" />
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
                <textarea name="" id="" rows="7"></textarea>
              </div>
              {/*  */}
              <div className="job-form">
                <div>
                  <i className="fa fa-edit"></i> What skills are required
                </div>
                <div className="hint">
                  Enter and select skills needed. People with the needed skills will be
                  prioritized
                </div>
                {/* <input type="text" /> */}
                <MultiSelect options={["plumbing","tailoring","hairdressing","cooking","dancing","washing"]}/>
              </div>
              {/*  */}
              <div className="job-form">
                <div>
                  <i className="fa fa-map-marker" style={{fontWeight:"700"}}></i> Is the job location
                  sensitive?
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
                    checked={this.state.locationCheck}
                    onChange={()=> this.setState((state,props)=>({locationCheck: !state.locationCheck }))}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                      color: "red",
                    }}
                  />
                </div>
                <div>
                  { this.state.locationCheck && <LocationComponent/>}

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
                <div className="hint">This shows the amount you are willing to pay the hussler</div>
                <div>
                  N{ appLogic.numberWithCommas(this.state.moneyRangeValue) }
                   </div>
                <div className="rangecontainer" >
                <input type="range" step="500" value={this.state.moneyRangeValue} onChange={(e) => this.setState({moneyRangeValue:e.target.value})} className="range" min="1000" max="200000" />
                </div>
                <div  className="row ml-0 mt-2 align-items-center"
                  style={{ fontSize: "13px" }}>
                  is this price negotiable 
                  <input
                    type="checkbox"
                    
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
                   How long(hours) would you like to keep the project before 'Auto
                  Cancel'
                </div>
                <div className="hint">
                  The project status will be changed from "avaliable" to "cancelled" after the set time. Set 24 for a day  
                </div>
                <input type="number" value={24*14} min="1" />
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
