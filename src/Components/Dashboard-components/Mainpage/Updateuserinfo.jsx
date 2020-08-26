import React from "react";

const updateInfo = (props) => {
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
            <div className="job-form">
              <div>
                {" "}
                <i className="fa fa-edit"></i> Enter your fullname
              </div>
              <input type="text" placeholder="FirstName LastName(Surname)" />
            </div>
            {/*  */}
            <div className="job-form">
              <div>
                <i className="fa fa-edit"></i> Enter Your phone number
              </div>
              <input type="number" placeholder="Phone number" />
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
export default updateInfo;
