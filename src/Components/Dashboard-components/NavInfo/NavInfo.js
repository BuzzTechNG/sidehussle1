import React from "react";
import "./NavInfo.css";
import { NavLink } from "react-router-dom";

const NavInfo = () => {
  return (
    <div className="navinfo">
      <div className="col">
        <div className="">
          <nav
            id="navbar"
            className=" navbar navbar-light nav-background fixed-top  navbar-expand-lg "
          >
          <div className="container-lg">
            <div exact className="navbar-brand">

              <span className="small text-uppercase font-weight-bold">
                <img src={require('../../../assets/logo-with-name.png')} alt="SideHussle Logo" style={{width:"150px",height:"100%"}}></img>
              </span>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarLinks"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end mr-5"
              id="navbarLinks"
            >
              <ul className="navbar-nav ">
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <NavLink
                    to="/dashboard/"
                    exact
                    className="nav-link ml-3 custom-nav"
                  >
                    Available Jobs
                  </NavLink>
                </li>
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <NavLink
                    to="/dashboard/startjob"
                    className="nav-link ml-3 custom-nav custom-nav"
                  >
                    Start a job
                  </NavLink>
                </li>
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <NavLink
                    to="/dashboard/inprogress"
                    className="nav-link ml-3 custom-nav"
                  >
                    Job in progress
                  </NavLink>
                </li>

                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <NavLink
                    to="/dashboard/previousjobs"
                    className="nav-link ml-3 custom-nav"
                  >
                    Previous jobs
                  </NavLink>
                </li>
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <NavLink
                    to="/dashboard/transactionhistory"
                    className="nav-link ml-3 custom-nav"
                  >
                    Transaction History
                  </NavLink>
                </li>
              </ul>
            </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default NavInfo;
