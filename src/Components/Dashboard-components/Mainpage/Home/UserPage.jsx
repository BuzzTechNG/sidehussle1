import React, { Component } from "react";

import Apollo from "../../../../apolloHelper";
import lottie from "lottie-web";
import AvaliableBalance from "./AvaliableBalance";
import Updateinfo from "../Updateuserinfo";
import { appLogic } from "../../../..";
import { useParams, NavLink, Link } from "react-router-dom";
import NoData from "../../../SIdeHussleComponents/NoData";
const apollo = new Apollo();


const SectionCard = ({children,data}) => {
  const param = useParams()
  if( param.id  && !data) return (<div></div>)
  return (
   <>{ children }</>
  )
}
class UserPage extends Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.id);
    if(!props.match.params.id ){
      this.getUser();
      this.me = true
    }else{
      this.getUser(props.match.params.id)
      this.me = false
    }
    

    // this.getUserAfterModalSuccess = this.getUserAfterModalSuccess.bind(this)
    this.state = {
      loading: true,
      data: "",
    };
  }
  
  isUserProfile(){
    if(appLogic.userId === this.state.data.id){
      return true
    }else{
      return false
    }
  }
  
  isUserDetailsAvaliable(){
    if(this.state.data.userDetails?.userTitle){
      return true
    }else{
      return false
    }
  }

  componentDidMount() {
    this.animation = lottie.loadAnimation({
      container: this.el,
      // container: '#lottie-view',
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/loading3.json",
    });  
  }
  async getUser(id) {
    const userReponse = await apollo.getUser(id);
   
    this.setState({ data: userReponse.data.getUser, loading:false });
    document.title = userReponse.data.getUser.firstName
    // this.animation.hide()

  
  }
  getUserAfterModalSuccess = async (userReponse) => {
    //  this.state.data = userReponse;
    console.log(userReponse);
    await this.setState({ data: userReponse });
    //  console.log(this)
  };

  render() {
    console.log("object home render")
    return this.state.loading ? (

      <div key="loading-screen" className="full-width" style={{opacity:0.5}}>
        <div className="container-m">
          <div className="mx-auto mt-5" ref={(c) => {
          this.el = c;
        }} style={{width:"150px"}}></div></div></div>) :

       (
      <div key="home-screen" className="full-width column mt-4">
         
        
        <div className="col column container-m px-0 mb-5 mt-2">
          {/* Top container  */}
          <div className="col column custom-shadow2 card-rounded align-items-center mb-3 px-0"  style={{overflow:"hidden"}}>
           <div className="" style={{heig:"150px",width:"100%",position:"relative",overflow:"hidden"}}>
                <img src={require("../../../../assets/bg-cover.jpg")} style={{width:"100%",height:"150px",objectFit:"cover"}} alt=""/>
                <div className="overlay"></div>
           </div>
            
            <div className="col-12 py-4 pt-2 row justify-content-between" style={{index:"100",}}>
            <div className="col-12 col-xs-12 col-md-7 ml-3" style={{}}>
               {this.state.data.pictureUrl ? (
              <div className="avatar" style={{width:"120px",height:"120px",marginTop:"-95px",zIndex:"100"}} title="Your display picture">

                <img style={{borderRadius:"50%",width:"100%"}} src={this.state.data.pictureUrl} alt="profile pic" />
              </div>
            ) : (
              <div className="avatar" title="Your display picture"></div>
            )} 
              <div className="title1 mt-2">{`${this.state.data.firstName} ${this.state.data.lastName}`}.</div>
              <div className="mt-2" style={{fontSize:"9px"}}>User Title</div>
              <div className="title3 mb-1 d-flex align-items-center">
              <div className="subtitle1">{this.state.data?.userDetails?.userTitle}.</div>
              </div>
              {this.state.data?.userDetails?.address && <div className="subtitle2">
                <i className="fa fa-map-marker"></i> {this.state.data.userDetails.address}
              </div>}
            </div>
            {(this.props.match.params.id !== appLogic.userId) && <div className="col-12 col-xs-12 col-md-4 d-flex ">
                <div className="action-btn btn-rounded mr-3" style={{height:"max-content"}}>Message</div>
                <div className="action-btn2 btn-rounded mr-3" style={{height:"max-content"}}>Report</div>
            </div>}
            </div>
            
          </div>
          {/* <div className="custom-shadow2 card-rounded">
              <div className="title3 my-2">Services/Skills</div>
              <div className="line my-1"></div>
              <ul className="subtitle3 list">
                  {this.state.data?.userDetails?.services?.map((services,index) => (

                  <li key={index}> {services} </li>
                  )) }
                  
                </ul>
          </div> */}
          {/* Top End */}
          { !this.isUserDetailsAvaliable() ? 
          <Updateinfo/> :
          (<div className="col row custom-shadow2 card-rounded px-0 mx-0">
            {/* Left Contaienr */}
            <div className=" col-lg-3 col-md-12 col-sm-12 col-xs-12 bdr p-3">
              <p className="subtitle1">
                {" "}
                Video introduction{" "}
                <NoData text="Intro not avaliable"/>
              </p>
              {/* Social links */}
              <div className="mb-3">
                <div className="subtitle1">
                  {" "}
                  Social links 
              
                </div>
                <ul className="list subtitle3">
                {this.state.data?.userDetails?.socialLinks?.map((socialLink,index)=>(
                  <li aria-p href={socialLink} to={socialLink} className="link-address" key={index}>
                    <a  href={"https://"+socialLink} target="_blank" rel="noopener noreferrer"> 
                    {`${socialLink}`}
                    </a> 
                  </li>
                )) }
                </ul>
              </div>
              {/* Language */}
              <div className="mb-3">
                <div className="subtitle1">
                  {" "}
                  Languages 
                  
                </div>
                <ul className="list subtitle3">
                {this.state.data?.userDetails?.languages?.map((language,index)=>(
                  <li key={index}>
                    {`${language?.language}(${language?.proficiency})`}
                  </li>
                )) }
                </ul>
              </div>
              {/* Education */}
              <div className="mb-3">
                <div className="subtitle1">
                  {" "}
                  Education 
                  
                </div>
                <div className=" subtitle3">
                {this.state.data?.userDetails?.education?.map((school,index)=>(
                 <div className="mt-1 mb-3">
                 <div className="subtitle2" key={index}>  {school.school}</div>
                <div className="subtitle3" key={index}>  {school.from}-{school.to}</div>
                 <div className="subtitle2" key={index}>  {school.areaOfstudy}</div>
                 </div>
                ))}
                </div>
              </div>
            </div>
            {/* Right Container */}
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 p-3 bdb ">
              {/* Title and user info */}
              <div className="bdb pb-2">
                <div className="title2">

                  

                </div>
                <p className="title3">
                  About
                  <p className="subtitle2">
                  {this.state.data?.userDetails?.userInfo ? this.state.data?.userDetails?.userInfo : "*****" }
                </p>  
                  NGN {this.state.data?.userDetails?.userPricePerHour
                    ? this.state.data?.userDetails?.userPricePerHour
                    : "*,***"}
                  /hr 
                </p>
                
              </div>
              {/* User Skills */}
              <SectionCard data={this.state.data?.userDetails?.services}>
              <div className="bdb py-3">
                <p className="title3">
                  {" "}
                  Services 
                </p>
                <div className=" ml-3" >
                  {this.state.data?.userDetails?.services?.map((services,index) => (
                      
                  <div className="d-flex justify-content-start align-items-center mb-3" >
                      <div className="action-btn2 mr-2 p-2 my-auto" style={{borderRadius:"50%"}}> <i className="fa fa-plus" style={{fontSize:"9px"}}></i> </div>
                      <div className="subtitle1  my-auto" style={{fontWeight:"300"}} key={index}> {services} </div>
                  
                  </div>
                  
                  )) }
                  
                </div>
              </div>
              </SectionCard>
              {/* Portfolio upload */}
              <SectionCard data={this.state.data?.userDetails?.hello}>
              <div className="bdb py-3">
                <p className="title3"> Portfolio</p>
                <div className="row align-items-center justify-content-center">
                  <div style={{ width: "40%" }}>
                    <img
                      style={{ width: "100%" }}
                      src={require("../../../../assets/polaroid.svg")}
                      alt="review"
                      title="Work history"
                    />
                  </div>
                </div>
              </div>
              </SectionCard>
              {/* Work history and Reviews */}
              {/* <SectionCard data={this.state.data?.userDetails?.history}> */}
              <div className="bdb py-3">
                <p className="title3"> Work History</p>
                <div className="row align-items-center justify-content-center">
                  <div style={{ width: "40%" }}>
                    <img
                      style={{ width: "100%" }}
                      src={require("../../../../assets/noworkava.svg")}
                      alt="review"
                      title="Work history"
                    />
                    <p className="text-center subtitle2">Work History</p>
                    <div className="square-btn" title="Find Work">
                      {" "}
                      <i className="fa fa-search my-auto mr-2"></i> Find Work{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/* </SectionCard> */}
              {/* Reviews and Rating */}
              <SectionCard data={this.state.data?.userDetails?.review}>

              <div className="bdb py-3">
                <p className="title3">Reviews</p>
                <div className="row align-items-center justify-content-center">
                  <div style={{ width: "40%" }}>
                    <img
                      style={{ width: "100%" }}
                      src={require("../../../../assets/rating.svg")}
                      alt="review"
                      title="Reviews"
                    />
                    <p className="text-center subtitle2">No review avaliable</p>
                  </div>
                </div>
              </div>
              </SectionCard>
            </div>
            
          </div>)}
        </div>
        
      </div>
      
    )
  }
}

export default UserPage;
