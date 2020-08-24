import React, { useState } from "react";

function JobPage() {
  let [isDetail, setIsDetail] = useState(true);

  const RequirementComponent = ({ icon, text }) => {
    return (
      <div className="px-3 py-2">
        <div>
          {" "}
          <span>
            {" "}
            <i className={`fa fa-${icon} pr-2`}></i>
          </span>{" "}
          {text}
        </div>
      </div>
    );
  };
  const JobCategory = ({ category }) => {
    return (
      <div
        style={{ border: "1px #ccc solid", width: "max-content" }}
        className="p-1 subtitle1"
      >
        {category}
      </div>
    );
  };
  const InterestedUserCard = (props) => {
    return (
      <div className="card p-4 my-2">
        <div className="row">
          <div className="avatar-mini"></div>
          <div className="ml-2">
            <div>Interested Username</div>

            <div className="rating-star">
              3.0
              <i className="fa fa-star" style={{ color: "orange" }}></i>
              <i className="fa fa-star" style={{ color: "orange" }}></i>
              <i className="fa fa-star" style={{ color: "orange" }}></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="subtitle1 py-2">
              Hello i'm michael, i can be your driver
            </div>
          </div>
        </div>
      </div>
    );
  };
  const partialButtonState = (detail, state) => {
    if (!isDetail === state) {
      return detail;
    } else {
      return `${detail} active`;
    }
  };
  return (
    <div className="full-width" style={{minHeight:"90vh"}}>
      <div className="container-lg">
        <div className="job-title">
          <div className="job-title--bg"></div>
          <div
            className="job-title--bg"
            style={{ right: "200px", opacity: "0.5" }}
          ></div>
          <div> I need a cab driver to drive around. </div>
        </div>
        <div className="job-tab">
          <div
            onClick={() => setIsDetail((isDetail = true))}
            className={partialButtonState("square-btn", true)}
          >
            Details
          </div>
          <div
            onClick={() => setIsDetail((isDetail = false))}
            className={partialButtonState("square-btn", false)}
          >
            Interested Users
          </div>
        </div>
        {isDetail ? (
          <div className="row mb-4">
            <div className="col">
              {/* Project Detail Card */}
              <div className="card">
                <div
                  className="title3 p-3"
                  style={{ borderBottom: "#ccc solid 1px" }}
                >
                  Job Details
                </div>
                <div className="p-3">
                  <div className="subtitle1 py-3">
                    I need a driver to drive me around the city by 5:00
                  </div>
                  <div className="title3 py-2">Job Requirements</div>
                  <div className="py-2">
                    <JobCategory category="Logistics" />
                  </div>
                  <div className="row">
                    <RequirementComponent
                      icon={"clock"}
                      text={"5 mintes ago"}
                    />
                    <RequirementComponent icon={"money"} text={"Fixed-N5000"} />
                    <RequirementComponent icon={"map"} text={"Ibadan GRA"} />
                  </div>

                  <div className="subtitle3">Project ID: jdjjs454575</div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-12"></div>
          </div>
        ) : (
          <div>
            {[0, 2, 3, 7, 6].map((value) => (
              <InterestedUserCard key={value} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default JobPage;
