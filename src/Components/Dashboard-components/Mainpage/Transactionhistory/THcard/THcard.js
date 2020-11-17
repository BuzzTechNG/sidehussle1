import React from "react";

const thcard = (props) => {
  return (
    
      <div className="trans-row subtitle2 row">
        <div className="col">{props.id}</div>
        <div className="col-11 row">
        <div className=" col-8 col-md-3 col-xs-8 ">
          <div>{props.date} </div>
        </div>
        <div className="col-4 col-md-2 col-xs-4">{props.price}</div>
        <div className="col-6 col-md-3 col-xs-6">{props.location}</div>
        <div className="col-12 col-md-3 col-xs-12">{props.status}</div>
        </div>
      </div>
      // <tr className="trans-row">
      //   <th scope="row">{props.id}</th>
      //   <td>
      //     <strong>{props.date} </strong>
      //     <span>
      //       <strong> {props.time}</strong>
      //     </span>
      //   </td>
      //   <td>{props.price}</td>
      //   <td>{props.location}</td>
      //   <td>{props.status}</td>
      // </tr>
    
  );
};
export default thcard;
