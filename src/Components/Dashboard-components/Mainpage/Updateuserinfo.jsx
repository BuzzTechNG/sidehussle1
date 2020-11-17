import React from "react";
import {
  TitleModal,
  SkillsModal,
  DescriptionModal,
  ChangeRateModal,
} from "./Modals/Modal";
import StepperComponent from "../../SIdeHussleComponents/StepperComponent";
import { Route, useLocation, useHistory } from "react-router-dom";
import SetupStore from "./Market/SetupStore";
import StoreSetupView from "./Market/StoreSetupPage";
const bunny = require("../../../assets/bunny.svg");
const START_UP_SVG = require("../../../assets/startup.svg");


const ProfileDetails = (profileState, setProfileState) => {
  // const selectRef = React.useRef()
  function setProfileStateFuction(value,state){
    setProfileState(prev => ({...prev, [state]:value}))
  }
  
  return (
    <div className="py-2">
      <div className="">
        <div className="p-2 p-mb-4 job-form">
          <section className="mb-4">
            <TitleModal setUserTitle={(value) => { setProfileStateFuction(value,"userTitle") }} userTitle={profileState.userTitle} />
          </section>
          <section className="my-3">
            <DescriptionModal setDescription={(value) => { setProfileStateFuction(value,"userDesc") }} userDesc={profileState.userDesc} />
          </section>
          <section className="my-4">
            <h5>Your Charge Rate</h5>
            <div className="hint">
              let us know how much you would like to make per hour
            </div>
            <ChangeRateModal setUserPricePerHour={(value) => { setProfileStateFuction(value,"userPricePerHour");console.log(value) }} userPricePerHour={profileState.userPricePerHour} />
          </section>
          <section className="my-4">
            <SkillsModal setServices={(value) => { setProfileStateFuction(value,"services") }} services={profileState.services} />
          </section>

          <div className="job-form">
            <div className="">
              <i className="fa fa-edit"></i> Gender
            </div>

            <select onChange={(e)=>{ e.persist(); setProfileState(p=>({...p,gender:e.target.value})) }}>
              <option>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

const BusinessSwitchView =(isBusinessView,setBusinessStateView) => {
  return (
    !isBusinessView ? 
    <div className="full-card" style={{display:"grid",placeContent:"center"}}>
      <div className="row">
        <div className="col-6 col-md-6 display-none">
          <img src={START_UP_SVG} style={{width:"100%",height:"100%"}} alt=""/>
        </div>
        
        <div className="col">
        <p className="title2 text-center">Would you like to setup a business page?</p>
        <p className="subtitle2 text-center">You can still setup the business after this profile update.</p>
        <div className="action-btn mx-auto" onClick={()=>setBusinessStateView(true)}>Setup Business page</div>
        </div>
      </div>
    </div> : 
    <StoreSetupView/>
  )

}

const ProfileDone = (props) => {
  return (
    <div className="full-card">
      <div className="column pt-4">
        <div className="col-6 mx-auto">
          <img src={bunny} style={{width:"100%",height:"100%"}} className="mx-auto" alt=""/>
        </div>
        
        <div className="col mt-2">
        <p className="title2 text-center">Just a step further</p>
        <p className="subtitle2 text-center">About to update your profile.
        All updates can still be modified later.</p>
        <div className="action-btn mx-auto" onClick={()=>{}}>Update and Save</div>
        </div>
      </div>
      {/* <div className="action-btn">Save</div> */}
    </div>
  );
};

const Updateinfo = (props) => {
  const [profileState,setProfileState] = React.useState({})
  const [businessState,setBusinessState] = React.useState({})
  const [regBusinessState,setRegBusinessState] = React.useState(false)
  const urls = ["/", "/profile_store_setup", "/profile_done"];
  const history = useHistory();
  const [currentRef, setCurrentRef] = React.useState(
    urls.indexOf(history.location.pathname)
  );
  let location = useLocation();
  console.log(currentRef);
  React.useEffect(() => {
    // setCurrentRef(currentRef)
    setTimeout(() => {
      setCurrentRef(urls.indexOf(location.pathname));
    }, 1000);
  }, [location]);
  function next(direction) {
    // if(currentRef <= 1) setCurrentRef(currentRef => currentRef + 1);
if(direction === "FORWARD"){
  if(currentRef < 3)
  history.push(urls[currentRef + 1]);
}else{
  if(currentRef > 0)
  history.push(urls[currentRef - 1]);
}
  }

  function nextValidation() {
    if(currentRef === 0){
      if(Object.keys(profileState).length < 5) return false
      return true
    }
    else if(currentRef === 1){
      if(regBusinessState) {
        if (Object.keys(businessState).length < 5) return false 
          return true
        }
      return true
    }else {
      return false
    }
  }

  return (
    <div className="">
      <div className="d-flex px-2 px-md-5">
        <StepperComponent
          currentStep={currentRef + 1}
          step={1}
          text={"Profile "}
        />
        <StepperComponent
          currentStep={currentRef + 1}
          step={2}
          text={"Business"}
        />
        <StepperComponent
          currentStep={currentRef + 1}
          step={3}
          text={"Done"}
          last
        />
      </div>
      <Route exact path="/" render={(props)=>ProfileDetails(profileState,setProfileState)} />
      <Route path="/profile_store_setup" render={()=>BusinessSwitchView(regBusinessState,setRegBusinessState)} />
      <Route path="/profile_done" render={ProfileDone} />
      <div className="line my-2"></div>
      <div className="d-flex justify-content-end ">
        <div
          onClick={() => next("BACKWARD")}
          className="action-btn2  rounded mb-3 mr-3"
          style={{ fontWeight: "700", borderRadius: "20px" }}
        >
          Back
          <i
            style={{ fontWeight: "800" }}
            className=" fa fa-arrow-left ml-2 my-auto"
          ></i>
        </div>
        <div
          disabled-btn={`${!nextValidation()}`}
          onClick={() => next("FORWARD")}
          className="action-btn  rounded mb-3"
          style={{ fontWeight: "700", borderRadius: "20px" }}
        >
          Next
          <i
            style={{ fontWeight: "800" }}
            className=" text-light fa fa-check ml-2 my-auto"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Updateinfo;
