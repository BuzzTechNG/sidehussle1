import React from "react";
import "./NavInfo.css";
import { NavLink } from "react-router-dom";

const NavInfo = () => {
  return (
    <div className="navinfo">
      <div className="col bg-dark">
        <div className="container">
          <nav
            id="navbar"
            className="navbar navbar-dark text-light bg-dark fixed-top  navbar-expand-lg py-2"
          >
            <a href="/" className="navbar-brand">
              <img
                src="sidehusslelogo.jpg"
                width="45"
                height="45"
                alt="sh"
                className="d-inline-block align-middle mr-2"
              />

              <span className="small text-uppercase font-weight-bold">
                Logo of Sidehussle
              </span>
            </a>

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
                <li className="nav-item">
                  <NavLink to="/" exact className="nav-link text-light ml-3">
                    Available Jobs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/startjob" className="nav-link text-light ml-3">
                    Start a job
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/inprogress"
                    className="nav-link text-light ml-3"
                  >
                    Job in progress
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/previousjobs"
                    className="nav-link text-light ml-3"
                  >
                    Previous jobs
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default NavInfo;
