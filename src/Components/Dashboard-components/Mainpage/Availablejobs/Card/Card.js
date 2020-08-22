import React from "react";
import "./Card.css";

const card = (props) => {
  return props.isGrid ? (
    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 my-4">
      <div class="xcard card-list">
        <div className="card-header py-1 text-left">
          <p className="title3">{props.topic}</p>
        </div>
        <div className="px-3 py-2">
          <p className="subtitle2">{props.description}</p>
        </div>
        <ul className="list-group">
          <li className="list-group-item d-flex">
            <i className="fa fa-hourglass  pr-2"></i>
            Open 1minute ago
          </li>
          <li className="list-group-item d-flex">
            <i className="fa fa-layer-group  pr-2"></i>
            {props.topic}
          </li>

          <li className="list-group-item d-flex justify-content-between">
            <span>Price:{props.price}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Posted by: user</span>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className="xcard row p-3 pl-4 mx-auto" style={{ width: "98%" }}>
      <div className="pr-3">
        <i className="fa fa-user"></i>
      </div>
      <div className="col">
        <div className="text-left">
          <p className="title1">{props.topic}</p>
        </div>
        <div className="">
          <p className="subtitle2">{props.description}</p>
        </div>
        <div className="row subtitle3 px-4">
          <li className="row align-items-center p-2 col-md-6 col-sm-12 p-0">
            <i className="fa fa-hourglass pr-2 "></i>
            Open 1minute ago -- 2 Interested Users
          </li>
          <li className="row align-items-center p-2 col-md-6 col-sm-12">
            <i className="fa fa-layer-group  pr-2"></i>
            {props.topic}
          </li>
        </div>
      </div>
      <div className="title2 px-1">{props.price}</div>
    </div>
  );
};
export default card;
