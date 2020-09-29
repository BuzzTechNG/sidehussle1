import React from 'react'
import { appLogic } from '../../../../..'
import { NavLink } from 'react-router-dom'

function PreviousJobItem(props){
    return(
      <div>
      <NavLink
        title="Click to expand job information"
        to="/dashboard/jobprofile/56d6dsh"
        className="xcard row p-3 pl-4 mx-auto"
        style={{
          width: "96%",
        }}
      >
        <div className="pr-3">
          <i className="fa fa-user"> </i>{" "}
        </div>{" "}
        <div className="col">
          <div className="text-left">
            <p className="title1"> {props.topic} </p>{" "}
          </div>{" "}
          <div className="">
            <p className="subtitle2"> {props.description} </p>{" "}
          </div>{" "}
          <div className="row subtitle3 px-4">
            <li className="row align-items-center p-2 col-md-6 col-sm-12 p-0">
              <span>
                {" "}
                <i className="fa fa-hourglass pr-2 "> </i>
                Open 1 minute ago--2 Interested Users{" "}
              </span>{" "}
            </li>{" "}
            <li className="row align-items-center p-2 col-md-6 col-sm-12">
              <span>
                {" "}
                <i className="fa fa-layer-group  pr-2"> </i> {props.topic}{" "}
              </span>{" "}
            </li>{" "}
          </div>{" "}
        </div>{" "}
        <div className="title2 px-1"> {appLogic.numberWithCommas("1000")} </div>{" "}
      </NavLink>
      </div>
    )
  }

export default PreviousJobItem
