import React from "react";
import "./Card.css";

const card = (props) => {
  return (
    <div class="col-md-4 text-center mx-auto my-5">
      <div class="card">
        <div className="card-header text-center text-uppercase bg-primary">
          <h2>{props.topic}</h2>
        </div>

        <ul className="list-group ">
          <li className="list-group-item d-flex justify-content-between">
            <span> {props.description}</span>
          </li>

          <li className="list-group-item d-flex justify-content-between">
            <span>Price:{props.price}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default card;
