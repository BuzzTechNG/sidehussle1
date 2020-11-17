import React from "react";
import "./NavInfo.css";
import "./NavDarkMode.scss";
import { NavLink } from "react-router-dom";
import { DarkModeToggler } from "../../../DarkModeContext";
import { useQuery } from "@apollo/client";
import Apollo from "../../../apolloHelper";
import Lottie from "../../../lottie";
import { appLogic } from "../../..";
import { CustomiseDisplayModal } from "../Mainpage/Modals/Modal";
import AuthUserContext from "../../../AuthContext";
import LogoutModal from "../Mainpage/Modals/LogoutModal";
const apollo = new Apollo()
const NavInfo = () => {
  const { loading, data, err,client } = useQuery(apollo.GET_USER, {
  });
  React.useEffect(()=>{
    if(!loading && data){
      appLogic.userId = data.getUser.id
      appLogic.userImageUrl = data.getUser.pictureUrl
      appLogic.userFullName = `${data.getUser.firstName} ${data.getUser.lastName}`
    }  
  },[loading])
  const context = React.useContext(AuthUserContext)
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
                      to="/avaliablejobs"
                      exact
                      className="nav-link ml-3 custom-nav"
                    >
                     <i className="fa fa-briefcase my-auto mr-2"></i> Available Jobs
                      
                    </NavLink>
                    <div className="nav-link-container">
                      
                      <NavLink to="/myproposals" className="item" >
                      Applications
                      </NavLink>
                      
                      <NavLink to="/myjobs" className="item" >
                       Posted Jobs
                      </NavLink>
                      <NavLink to="/finduser" className="item" >
                      Find User
                      </NavLink>
                 
                      </div>
                  </li>
          

                  
                  <li
                    className="nav-item"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <NavLink
                      to="/wallet"
                      className="nav-link ml-3 custom-nav"
                    >
                     <i className="fa fa-money-bill mr-2"></i> Wallet
                    </NavLink>
                    <div className="nav-link-container">
                      <NavLink to="/deposit" className="item" >
                      Deposit Fund
                      </NavLink>
                      <NavLink to="/withdraw" className="item" >
                      Withdraw Fund
                      </NavLink>
                      <NavLink to="/transactionhistory" className="item" >
                      Transaction History
                      </NavLink>
                      
                      </div>
                  </li>
                  <li
                    className="nav-item"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <NavLink
                      to="/message"
                      className="nav-link ml-3 custom-nav"
                    >
                     <i className="fa fa-comments mr-2"></i> Message
                    </NavLink>
                  </li>
                  <li
                    className="nav-item "
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <NavLink
                      to="/"
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
                      
                      <NavLink to="/store_setup" className="item" >
                      Business/Store setup
                      </NavLink>
                      <NavLink to="/account_setup" className="item" >
                      User Settings
                      </NavLink>
                      <NavLink to="/report" className="item" >
                      Report
                      </NavLink>
                      <div
                      type="button"  
                      data-toggle="modal"
                      data-target="#modal-logout-view"
                      style={{ border: 0, outline: 0, background:"transparent" }}
                      className="item mx-0 px-0" >
                      Logout
                      </div>
                      
                      </div>
                  </li>
                  <li
                    className="mx-3 post-a-job"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <NavLink
                      to="/postjob"
                      exact
                      className="nav-link action-btn my-0 "
                    >
                      Post a Job
                    </NavLink>
                  </li>
                  <li
                    className="my-auto ml-4 my-md-auto my-sm-4"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                  <button
                  type="button"
                  className={`far fa-edit text-primary`}
                  data-toggle="modal"
                  data-target="#modal-custom-view"
                  style={{ border: 0, outline: 0, background:"transparent" }}
                ></button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <CustomiseDisplayModal/>
      <LogoutModal action={()=>{context.signOut();client.clearStore()}}/>
    </div>
  );
};
export default NavInfo;
