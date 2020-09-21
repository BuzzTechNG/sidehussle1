import React from "react";
import "./NavInfo.css";
import "./NavDarkMode.scss";
import { NavLink } from "react-router-dom";
import { DarkModeToggler } from "../../../DarkModeContext";
import { useQuery } from "@apollo/client";
import Apollo from "../../../apolloHelper";
import Lottie from "../../../lottie";
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
                      
                      <NavLink to="" className="item" >
                      Current Job
                      </NavLink>
                      <NavLink to="/dashboard/previousjobs" className="item" >
                      Past Work
                      </NavLink>
                      <NavLink to="" className="item" >
                       Posted Jobs
                      </NavLink>
                      <NavLink to="/dashboard/finduser" className="item" >
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
                      <NavLink to="/dashboard/deposit" className="item" >
                      Deposit Fund
                      </NavLink>
                      <NavLink to="/dashboard/withdraw" className="item" >
                      Withdraw Fund
                      </NavLink>
                      <NavLink to="/dashboard/transactionhistory" className="item" >
                      Transaction History
                      </NavLink>
                      <NavLink to="" className="item" >
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
                    { loading ? <Lottie style={{width:"120px",height:"22px",transform:"scale(3)"}} animation="/loading1.json"/>:
                    <>
                    <img className="mr-2" width="20px" height="20px" src={data?.getUser?.pictureUrl} />
                    {` ${data?.getUser?.firstName} ${data?.getUser?.lastName} `}
                    </>}
                    </NavLink>
                    <div className="nav-link-container">
                      <NavLink to="" className="item" >
                      View Profile
                      </NavLink>
                      <NavLink to="/dashboard/account_setup" className="item" >
                      User Settings
                      </NavLink>
                     
                      <NavLink to="" className="item" >
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
