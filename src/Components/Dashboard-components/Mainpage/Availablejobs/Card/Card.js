import React from "react";
import "./Card.css";

const card = (props) => {
  return (
    <div class="col-sm-6 col-md-4 mx-auto my-4">
      <div class="xcard card-list">
        <div className="card-header py-1 text-left">
          <p className="title3">{props.topic}</p>
        </div>
          <div className="px-3 py-2">
          <p className="subtitle2">{props.description}</p>  
          </div>
        <ul className="list-group">
          <li className="list-group-item d-flex">
          <i className="fa fa-time"></i>
          Open 1minute ago
          
          </li>
          <li className="list-group-item d-flex">
  
          <i className="fa fa-category"></i>
          { props.topic}
          
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
  );
};
export default card;
