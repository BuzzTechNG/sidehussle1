import React from "react";
import { TitleModal,SkillsModal,DescriptionModal,ChangeRateModal } from "./Modals/Modal";
const Updateinfo = (props) => {


  return (
    <div className="">
      <div className="py-2">

        <div className="">
          <div className=" p-4 job-form" >
            <section className="mb-4">
            <TitleModal/>
            </section>
            <section className="my-3">
            <DescriptionModal/>
            </section>
            <section className="my-4">
              <h5>Your Charge Rate</h5>
              <div className="hint">let us know how much you would like to make per hour</div>
            <ChangeRateModal/>
            </section>
            <section className="my-4">
            <SkillsModal/>
            </section>
           
            <div className="job-form">



              <div>
                <i className="fa fa-edit"></i> Gender
              </div>

              <select>
                <option>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="d-flex justify-content-end">
              <div className="square-btn subtitle1 mx-0" style={{fontWeight:"700"}}>Update Profile <i style={{fontWeight:"800"}} className="fa fa-check ml-2 my-auto"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updateinfo;

