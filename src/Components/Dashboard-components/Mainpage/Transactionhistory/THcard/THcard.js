import React from "react";

const thcard = (props) => {
  return (
    <tbody className="tbody subtitle2">
      <tr>
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
    </tbody>
  );
};
export default thcard;
