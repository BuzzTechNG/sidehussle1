import React, { Component } from "react";
import Startjobmodal from "./StartJobModel";
class Startjob extends Component {
  state = {
    titles: [
      { id: 1, title: "Edit Your Title", modalType: "title" },
      { id: 2, title: "Charge Rate", modalType: "changeRate" },
      { id: 3, title: "My Skills", modalType: "mySkills" },
      { id: 4, title: "Add Language", modalType: "editLanguage" },
      { id: 5, title: "Add Education", modalType: "editEducation" },
    ],
    yourRate: 0,
    servicefee: 0,
    yourPay: 0,
  };

  inputHandler = (event) => {
    let servicefee = this.state.yourRate * 0.1;
    let yourPay = this.state.yourRate - servicefee;
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      servicefee: servicefee,
      yourPay: yourPay,
    });
  };

  // percentCalc = () => {
  //   let servicefee = +this.state.servicefee * 0.1;
  //   let yourPay = +this.state.yourRate - servicefee;
  //   this.setState({
  //     servicefee: servicefee,
  //     yourPay: yourPay,
  //   });
  // };

  render() {
    const button = this.state.titles.map((title) => {
      return (
        <div key={title.id}>
          <button
            type="button"
            className="btn btn-primary m-5 p-3"
            data-toggle="modal"
            data-target={`#${title.modalType}`}
            key={title.id}
          >
            {title.title}
          </button>
        </div>
      );
    });
    const startJobModal1 = (
      <div>
        <h5>Your title</h5>
        <p className="my-3">
          Enter a single sentence description of your professional
          skills/experience (e.g Expert Web Designer with Ajax experience)
        </p>
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Title"
            />
          </div>
        </form>
      </div>
    );
    const startJobModal2 = (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quo quos et amet sint illum totam, ad aut corrupti est dolorem
          voluptate harum reprehenderit itaque at! Distinctio architecto quasi
          minima!
        </p>
        <p>
          Your profile rate <strong>${this.state.yourRate}</strong>
        </p>
        <p>
          Total Amount client will see{" "}
          <span>
            <input
              type="number"
              name="yourRate"
              value={this.state.yourRate}
              onChange={this.inputHandler}
            />
          </span>
          /hr
        </p>
        <hr />
        <p>
          10% SideHussle Service fee{" "}
          <span>
            <strong>-{this.state.servicefee}</strong>
          </span>
          /hr
        </p>
        <hr />
        <p>
          You'll Receive{" "}
          <span>
            <strong>{this.state.yourPay}</strong>
          </span>
          /hr
        </p>
      </div>
    );
    const startJobModal3 = (
      <div>
        <h5>Enter skills:</h5>
        <form>
          <div class="form-group">
            <textarea class="form-control" id="skills"></textarea>
          </div>
        </form>
      </div>
    );
    const startJobModal4 = (
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
    const startJobModal5 = (
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
              <textarea
                rows="4"
                class="form-control"
                id="description"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    );
    return (
      <div className=" row py-5">
        <Startjobmodal
          title={this.state.titles[0].title}
          modalType={this.state.titles[0].modalType}
          body={startJobModal1}
        />
        <Startjobmodal
          title={this.state.titles[1].title}
          modalType={this.state.titles[1].modalType}
          body={startJobModal2}
        />
        <Startjobmodal
          title={this.state.titles[2].title}
          modalType={this.state.titles[2].modalType}
          body={startJobModal3}
        />
        <Startjobmodal
          title={this.state.titles[3].title}
          modalType={this.state.titles[3].modalType}
          body={startJobModal4}
        />
        <Startjobmodal
          title={this.state.titles[4].title}
          modalType={this.state.titles[4].modalType}
          body={startJobModal5}
        />
        {button}
        
      </div>
    );
  }
}
export default Startjob;
