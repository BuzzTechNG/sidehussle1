import React from "react";

const Findperson = (props) => {
  return (
    <div className="p-1">
      <div className="col padding-m py-4 bdb align-items-center">
        <div className="avatar">{props.image}</div>
        <div className="col">
          <div className="title1">{props.fullname}</div>
          <div className="hint">
            <p>
              Price/hr {props.price}{" "}
              <span className="ml-5">Total earnings:{props.earnings}</span>
            </p>
          </div>
          <div className="subtitle">{props.bio}</div>
          <div className="hint">
            <h3>Skills</h3>
            {props.skills}
          </div>
        </div>
      </div>
      <hr className="px-3 my-3" />
    </div>
  );
};
export default Findperson;
