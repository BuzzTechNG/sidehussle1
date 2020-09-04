import React, { Component } from "react";
import {
  ChangeRateViewModal,
  EducationViewModal,
  LanguageViewModal,
  SkillsViewModal,
  TitleViewModal,
} from "../Modals/Modal";
import Apollo from "../../../../apolloHelper";
import lottie from "lottie-web";
const apollo = new Apollo();
const ModalBtn = ({ title, icon }) => {
  return (
    <button
      type="button"
      title={title}
      className={`round-btn ${icon}`}
      data-toggle="modal"
      data-target={`#${title}`}
      style={{ border: 0, outline: 0, transform: "translateY(-5px)" }}
    ></button>
  );
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.getUser();
  }
  state = {
    loading: true,
    data: "",
  };
  animation = lottie.loadAnimation({
    container: document.getElementById("home-lottie"),
    // container: '#lottie-view',
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/loading3.json",
  });
  componentDidMount() {
    
  }
  async getUser() {
    const userReponse = await apollo.getUser();
    console.log(userReponse);
    this.setState({ data: userReponse.data.getUser, loading:false });
    this.animation.hide()
  }
  render() {
    return this.state.loading ? (
      <div className="full-width" style={{minHeight:"90vh",opacity:0.5}}>
        <div className="container-m">
          <div className="mx-auto mt-5" id="home-lottie" style={{width:"150px"}}></div>
        </div>
      </div>
    ) : (
      <div className="full-width column mt-4">
        <div className="container-v custom-shadow row">
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
        </div>
        <div className="col column container-v custom-shadow mb-5 mt-4">
          {/* Top container  */}
          <div className="col row padding-m py-4 bdb align-items-center">
            {this.state.data.pictureUrl ? (
              <div className="avatar" title="Your display picture">
                <img style={{borderRadius:"50%"}} src={this.state.data.pictureUrl} alt="profile pic" />
              </div>
            ) : (
              <div className="avatar" title="Your display picture"></div>
            )}
            <div className="ml-3 col">
              <div className="title1">{`${this.state.data.firstName} ${this.state.data.lastName}`}</div>
              <div className="subtitle1">
                {" "}
                <i className="fa fa-location"></i> User location
              </div>
            </div>
          </div>
          {/* Top End */}
          <div className="col row">
            {/* Left Contaienr */}
            <div className=" col-lg-3 col-md-12 col-sm-12 col-xs-12 bdr p-3">
              <p className="subtitle1">
                {" "}
                Video introduction{" "}
                <i
                  className="round-btn fa fa-plus"
                  title="Add introduction video"
                ></i>
              </p>
              <p className="subtitle1">
                {" "}
                Availability{" "}
                <i
                  className="round-btn fa fa-pen"
                  title="Edit availability"
                ></i>
              </p>
              <p className="subtitle1"> Avaliable Online</p>
              {/* Language */}
              <div className="mb-3">
                <div className="subtitle1">
                  {" "}
                  Languages <ModalBtn title="Edit Language" icon="fa fa-plus" />
                  <i
                    className="round-btn fa fa-pen"
                    title="Edit proficiency"
                  ></i>
                </div>
                <ul className="list subtitle3">
                  <li>English</li>
                </ul>
              </div>
              {/* Education */}
              <div className="mb-3">
                <div className="subtitle1">
                  {" "}
                  Education{" "}
                  <ModalBtn title="Edit Education" icon="fa fa-plus" />{" "}
                </div>
                <ul className="list subtitle3">
                  <li>English</li>
                </ul>
              </div>
            </div>
            {/* Right Container */}
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 p-3 bdb">
              {/* Title and user info */}
              <div className="bdb pb-2">
                <div className="title2">
                  Web and Mobile Developer{" "}
                  <ModalBtn title="Edit Title" icon="fa fa-pen" />{" "}
                </div>
                <p className="title3">
                  {" "}
                  Costing -- N200/hr{" "}
                  <ModalBtn title="Change rate" icon="fa fa-pen" />
                </p>
                <p className="subtitle2">Info about user</p>
              </div>
              {/* User Skills */}
              <div className="bdb py-3">
                <p className="title3">
                  {" "}
                  Services <ModalBtn title="Edit Skills" icon="fa fa-pen" />
                </p>
                <ul className="subtitle3 list">
                  <li> My Skills and Services </li>
                  <li> My Skills and Services </li>
                  <li> My Skills and Services </li>
                  <li> My Skills and Services </li>
                  <li> My Skills and Services </li>
                </ul>
              </div>
              {/* Work history and Reviews */}
              <div className="bdb py-3">
                <p className="title3"> Work History</p>
                <div className="row align-items-center justify-content-center">
                  <div style={{ width: "40%" }}>
                    <img
                      style={{ width: "100%" }}
                      src={require("../../../../assets/hiring.png")}
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
              {/* Reviews and Rating */}
              <div className="bdb py-3">
                <p className="title3">Reviews</p>
                <div className="row align-items-center justify-content-center">
                  <div style={{ width: "40%" }}>
                    <img
                      style={{ width: "100%" }}
                      src={require("../../../../assets/reviews.png")}
                      alt="review"
                      title="Reviews"
                    />
                    <p className="text-center subtitle2">No review avaliable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChangeRateViewModal />
        <EducationViewModal />
        <LanguageViewModal />
        <SkillsViewModal />
        <TitleViewModal />
      </div>
    );
  }
}
export default Home;
