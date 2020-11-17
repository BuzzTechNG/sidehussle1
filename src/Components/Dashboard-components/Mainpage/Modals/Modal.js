import React, { useState, useEffect, useRef } from "react";
import "./Modal.scss";
import "./Modal.css";
import lottie from "lottie-web";
import Apollo from "../../../../apolloHelper";
import { MultiSelect } from "../../../SIdeHussleComponents/customMultiSelect";
import UploadInfo from "../../../SIdeHussleComponents/UploadInfo";
import SocailLink from "../Market/SocialLink";
import ThemeSettings from "../Settings/ThemeSettings";
const apollo = new Apollo();

//const [response, updateUserResponse] = useState({});
function LottieView() {
  // const lottieRef = useRef(null)
  let el = "";
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
      animation.destroy();
      animation = "";
    };
  }, []);
  return (
    <div
      style={{ width: "90px", height: "30px" }}
      ref={(c) => {
        el = c;
      }}
    ></div>
  );
}
const state = {
  titles: [
    { id: 1, title: "Edit Your Title", modalType: "editTitle" },
    { id: 2, title: "Charge Rate", modalType: "changeRate" },
    { id: 3, title: "My Skills", modalType: "mySkills" },
    { id: 4, title: "Add Language", modalType: "editLanguage" },
    { id: 5, title: "Add Education", modalType: "editEducation" },
    { id: 6, title: "Description", modalType: "editDescription" },
    { id: 7, title: "Introduction Video", modalType: "editShortVid" },
    { id: 7, title: "Social links", modalType: "editSocialLink" },
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
  socialLinks,
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
    socialLinks,
    languages,
    education,
    videoUrl,
    userPricePerHour,
    userDesc,
  });
  return response;
};

const ModalView = ({ body, title, modalType, action, reload }) => {
  const [modalLoading, setModalLoading] = useState(false);
  const updateModalLogic = async () => {
    setModalLoading(true);
    const result = await action();

    reload(result.data.updateUser);

    setModalLoading(false);
  };
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
        <div class="modal-content modalbg" >
          <div class="modal-header" style={{ border: "none", }}>
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
          <div className="line"></div>
          <div class="modal-body job-form  ">{body}</div>
          <div className="line"></div>
          <div class="modal-footer" style={{ border: "none", }}>
            <button type="button" class="modal-close-btn" data-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              class="modal-save-btn square-btn m-0"
              disabled={modalLoading}
              onClick={() => updateModalLogic()}
            >
              {modalLoading ? <LottieView /> : "Save changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomiseDisplayModal = () => {
  return (
    <div
      class="modal fade modalframe"
      backdrop="static"
      id="modal-custom-view"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="ModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-lg modal-dialog-centered "
        style={{ border: 0, outline: 0, maxWidth:"450px" }}
      >
        <div class="modal-content modalbg" >
          <div class="modal-header" style={{ border: "none", }}>
            <h4 class="modal-title" id="ModalLabel">
              Display settings
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
          <div className="line"></div>
          <div class="modal-body " >
            <ThemeSettings/>
            </div>
          
        </div>
      </div>
    </div>
  );
};

const TitleModal = ({ userTitle, setUserTitle }) => (
  <>
    <h5>Your title</h5>
    <p className="my-3 subtitle1">
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
  </>
);
function ChangeRateModal({ userPricePerHour, setUserPricePerHour }){
  return (<>
    <p className="subtitle2" style={{fontWeight:"bolder"}}>
      Please note that your hourly rate will only apply to new contracts. At this time SideHussle is service fee is 0 NGN

      </p>
    <div>
    <p className="subtitle1 my-0">
    Total Amount client will see{" "}
    </p>
      <span>
       <div className="d-flex align-items-center"> 
      <input
          type="number"
          name="yourRate"
          id="rate"
          // onChange={(e) => setUserPricePerHour(e.target.value)}
          onChange={(e) => {
            e.persist();
            setUserPricePerHour(e.target.value);
          }}
          value={userPricePerHour}
        /><div className="ml-2">
        /hr
        </div>
        </div>
      </span>
      
    </div>
    <hr />
    <p className="subtitle1">
      0% SideHussle Service fee{" "}
      <span>
        <strong>- {userPricePerHour}</strong>
      </span>
      /hr
    </p>
    <hr />
    <p>
      You'll Receive {userPricePerHour}
      <span>
        <strong>{/*The amount the person will recieve*/}</strong>
      </span>
      /hr
    </p>
  </>)
};
function SkillsModal({ services, setServices }) {
  const local_services = useRef(services)
  console.log(local_services,"local")
  console.log(local_services.current,"local current")
  return(
  <>
    <div className="title2">Select skills:</div>
    <form>
      <div class="form-group">
        
        {/* <select
        multiple={true}
        required
          type="text"
          value={services}
          class="form-control"
          id="skills"
          onChange={(e) => {
            e.persist();
          console.log(services)
          if(services.includes(e.target.value)){
            console.log(true)
          return setServices(services.filter(name => name !== e.target.value)); 
        }else{
          console.log(false)
          return  setServices([...services, e.target.value])
          }

        }
        }
        >
          <input/>
          <option value="transport">Transport</option>
          <option value="plumbing">plumbing</option>
          <option value="Electical">Electical</option>
          <option value="Engineer">Engineer</option>
          
        </select> */}
        
        <MultiSelect items={local_services.current} onChange={(value)=>setServices(value)} options={['Transport','plumbing','Electical','Engineer','washing','cooking']} />
      </div>
    </form>
  </>
)};
function LanguageModal({ languages, setLanguages }){
  
  
  const [localLanguage, setLocalLanguage] = useState("")
  return (
  <>
    <div class="form-group">
      <label for="editLanguage">Select your preferred Language</label>
      <select
        id="editLanguage"
        class="form-control"
        data-role="select-dropdown"
        data-profile="minimal"
        onChange={(e) => setLocalLanguage(e.target.value)}
        
        value={localLanguage}
      >
        
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
        value={languages?.proficiency}
        onChange={(e) => {
          e.persist();
          const filteredLanguage = languages.map(lang => 
            { const langX = {}; 
            langX["proficiency"] = lang.proficiency; 
            langX["language"] = lang.language; 
            return langX })
          setLanguages((languages) =>[...filteredLanguage,{proficiency: e.target.value,language: localLanguage}]);
          console.log(languages)
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
  </>
)};

function EducationModal ({ localEducation, setLocalEducation }){
  
  const setEducation = (e,target) => {
    
    
    // setEducationInfo((educationInfo) => ([...temp_education,{
      
    //   [target]: e.target.value,
    // }]));
    // console.log(educationInfo)
    
    setLocalEducation(edu => ({...edu,
      [target]:e.target.value
    }))
  }
  return (
    <>
      <div>
        <h5>School</h5>
        <div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="School"
              placeholder="Ex. Bowen University"
              value={localEducation.school}
              onChange={(e) => {
                e.persist();
                setEducation(e,"school")
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
          <div className="col-sm-6">
            {/* <form> */}
            <div class="form-group">
              <label style={{width:"100%"}} className="mr-md-2">
              From
              <input
                type="date"
                class="form-control"
                id="dateFrom"
                placeholder="From (Year)"
                value={localEducation.from}
                onChange={(e) => {
                  e.persist();
                  setEducation(e,"from")
                }}
              /></label>
            </div>
            {/* </form> */}
          </div>
          <div className="col-sm-6">
            {/* <form> */}
            <div class="form-group ml-2">
              <label style={{width:"100%"}}>To <input
                type="date"
                class="form-control"
                id="dateTo"
                placeholder="To (or graduation year)"
                value={localEducation.to}
                onChange={(e) => {
                  e.persist();
                  setEducation(e,"to")
                }}
              /></label>
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
          value={localEducation.desc}
          onChange={(e) => {
            e.persist();
            setEducation(e,"desc")
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
              value={localEducation.areaOfStudy}
              onChange={(e) => (e) => {
                e.persist();
                setEducation(e,"areaOfStudy")
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

function DescriptionModal({ userDesc, setDescription }) {return(
  <>
    <h5>Description</h5>
    <form>
      <div class="form-group mb-0">
        <textarea
          rows="4"
          value={userDesc}
          className="mb-0"
          onChange={(e) => {
            e.persist();
            setDescription(e.target.value);
          }}
          id="userDesc"
        />
        <div className="job-form mt-0">
        <div className="hint mt-0">
        Tell us a little about yourself
        </div>
        </div>
      </div>
    </form>
  </>
)};
function VideoUploadModal({ userVideo, setUserVideo }) {return(
  <>
    <form>
      <div class="form-group mb-0">
        <div className="subtitle1 mx-auto" style={{width:"max-content"}}>Let the people know you better</div>
        <div className="row">
        <div className="mx-auto">

        <UploadInfo size="lg"/>
        </div>
        </div>
        <div className="job-form mt-0">
        <div className="hint mt-0 mx-auto" style={{width:"max-content"}}>
        upload a 30secs video about yourself
        </div>
        </div>
      </div>
    </form>
  </>
)};

function SocialLinkModal({ socialLinks, setSocialLinks }) {
  const local_link = useRef(socialLinks)
  return(
  <>
    <form>
      <div class="form-group mb-0">
        <div className="subtitle1 mx-auto" style={{width:"max-content"}}>Let the people know you better</div>
        <div className="row">
        <div className="mx-auto">

        <SocailLink initValue={local_link.current} onChange={(value)=> setSocialLinks(value) }/>

        </div>
        </div>
        <div className="job-form mt-0">
        <div className="hint mt-0 mx-auto" style={{width:"max-content"}}>
        share your social media pages
        </div>
        </div>
      </div>
    </form>
  </>
)};


const TitleViewModal = ({ data, reload }) => {
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

const ChangeRateViewModal = ({ data, reload }) => {
  const [userPricePerHour, setUserPricePerHour] = useState(data);
  return (
    <ModalView
      title={state?.titles[1].title}
      modalType={state.titles[1].modalType}
      body={ChangeRateModal({ userPricePerHour, setUserPricePerHour })}
      action={() => updateUser({ userPricePerHour })}
      reload={reload}
    />
  );
};
function SkillsViewModal({ data, reload }) {
  const [services, setServices] = useState(data);
  console.log("object skill rerender")
  return (
    <ModalView
      title={state.titles[2].title}
      modalType={state.titles[2].modalType}
      body={SkillsModal({ services, setServices })}
      action={() => updateUser({ services })}
      reload={reload}
    />
  );
};

const LanguageViewModal = ({ data, reload }) => {
  const [languages, setLanguages] = useState(data);
  return (
    <ModalView
      title={state.titles[3].title}
      modalType={state.titles[3].modalType}
      body={LanguageModal({ languages, setLanguages })}
      action={() => updateUser({ languages })}
      reload={reload}
    />
  );
};

const EducationViewModal = ({ data, reload }) => {
  const [educationInfo, setEducationInfo] = useState(data);
  const [localEducation, setLocalEducation] = useState({})

  async function updateEducation(){
    const temp_info = educationInfo.map(info => {
       
      return {school:info.school, to: info.to, from: info.from, areaOfStudy: info.areaOfStudy, desc: info.desc } }
       )
    await setEducationInfo( infox => ([
        ...temp_info,
        localEducation
      ]
    )
    )
    
    console.log([...temp_info,educationInfo])
    return updateUser({ education: [...temp_info, localEducation] })
  }
  return (
    <ModalView
      title={state.titles[4].title}
      modalType={state.titles[4].modalType}
      body={EducationModal({ localEducation, setLocalEducation })}
      action={() => updateEducation()}
      reload={reload}
    />
  );
};

const DescriptionViewModal = ({ data, reload }) => {
  const [userDesc, setDescription] = useState(data);
  return (
    <ModalView
      title={state.titles[5].title}
      modalType={state.titles[5].modalType}
      body={DescriptionModal({ userDesc, setDescription })}
      action={() => updateUser({ userDesc })}
      reload={reload}
    />
  );
};
const VideoUploadViewModal = ({ data, reload }) => {
  const [userVideo, setUserVideo] = useState(data); 

  return (
    <ModalView
      title={state.titles[6].title}
      modalType={state.titles[6].modalType}
      body={VideoUploadModal({ userVideo, setUserVideo })}
      action={() => updateUser({ userVideo })}
      reload={reload}
    />
  );
};
const SocialLinkViewModal = ({ data, reload }) => {
  const [socialLinks, setSocialLinks] = useState(data); 

  return (
    <ModalView
      title={state.titles[7].title}
      modalType={state.titles[7].modalType}
      body={SocialLinkModal({ socialLinks, setSocialLinks })}
      action={() => updateUser({ socialLinks })}
      reload={reload}
    />
  );
};
export {
  TitleModal,
  EducationModal,
  SkillsModal,
  LanguageModal,
  ChangeRateModal,
  DescriptionModal,
  TitleViewModal,
  EducationViewModal,
  SkillsViewModal,
  LanguageViewModal,
  ChangeRateViewModal,
  DescriptionViewModal,
  VideoUploadViewModal,
  SocialLinkViewModal,
  CustomiseDisplayModal
};
