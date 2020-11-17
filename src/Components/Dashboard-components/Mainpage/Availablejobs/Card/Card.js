import React from "react";
import "./Card.css";
import "./CardDark.scss";
import { NavLink } from "react-router-dom";
import { appLogic } from "../../../../..";

const card = (props) => {
  return props.isGrid ? (
    <NavLink
      title="Click to expand job information"
      to={`/jobprofile/${props.id}`}
      class="col-sm-12 col-md-6 col-lg-6  mb-2 px-0 mx-0"
    >
      <div class="xcard custom-shadow card-list" style={{height:"100%"}}>
        <div  className=" py-1 text-left">
          <p className="title3 px-1"> {props.topic} </p>{" "}
        </div>{" "}
        <div className="line" style={{width:"100%"}}></div>
        <div className="px-3 py-2">
          <p className="subtitle2"> {props.description} </p>{" "}
        </div>
        <ul className="list-group p-1">
          <li className="list-group-item d-flex bg-card">
            <i className="far fa-hourglass  pr-2"> </i>
            Open 1 minute ago{" "}
          </li>{" "}
          <li className="list-group-item d-flex bg-card">
            <i className="fa fa-layer-group  pr-2"> </i> {props.specification.map(item=>(<div className="mx-1">
            {item}
            </div>),)}{" "}
          </li>
          <li className="list-group-item d-flex justify-content-between bg-card">
            <span> Price: {appLogic.numberWithCommas(props.price)} </span>{" "}
          </li>{" "}
          <li className="list-group-item d-flex justify-content-between bg-card">
            <span> Posted by: user </span>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </NavLink>
  ) : (
    <NavLink
      title="Click to expand job information"
      to={`/jobprofile/${props.id}`}
      className=" xcard custom-shadow row p-md-4 p-1 py-3 mx-auto "
      style={{
        width: "100%",
      }}
    >
      <div className="col">
        <div className="text-left">
          <div className="title3"> {props.topic} </div>{" "}
        </div>{" "}
        <div className="line mb-3 mt-2" style={{width:"100%"}}></div>
        <div className="">
          <div className="subtitle2" style={{fontWeight:"400"}}> {props.description} </div>{" "}
        </div>{" "}
        <div className="row subtitle3 px-4">
          <li className="row align-items-center p-2 col-md-6 col-sm-12 p-0">
            <span>
              {" "}
              <i className="far fa-hourglass pr-2 "> </i>
              Open 1 minute ago--2 Interested Users{" "}
            </span>{" "}
          </li>{" "}
          <li className="row align-items-center p-2 col-md-6 col-sm-12">
            <span className="d-flex align-items-center list">
              {" "}
              <i className="fa fa-layer-group  pr-2 "> </i> {props.specification.map(item=>(<li className="mx-1">
                {item}
                </li>))}{" "}
            </span>{" "}
          </li>{" "}
        </div>{" "}
        <div className="d-flex">
        
        <div className="subtitle3 mr-3" style={{fontWeight:"bold"}}> <i className={props.paymentVerified ? "fas fa-check-circle text-primary" : "far fa-check-circle"}></i> {`Payment ${props.paymentVerified ? "verified":"unverified"}`}</div>
        <div className="subtitle3" style={{fontWeight:"bold"}}> <i className="fa fa-map-marker"></i> {props.jobLocation}</div>
        
        </div>
      </div>{" "}
      <div className="title3 px-1"> {appLogic.numberWithCommas(props.price)} </div>{" "}
    </NavLink>
  );
};
export default card;
