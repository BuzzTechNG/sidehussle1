import React from "react";
import "./Modal.scss";
import "./Modal.css";
import Apollo from "../../../../apolloHelper";
const apollo = new Apollo();
const state = {
  titles: [
    { id: 1, title: "Edit Your Title", modalType: "title" },
    { id: 2, title: "Charge Rate", modalType: "changeRate" },
    { id: 3, title: "My Skills", modalType: "mySkills" },
    { id: 4, title: "Add Language", modalType: "editLanguage" },
    { id: 5, title: "Add Education", modalType: "editEducation" },
  ],
  yourRate: 0,
  servicefee: 0,
  userPricePerHour: 0,
  services: [],
  languages: [],
  userTitle: "",
  userInfo: "",
  address: "",
  logAndLat: "",
  videoUrl: "",
  response: {},
};
const inputHandler = (event) => {
  let servicefee = state.yourRate * 0.1;
  let userPricePerHour = state.yourRate - servicefee;
  const { name, value } = event.target;
  this.setState({
    [name]: value,
    servicefee: servicefee,
    userPricePerHour: userPricePerHour,
  });
};

const updateUser = async () => {
  this.setState({
    response: {},
  });
  const response = await apollo.updateUser(
    state.address,
    state.logAndLat,
    state.services,
    state.languages,
    state.videoUrl,
    state.userTitle,
    state.userPricePerHour,
    state.userInfo
  );
  this.setState((prevState) => {
    prevState.response = response.data.updateUser.userDetail;
  });
};

const ModalView = ({ body, title, modalType }) => {
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
              onClick={updateUser}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TitleModal = (
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
          onChange={inputHandler}
          value={state.services}
        />
      </div>
    </form>
  </div>
);
const ChangeRateModal = (
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
          value={state.yourRate}
          onChange={inputHandler}
        />
      </span>
      /hr
    </p>
    <hr />
    <p>
      10% SideHussle Service fee{" "}
      <span>
        <strong>-{state.servicefee}</strong>
      </span>
      /hr
    </p>
    <hr />
    <p>
      You'll Receive{" "}
      <span>
        <strong>{state.userPricePerHour}</strong>
      </span>
      /hr
    </p>
  </div>
);
const SkillsModal = (
  <div>
    <h5>Enter skills:</h5>
    <form>
      <div class="form-group">
        <textarea class="form-control" id="skills"></textarea>
      </div>
    </form>
  </div>
);
const LanguageModal = (
  <div>
    <div class="form-group">
      <label for="editLanguage">Select your preferred Language</label>
      <select
        id="editLanguage"
        class="form-control"
        data-role="select-dropdown"
        data-profile="minimal"
      >
        <option selected>Search for Language</option>
        <option value="1">English</option>
        <option value="2">Yoruba</option>
        <option value="3">French</option>
        <option value="4">Chinese</option>
        <option value="5">Spanish</option>
      </select>
    </div>

    <div class="form-group">
      <label for="proficiency">Proficiency</label>
      <select
        id="proficiency"
        class="form-control"
        data-role="select-dropdown"
        data-profile="minimal"
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
const EducationModal = (
  <div>
    <div>
      <h5>School</h5>
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="School"
            placeholder="Ex. Bowen University"
          />
        </div>
      </form>
    </div>{" "}
    <hr />
    <div>
      <h5>Dates Attended (optional)</h5>
      <br />

      <div className="row">
        <div className="col-sm-5">
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="dateFrom"
                placeholder="From (Year)"
              />
            </div>
          </form>
        </div>
        <div className="col-sm-6">
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="dateTo"
                placeholder="To (or graduation year)"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <hr />
    <div class="form-group">
      <label for="degree">
        <h5>Degree(optional)</h5>{" "}
      </label>
      <select
        id="degree"
        class="form-control"
        data-role="select-dropdown"
        data-profile="minimal"
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

      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="aos"
            placeholder="Ex Computer Science"
          />
        </div>
      </form>
    </div>
    <hr />
    <div>
      <h5>Description (Optional</h5>
      <form>
        <div class="form-group">
          <textarea rows="4" class="form-control" id="description"></textarea>
        </div>
      </form>
    </div>
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

const TitleViewModal = () => {
  return (
    <ModalView
      title={state?.titles[0]?.title}
      modalType={state.titles[0].modalType}
      body={TitleModal}
    />
  );
};
const ChangeRateViewModal = () => {
  return (
    <ModalView
      title={state.titles[1].title}
      modalType={state.titles[1].modalType}
      body={ChangeRateModal}
    />
  );
};
const SkillsViewModal = () => {
  return (
    <ModalView
      title={state.titles[2].title}
      modalType={state.titles[2].modalType}
      body={SkillsModal}
    />
  );
};
const LanguageViewModal = () => {
  return (
    <ModalView
      title={state.titles[3].title}
      modalType={state.titles[3].modalType}
      body={LanguageModal}
    />
  );
};
const EducationViewModal = () => {
  return (
    <ModalView
      title={state.titles[4].title}
      modalType={state.titles[4].modalType}
      body={EducationModal}
    />
  );
};
export {
  TitleViewModal,
  EducationViewModal,
  SkillsViewModal,
  LanguageViewModal,
  ChangeRateViewModal,
};
