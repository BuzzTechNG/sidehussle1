import React from "react";

const Updateinfo = (props) => {
  return (
    <div>
      <div className="pt-5" style={{ zIndex: "0" }}>
        <div className="">
          <div
            className="subtitle1 post-subtitle"
            style={{ backgroundColor: "red" }}
          >
            You need to update other relevant information before you continue...
          </div>
        </div>

        <div className="my-4">
          <div className="mcard p-4">
            {/*  */}
            <div className="job-form row">
              <div>
                {" "}
                <i className="fa fa-edit"></i> Enter your fullname
              </div>
              <div className="col-sm-12 col-md-4 px-2 m-2">
                <input type="text" placeholder="FirstName" />
              </div>
              <div className="col-sm-12 col-md-4 px-2 m-2">
                <input type="text" placeholder=" Middlename" />
              </div>
              <div className="col-sm-12 col-md-4 px-2 m-2">
                <input type="text" placeholder="LastName(Surname)" />
              </div>
            </div>
            {/*  */}
            <div className="job-form row">
              <div className="col-sm-12 col-md-6 px-2 m-2">
                <div>
                  <i className="fa fa-edit"></i> Update your phone number
                </div>

                <input type="number" placeholder="Enter Phone number" />
              </div>
              <div className="col-sm-12 col-md-6 px-2 m-2">
                <div>
                  <i className="fa fa-edit"></i> Update your Email address
                </div>

                <input type="mail" placeholder="Enter E-mail address" />
              </div>
            </div>
            {/*  */}
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
            {/*  */}
            <div className="job-form">
              <div>
                <i className="fa fa-edit"></i> Bio
              </div>
              <input
                type="textarea"
                placeholder="Brief description for your profile"
                row="7"
              />
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Updateinfo;
