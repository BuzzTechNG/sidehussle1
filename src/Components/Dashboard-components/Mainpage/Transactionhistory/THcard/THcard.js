import React from "react";

const thcard = (props) => {
  return (
    <tbody>
      <tr>
        <th scope="row">{props.id}</th>
        <td>
          <strong>Date:</strong> {props.date}{" "}
          <span>
            <strong>Time: </strong>
            {props.time}
          </span>
        </td>
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td>{props.location}</td>
        <td>{props.status}</td>
      </tr>
    </tbody>
  );
};
export default thcard;
