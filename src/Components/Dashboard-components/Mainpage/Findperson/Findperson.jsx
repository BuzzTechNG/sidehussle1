import React from "react";
import { NavLink } from "react-router-dom";

const Findperson = ({ firstName,lastName,pictureUrl,userDetails, id, services}) => {
  return (
    <>
    <div className="p-1 p-md-4 py-1 my-1">
        <div className="row">
          <div className="avatar" style={{overflow:"hidden",width:"40px",height:"40px"}}>
            <img width="100%" src={pictureUrl} alt={firstName}/>
          </div>
          <div className=" col">
                <NavLink to={`user/${id}`} className="subtitle1"> {firstName + ' ' +lastName }</NavLink>
              <div className="subtitle3">{userDetails.userTitle}</div>
              <div className="subtitle3">{userDetails.address}</div>
            <div className="rating-star">
              <i className="fa fa-star" style={{ color: "orange" }}></i>
              <i className="fa fa-star" style={{ color: "orange" }}></i>
              <i className="fa fa-star" style={{ color: "orange" }}></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>(3.0)
            </div>
            <div className="py-1">
        <div className="subtitle3">NGN{userDetails?.userPricePerHour}/hr</div>
        </div>
            <div className="py-1 list">
          {userDetails?.services?.map((item,index)=>(
            <div key={`serv-${index}`} className="subtitle3 mr-1">{item},</div>
          ))}
        </div>
        <div className="subtitle4 " style={{textOverflow:"ellipsis"}}>
         {userDetails.userInfo}
            </div>
          </div>
          <div className="action-btn2">Message</div>
        </div>
        
            <div className="line" style={{width:"100%"}}></div>
      </div>
      </>
  );
};
export default Findperson;
