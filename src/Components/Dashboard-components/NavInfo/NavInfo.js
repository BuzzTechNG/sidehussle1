import React from "react";
import "./NavInfo.css";
import "./NavDarkMode.scss";
import { NavLink } from "react-router-dom";
import { DarkModeToggler } from "../../../DarkModeContext";
import { useQuery } from "@apollo/client";
import Apollo from "../../../apolloHelper";
const apollo = new Apollo()
const NavInfo = () => {
  const { loading, data, err } = useQuery(apollo.GET_USER, {
  });
  console.log(data)
  return (
    <div className="navinfo">
      <div className="col">
        <div className="">
          <nav
            id="navbar"
            className=" navbar nav-background fixed-top  navbar-expand-lg "
          >
            <div className="container-lg">
              <div exact className="navbar-brand">
                <span className="small text-uppercase font-weight-bold">
                  <img
                    src={require("../../../assets/logo-with-name.png")}
                    alt="SideHussle Logo"
                    title="SideHussle logo"
                    style={{ width: "150px", height: "100%" }}
                  ></img>
                </span>
              </div>

              <button
                className="navbar-toggler toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarLinks"
                title="click to toggle navbar"
              >
                <span className="p-1 fa fa-bars" ></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-end mr-5 custom-nav"
                id="navbarLinks"
              >
                <ul className="navbar-nav ">
                  <li
                    className="nav-item"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <NavLink
                      to="/dashboard/avaliablejobs"
                      exact
                      className="nav-link ml-3 custom-nav"
                    >
                      Available Jobs
                      
                    </NavLink>
                    <div className="nav-link-container">
                      
                      <NavLink to="" className="item" key="1">
                      Current Job
                      </NavLink>
                      <NavLink to="/dashboard/previousjobs" className="item" key="1">
                      Past Work
                      </NavLink>
                      <NavLink to="" className="item" key="1">
                       Posted Jobs
                      </NavLink>
                      <NavLink to="" className="item" key="1">
                      Find Husslers
                      </NavLink>
                      
                      </div>
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
                      Finances
                    </NavLink>
                    <div className="nav-link-container">
                      <NavLink to="/dashboard/deposit" className="item" key="1">
                      Deposit Fund
                      </NavLink>
                      <NavLink to="/dashboard/withdraw" className="item" key="1">
                      Withdraw Fund
                      </NavLink>
                      <NavLink to="/dashboard/transactionhistory" className="item" key="1">
                      Transaction History
                      </NavLink>
                      <NavLink to="" className="item" key="1">
                      Finance Report
                      </NavLink>
                      
                      </div>
                  </li>
                  <li
                    className="nav-item"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <NavLink
                      to="/dashboard/message"
                      className="nav-link ml-3 custom-nav"
                    >
                      Message
                    </NavLink>
                  </li>
                  <li
                    className="nav-item "
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <NavLink
                      to="/dashboard/"
                      exact
                      className="nav-link ml-3 custom-nav d-flex"
                    >
                    { loading ? <div id="nav-lottie"></div>:
                    <>
                    <img className="mr-2" width="20px" height="20px" src={data.getUser.pictureUrl} />
                    {` ${data.getUser.firstName} ${data.getUser.lastName} `}
                    </>}
                    </NavLink>
                    <div className="nav-link-container">
                      <NavLink to="" className="item" key="1">
                      View Profile
                      </NavLink>
                      <NavLink to="/dashboard/account_setup" className="item" key="1">
                      User Settings
                      </NavLink>
                     
                      <NavLink to="" className="item" key="1">
                      Logout
                      </NavLink>
                      
                      </div>
                  </li>
                  <li
                    className="mx-3 post-a-job"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <NavLink
                      to="/dashboard/postjob"
                      exact
                      className="nav-link   text-light"
                    >
                      Post A Job
                    </NavLink>
                  </li>
                  <li
                    className="my-auto ml-4 my-md-auto my-sm-4"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <DarkModeToggler />
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
