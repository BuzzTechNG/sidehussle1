import React from "react";
import "./Card.css";

const card = (props) => {
  return (
    <div class="col-sm-6 col-md-4 mx-auto my-5">
      <div class="card">
        <div className="card-header text-center text-uppercase bg-primary">
          <h4>Job Type:</h4>
          <p>{props.topic}</p>
        </div>

        <ul className="list-group ">
          <li className="list-group-item d-flex justify-content-between">
            <span>
              <strong>Job Description</strong>
              <p>{props.description}</p>
            </span>
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
