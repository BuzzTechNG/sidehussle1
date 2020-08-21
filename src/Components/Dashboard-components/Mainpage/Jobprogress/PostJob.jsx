import React, { Component } from "react";

export default class PostJob extends Component {
  render() {
    return (
      <div className="full-width" style={{position:"relativ"}}>
      {/* <div className="image-background"></div> */}
        
        
        <div className="form-width p-5" style={{zIndex:"0"}}>
          <div className="">
          <div className="title1" style={{color:"#000",fontSize:"40px"}}>Tell us what you need done</div>
          <div className="subtitle1" style={{color:"#000"}}>
            Contact skilled hussler within minutes. View profiles and ratings
            and chat with them. Pay the freelancer only when you are 100%
            satisfied with their work
          </div>
          </div>
    
          <div className="my-4">
          <div className="mcard p-4" style={{backgroundColor:"#ffffffee"}}>
              {/*  */}
              <div className="job-form">
              <div> <i className="fa fa-edit"></i> Choose a project title</div>
              <input type="text"/>
              </div>
              {/*  */}
              <div className="job-form">
              <div><i className="fa fa-edit"></i> Kindly give a description of the job</div>
              <textarea name="" id="" rows="7"></textarea>
              </div>
              {/*  */}
              <div className="job-form">
              <div><i className="fa fa-edit"></i> What skills are required</div>
              <div className="hint" >Enter skills needed. People with the needed skills will be prioritized</div>
              <input type="text"/>
              </div>
              {/*  */}
              <div className="job-form">
              <div><i className="fa fa-address"></i> Is the job location sensitive?</div>
              <div className="hint" >Do you want only people around you to see the offer?</div>
              <div className="row ml-0 mt-2 align-items-center" style={{fontSize:"13px"}}>
                location-sensitive?
              <input type="checkbox" style={{width:"20px",height:"20px",marginLeft:"10px",color:"red"}}/>
              </div>
              
              </div>
              {/*  */}
          </div>
          <div className="px-4 py-2 my-4 mcard " style={{backgroundColor:"#ffffffee"}}>
              {/*  */}
              <div className="job-form">
              <div><i className="fa fa-money"></i> What is your budget</div>
              <input type="range"/>
              </div>
              {/*  */}
              <div className="job-form">
              <div>How long would you like to keep the project before 'Auto Cancel'</div>
              <input type="number" min="1"/>
              </div>
              {/*  */}
              
          </div>
          </div>
        </div>
      </div>
    );
  }
}
