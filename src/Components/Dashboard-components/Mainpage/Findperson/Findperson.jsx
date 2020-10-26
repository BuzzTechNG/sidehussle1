import React from "react";

const Findperson = ({ firstName,lastName,pictureUrl,userDetails}) => {
  return (
    <div className="p-4 py-1 my-1">
        <div className="row">
          <div className="avatar" style={{overflow:"hidden"}}>
            <img width="100%" src={pictureUrl} alt={firstName}/>
          </div>
          <div className="ml-3">
                <div className="subtitle1">{firstName + ' ' +lastName }</div>
              <div className="subtitle3">{userDetails.userTitle}</div>
              <div className="subtitle3">{userDetails.address}</div>
            <div className="rating-star">
              3.0
              <i className="fa fa-star" style={{ color: "orange" }}></i>
              <i className="fa fa-star" style={{ color: "orange" }}></i>
              <i className="fa fa-star" style={{ color: "orange" }}></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="py-1">
          <div>average rate/hr</div>
        </div>
        <div className="subtitle4 " style={{textOverflow:"ellipsis"}}>
         {userDetails.userInfo}
            </div>
          </div>
        </div>
        
            <div className="line" style={{width:"100%"}}></div>
      </div>
  );
};
export default Findperson;
