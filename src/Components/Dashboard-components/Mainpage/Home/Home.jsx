import React, { Component } from "react";
import {
  ChangeRateViewModal,
  EducationViewModal,
  LanguageViewModal,
  SkillsViewModal,
  TitleViewModal,
  DescriptionViewModal,
  VideoUploadViewModal,
  SocialLinkViewModal,
} from "../Modals/Modal";
import Apollo from "../../../../apolloHelper";
import lottie from "lottie-web";
import AvaliableBalance from "./AvaliableBalance";
import Updateinfo from "../Updateuserinfo";
import { appLogic } from "../../../..";
import { useParams, NavLink, Link } from "react-router-dom";
const apollo = new Apollo();
const ModalBtn = ({title, titleX, icon }) => {
  const param = useParams()
  if(param.id) return (<div></div>)
  return (
    <button
      type="button"
      title={title}
      className={`round-btn ${icon}`}
      data-toggle="modal"
      data-target={`#${titleX}`}
      style={{ border: 0, outline: 0, transform: "translateY(-5px)" }}
    ></button>
  );
};

const SectionCard = ({children,data}) => {
  const param = useParams()
  if( param.id  && !data) return (<div></div>)
  return (
   <>{ children }</>
  )
}
class Home extends Component {
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
         { this.me && <div className="container-m custom-shadow row">
          <div className="row bdr justify-content-center align-items-center px-4 ml-0">
            {" "}
            <i className="fa fa-warning text-info"></i>
          </div>

          <div className="col">
            <div
              title="complete profile details"
              className="subtitle1 px-3"
              style={{ textDecoration: "underline" }}
            >
              Kindly complete your registration
            </div>
            <p className="subtitle2 py-2 px-3">
              Unfortunately we were not able to accept the profile you
              submitted. Please check the messages you received from our support
              team for more information. If you would like, you may edit your
              profile and then resubmit it for another review.
            </p>
          </div>
        </div>}
        
        <div className="col column container-m custom-shadow mb-5 mt-4">
          {/* Top container  */}
          <div className="col row padding-m py-4 bdb align-items-center">
            {this.state.data.pictureUrl ? (
              <div className="avatar" title="Your display picture">

                <img style={{borderRadius:"50%",width:"100%"}} src={this.state.data.pictureUrl} alt="profile pic" />
              </div>
            ) : (
              <div className="avatar" title="Your display picture"></div>
            )}
            <div className="ml-3 col">
              <div className="title1">{`${this.state.data.firstName} ${this.state.data.lastName}`}</div>
              <div className="title3 mb-1 d-flex align-items-center">
              <i className="fa fa-money mr-2"></i> <AvaliableBalance/>
              </div>
              {this.state.data?.userDetails?.address && <div className="subtitle1">
                <i className="fa fa-map-marker"></i> {this.state.data.userDetails.address}
              </div>}
            </div>
          </div>
          {/* Top End */}
          { !this.isUserDetailsAvaliable() ? 
          <Updateinfo/> :
          (<div className="col row">
            {/* Left Contaienr */}
            <div className=" col-lg-3 col-md-12 col-sm-12 col-xs-12 bdr p-3">
              <p className="subtitle1">
                {" "}
                Video introduction{" "}
                <ModalBtn titleX="editShortVid" icon="fa fa-plus" />
              </p>
              {/* Social links */}
              <div className="mb-3">
                <div className="subtitle1">
                  {" "}
                  Social links <ModalBtn titleX="editSocialLink" icon="fa fa-plus" />
              
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
                  Languages <ModalBtn titleX="editLanguage" icon="fa fa-plus" />
                  
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
                  Education <ModalBtn
                    titleX="editEducation"
                    icon="fa fa-plus"
                  />{" "}
                </div>
                <ul className="list subtitle3">
                {this.state.data?.userDetails?.education?.map((school,index)=>(
                  <li key={index}>
                    {school.school}
                  </li>
                ))}
                </ul>
              </div>
            </div>
            {/* Right Container */}
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 p-3 bdb">
              {/* Title and user info */}
              <div className="bdb pb-2">
                <div className="title2">

                  {this.state.data?.userDetails?.userTitle}
                  <ModalBtn titleX="editTitle" icon="fa fa-pen" />{" "}

                </div>
                <p className="subtitle1">
                  {" "}
                  {(!this.state.data?.userDetails?.userPricePerHour && this.me) ? "edit your charges" : ""}
                  {this.state.data?.userDetails?.userPricePerHour
                    ? this.state.data?.userDetails?.userPricePerHour
                    : "0"}
                  /hr <ModalBtn titleX="changeRate" icon="fa fa-pen" />
                </p>
                <p className="subtitle2">
                  {this.state.data?.userDetails?.userInfo ? this.state.data?.userDetails?.userInfo : "kindly tell us about you" }
                  <ModalBtn titleX="editDescription" icon="fa fa-pen" />
                </p>
              </div>
              {/* User Skills */}
              <SectionCard data={this.state.data?.userDetails?.services}>
              <div className="bdb py-3">
                <p className="title3">
                  {" "}
                  Services <ModalBtn titleX="mySkills" icon="fa fa-pen" />
                </p>
                <ul className="subtitle3 list">
                  {this.state.data?.userDetails?.services?.map((services,index) => (

                  <li key={index}> {services} </li>
                  )) }
                  
                </ul>
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
                    <p className="text-center subtitle2">Work History</p>
                    <div className="square-btn" title="Find Work">
                      {" "}
                      <i className="fa fa-search my-auto mr-2"></i> Find Work{" "}
                    </div>
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
        <ChangeRateViewModal
          reload={this.getUserAfterModalSuccess}
          data={this.state.data?.userDetails?.userPricePerHour}
        />
        <EducationViewModal
          reload={this.getUserAfterModalSuccess}
          data={this.state.data?.userDetails?.education}
        />
        <LanguageViewModal
          reload={this.getUserAfterModalSuccess}
          data={this.state.data?.userDetails?.languages}
        />
        <SkillsViewModal
          reload={this.getUserAfterModalSuccess}
          data={this.state.data?.userDetails?.services}
        />
        <TitleViewModal
          data={this.state.data?.userDetails?.userTitle}
          reload={this.getUserAfterModalSuccess}
        />
        <DescriptionViewModal
          reload={this.getUserAfterModalSuccess}
          data={this.state.data?.userDetails?.userInfo}
        />
        <VideoUploadViewModal
          reload={this.getUserAfterModalSuccess}
          data={this.state.data?.userDetails?.userInfo}
        />
        <SocialLinkViewModal
          reload={this.getUserAfterModalSuccess}
          data={this.state.data?.userDetails?.socialLinks}
        />
      </div>
      
    )
  }
}

export default Home;
