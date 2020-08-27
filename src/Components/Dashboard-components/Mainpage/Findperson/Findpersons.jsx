import React, { Components } from "react";
import Findperson from "./Findperson";

class Findpersons extends Components {
  render() {
    return (
      <div className="container">
        <div className="row">
          {/*sidemenu*/}
          <div className="row col-12 col-md-3">
            <h3 className="pb-4">Filter By</h3>
          </div>

          {/* filtered data */}

          <div className="  col-12 col-md-9">
            <div
              className="col p-2 align-items-center"
              style={{ border: "1px solid #aaa" }}
            >
              <span className=" mr-2">
                <i className="fa fa-search"></i>{" "}
              </span>{" "}
              <input
                className="col filter-input"
                style={{
                  outline: "none",
                  border: "none",
                  backgroundColor: "transparent",
                }}
                type="text"
                placeholder="Search for Person"
              />
            </div>
            <hr className="px-3 my-3" />
            <Findperson />
          </div>
        </div>
      </div>
    );
  }
}
export default Findpersons;
