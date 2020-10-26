import React from "react";

const thcard = (props) => {
  return (
    
      <tr className="trans-row">
        <th scope="row">{props.id}</th>
        <td>
          <strong>{props.date} </strong>
          <span>
            <strong> {props.time}</strong>
          </span>
        </td>
        <td>{props.price}</td>
        <td>{props.location}</td>
        <td>{props.status}</td>
      </tr>
    
  );
};
export default thcard;
