import React from "react";
import "./Previousjobtable.css";

const previousjobtable = (props) => {
  return (
    <div className="col-12">
      <div className="panel panel-default">
        <div className="panel-heading">
          {props.id}. <strong>Job Title: </strong> {props.topic}
        </div>
        <div className="panel-body">
          <strong>Description: </strong>
          <p>{props.description}</p>
        </div>
        <div className="panel-footer">
          <p>
            <strong>Date: </strong>
            {props.date}
            <strong>Time: </strong>
            {props.time}
          </p>
          <p>
            <strong>Price: </strong>
            {props.price}
          </p>
        </div>
      </div>
    </div>
  );
};
export default previousjobtable;
