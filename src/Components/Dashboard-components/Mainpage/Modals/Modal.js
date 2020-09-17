import React, { useState, useEffect, useRef } from "react";
import "./Modal.scss";
import "./Modal.css";
import lottie from "lottie-web";
import Apollo from "../../../../apolloHelper";
const apollo = new Apollo();

//const [response, updateUserResponse] = useState({});
function LottieView(){
  // const lottieRef = useRef(null)
  let el = ""
  useEffect(() => {
    let animation = lottie.loadAnimation({
      container: el,
      // container: '#lottie-view',
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/loading3.json",
    });
    return () => {
      animation.destroy()
       animation = ""
    }
  },[])
  return (<div style={{width:"90px",height:"30px"}} ref={(c) => {
    el = c;
  }} >
    
    </div>)
} 
const state = {
  titles: [
    { id: 1, title: "Edit Your Title", modalType: "editTitle" },
    { id: 2, title: "Charge Rate", modalType: "changeRate" },
    { id: 3, title: "My Skills", modalType: "mySkills" },
    { id: 4, title: "Add Language", modalType: "editLanguage" },
    { id: 5, title: "Add Education", modalType: "editEducation" },
    { id: 6, title: "Description", modalType: "editDescription" },
  ],
  yourRate: 0,
  servicefee: 0,
  /* userPricePerHour: 0,
   services: [],
  languages: [],
  userTitle: "",
  userDesc: "",
  address: "",
  logAndLat: "",
  videoUrl: "", */
  //response: {},
};

const updateUser = async ({
  address,
  logAndLat,
  services,
  languages,
  videoUrl,
  education,
  userTitle,
  userPricePerHour,
  userDesc,
}) => {
  const response = await apollo.updateUser({
    userTitle,
    services,
    languages,
    education,
    videoUrl,
    userPricePerHour,
    userDesc,
  });
  return response;
};

const ModalView = ({ body, title, modalType, action, reload }) => {
  const [modalLoading, setModalLoading] = useState(false)
  const updateModalLogic = async() => {
    setModalLoading(true)
    const result = await action()
    
    reload(result.data.updateUser)
    
    setModalLoading(false)
  }
  return (
    <div
      class="modal fade modalframe"
      backdrop="static"
      id={modalType}
      tabIndex={-1}
      role="dialog"
      aria-labelledby="ModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-lg modal-dialog-centered "
        style={{ border: 0, outline: 0 }}
      >
        <div class="modal-content modalbg" style={{ border: 0, outline: 0 }}>
          <div class="modal-header">
            <h4 class="modal-title" id="ModalLabel">
              {title}
            </h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body job-form  ">{body}</div>
          <div class="modal-footer">
            <button type="button" class="modal-close-btn" data-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              class="modal-save-btn square-btn m-0"
              disabled={modalLoading}
              onClick={() => updateModalLogic()}
            >
            { modalLoading ? <LottieView/> : 'Save changes'}
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

const TitleModal = ({ userTitle, setUserTitle }) => (
  <div>
    <h5>Your title</h5>
    <p className="my-3">
      Enter a single sentence description of your professional skills/experience
      (e.g Expert Web Designer with Ajax experience)
    </p>
    <form>
      <div class="form-group">
        <input
          type="text"
          class="form-control job-form modalshadow"
          id="title"
          placeholder="Title"
          //onChange={(e) => setUserTitle(e.target.value)}
          onChange={(e) => {
            e.persist();
            setUserTitle(e.target.value);
          }}
          value={userTitle}
        />
      </div>
    </form>
  </div>
);
const ChangeRateModal = ({ userPricePerHour, setUserPricePerHour }) => (
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quo
      quos et amet sint illum totam, ad aut corrupti est dolorem voluptate harum
      reprehenderit itaque at! Distinctio architecto quasi minima!
    </p>
    <p>
      Your profile rate <strong>${state.yourRate}</strong>
    </p>
    <p>
      Total Amount client will see{" "}
      <span>
        <input
          type="number"
          name="yourRate"
          // onChange={(e) => setUserPricePerHour(e.target.value)}
          onChange={(e) => {
            e.persist();
            setUserPricePerHour(e.target.value);
          }}
          value={userPricePerHour}
        />
      </span>
      /hr
    </p>
    <hr />
    <p>
      10% SideHussle Service fee{" "}
      <span>
        <strong>- {state.servicefee}</strong>
      </span>
      /hr
    </p>
    <hr />
    <p>
      You'll Receive{" "}
      <span>
        <strong>{/*The amount the person will recieve*/}</strong>
      </span>
      /hr
    </p>
  </div>
);
const SkillsModal = ({ services, setServices }) => (
  <div>
    <h5>Enter skills:</h5>
    <form>
      <div class="form-group">
        <select
          multi
          type="text"
          // onChange={(e) => setServices.concat(e.target.value)}
          value={services}
          class="form-control"
          id="skills"
          onChange={(e) => {
            e.persist();
            setServices((services) => ([
              ...services,
              e.target.value,
            ]));
          }}
        >
          <option>Select Services</option>
          <option value="lorem">lorem</option>
          <option value="lorem">lorem</option>
          <option value="lorem">lorem</option>
          <option value="lorem">lorem</option>
          <option value="lorem">lorem</option>
          <option value="lorem">lorem</option>
        </select>
      </div>
    </form>
  </div>
);
const LanguageModal = ({ languages, setLanguages }) => (
  <div>
    <div class="form-group">
      <label for="editLanguage">Select your preferred Language</label>
      <select
        id="editLanguage"
        class="form-control"
        data-role="select-dropdown"
        data-profile="minimal"
        //onChange={(e) => languages.concat(setLanguages)}
        onChange={(e) => {
          e.persist();
          setLanguages((languages) => ({
            ...languages,
            //language: languages.concat(e.target.value),
            language: e.target.value,
          }));
        }}
        value={languages.language}
      >
        <option selected>Search for Language</option>
        <option value="English">English</option>
        <option value="Yoruba">Yoruba</option>
        <option value="French">French</option>
        <option value="Chinese">Chinese</option>
        <option value="Spanish">Spanish</option>
      </select>
    </div>

    <div class="form-group">
      <label for="proficiency">Proficiency</label>
      <select
        id="proficiency"
        class="form-control"
        data-role="select-dropdown"
        data-profile="minimal"
        value={languages.proficiency}
        onChange={(e) => {
          e.persist();
          setLanguages((languages) => ({
            ...languages,
            // proficiency: languages.concat(e.target.value),
            proficiency: e.target.value,
          }));
        }}
      >
        <option selected>Select Proficiency</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  </div>
);

const EducationModal = ({ educationInfo, setEducationInfo }) => {
  return (
    <div>
      <div>
        <h5>School</h5>
        <div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="School"
              placeholder="Ex. Bowen University"
              value={educationInfo.school}
              onChange={(e) => {
                e.persist();
                setEducationInfo((educationInfo) => ({
                  ...educationInfo,
                  school: e.target.value,
                }));
              }}
            />
          </div>
        </div>
      </div>{" "}
      <hr />
      <div>
        <h5>Dates Attended (optional)</h5>
        <br />

        <div className="row">
          <div className="col-sm-5">
            {/* <form> */}
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="dateFrom"
                placeholder="From (Year)"
                value={educationInfo.from}
                onChange={(e) => {
                  e.persist();
                  setEducationInfo((educationInfo) => ({
                    ...educationInfo,
                    from: e.target.value,
                  }));
                }}
              />
            </div>
            {/* </form> */}
          </div>
          <div className="col-sm-6">
            {/* <form> */}
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="dateTo"
                placeholder="To (or graduation year)"
                value={educationInfo.to}
                onChange={(e) => {
                  e.persist();
                  setEducationInfo((educationInfo) => ({
                    ...educationInfo,
                    to: e.target.value,
                  }));
                }}
              />
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
      <hr />
      <div class="form-group">
        <label for="degree">
          <h5>Degree(optional)</h5>{" "}
        </label>
        <select
          id="desc"
          class="form-control"
          data-role="select-dropdown"
          data-profile="minimal"
          value={educationInfo.desc}
          onChange={(e) => {
            e.persist();
            setEducationInfo((educationInfo) => ({
              ...educationInfo,
              desc: e.target.value,
            }));
          }}
        >
          <option selected>Example Bachelor's</option>
          <option value="1">lorem</option>
          <option value="2">Lorem</option>
          <option value="3">Lorem</option>
          <option value="4">Lorem</option>
          <option value="5">Lorem</option>
        </select>
      </div>
      <hr />
      <div>
        <h5>Area of Study(Optional)</h5>

        <div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="aos"
              placeholder="Ex Computer Science"
              value={educationInfo.areaOfStudy}
              onChange={(e) => (e) => {
                e.persist();
                setEducationInfo((educationInfo) => ({
                  ...educationInfo,
                  areaOfStudy: e.target.value,
                }));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DescriptionModal = ({ description, setDescription }) => (
  <div>
    <h5>Description (Optional)</h5>
    <form>
      <div class="form-group">
        <textarea
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          class="form-control"
          id="description"
        />
      </div>
    </form>
  </div>
);
// percentCalc = () => {
//   let servicefee = +state.servicefee * 0.1;
//   let userPricePerHour = +state.yourRate - servicefee;
//   this.setState({
//     servicefee: servicefee,
//     userPricePerHour: userPricePerHour,
//   });
// };

//   <button
//     type="button"
//     className="btn btn-primary m-5 p-3"
//     data-toggle="modal"
//     // data-target={`#${title.modalType}`}

//   />

const TitleViewModal = ({data, reload}) => {
  const [userTitle, setUserTitle] = useState(data);
  return (
    <ModalView
      title={state?.titles[0].title}
      modalType={state.titles[0].modalType}
      body={TitleModal({ userTitle, setUserTitle })}
      action={() => updateUser({ userTitle })}
      reload={reload}
    />
  );
};

const ChangeRateViewModal = () => {
  const [userPricePerHour, setUserPricePerHour] = useState("");
  return (
    <ModalView
      title={state.titles[1].title}
      modalType={state.titles[1].modalType}
      body={ChangeRateModal({ userPricePerHour, setUserPricePerHour })}
      action={() => updateUser({ userPricePerHour })}
    />
  );
};
const SkillsViewModal = () => {
  const [services, setServices] = useState([]);
  return (
    <ModalView
      title={state.titles[2].title}
      modalType={state.titles[2].modalType}
      body={SkillsModal({ services, setServices })}
      action={() => updateUser({ services })}
    />
  );
};

const LanguageViewModal = () => {
  const [languages, setLanguages] = useState({});
  return (
    <ModalView
      title={state.titles[3].title}
      modalType={state.titles[3].modalType}
      body={LanguageModal({ languages, setLanguages })}
      action={() => updateUser({ languages })}
    />
  );
};

const EducationViewModal = () => {
  const [educationInfo, setEducationInfo] = useState({});
  return (
    <ModalView
      title={state.titles[4].title}
      modalType={state.titles[4].modalType}
      body={EducationModal({ educationInfo, setEducationInfo })}
      action={() => updateUser({ education: educationInfo })}
    />
  );
};

const DescriptionViewModal = () => {
  const [description, setDescription] = useState("");
  return (
    <ModalView
      title={state.titles[5].title}
      modalType={state.titles[5].modalType}
      body={DescriptionModal({ description, setDescription })}
      action={() => updateUser({ description })}
    />
  );
};
export {
  TitleViewModal,
  EducationViewModal,
  SkillsViewModal,
  LanguageViewModal,
  ChangeRateViewModal,
  DescriptionViewModal,
};
