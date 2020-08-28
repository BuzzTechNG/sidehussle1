import React from "react";

const Findperson = (props) => {
  return (
    <div className="xcard p-4 my-2">
        <div className="row">
          <div className="avatar"></div>
          <div className="ml-3">
            <div>Interested Username</div>
              <div className="subtitle3">title</div>
              <div className="subtitle3">location</div>
            <div className="rating-star">
              3.0
              <i className="fa fa-star" style={{ color: "orange" }}></i>
              <i className="fa fa-star" style={{ color: "orange" }}></i>
              <i className="fa fa-star" style={{ color: "orange" }}></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            
          </div>
        </div>
        <div className="row py-2">
          <div>average rate/hr</div>
        </div>
        <div className="subtitle4 ">
         Hello i'm michael, i can be your driver
            </div>
      </div>
  );
};
export default Findperson;
