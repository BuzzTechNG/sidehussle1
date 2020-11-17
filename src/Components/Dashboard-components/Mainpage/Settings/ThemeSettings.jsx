import React from "react";
import DarkModeContext, {
  BackgroundToggler,
} from "../../../../DarkModeContext";
function saveToLocalStorage(mode) {
  localStorage.setItem("modeAndTheme", JSON.stringify(mode));
}
function ColorSwitch({ color, icon, switchValue }) {
  const [mode, setMode] = React.useContext(DarkModeContext);
  return (
    <div
      onClick={() => {
        setMode((prev) => [prev[0], (prev[1] = switchValue)]);
        setTimeout(() => {
            saveToLocalStorage(mode);
        }, 2000);
      }}
      className="column mr-3 justify-content-center align-items-center"
    >
      <div
        className="top-circle d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: color,
          width: "35px",
          height: "35px",
          borderRadius: "50%",
        }}
      >
        <i
          style={{
            fontWeight: "800",
            display: mode[1] === switchValue ? "" : "none",
          }}
          className="fa fa-check text-light"
        ></i>
      </div>
      <div className="mx-auto mt-1 row justify-content-center align-items-center">
        <i
          className={`fa fa-${icon} mx-auto`}
          style={{ color, fontWeight: "800" }}
        ></i>
      </div>
    </div>
  );
}
function BackgroundSwitch({ text, color, dark, switchValue }) {
  const [mode, setMode] = React.useContext(DarkModeContext);

  return (
    <div
      onClick={() => {
        setMode((prev) => [(prev[0] = switchValue), prev[1]]);
        setTimeout(() => {
            saveToLocalStorage(mode);
        }, 1200);
      }}
      style={{ backgroundColor: color, borderRadius: "0px" }}
      className={`col-4 col-xs-12 col-md-4 d-flex justify-content-around align-items-center p-3 px-4 ${
        switchValue === mode[0] ? "theme-border" : ""
      }`}
    >
      <input
        checked={mode[0] === switchValue}
        type="radio"
        name=""
        id=""
        className="mx-2"
      />
      <div className={dark ? " text-light" : " text-dark"}>{text}</div>
    </div>
  );
}

function ThemeSettings() {
  return (
    <div>
      <div>
        <div className="title1">Customize your view</div>
        <div className="subtitle2">
          Manage your color and background. These affects all your account on
          this browser
        </div>
        <label className="subtitle3 mt-3">Color</label>
        <div className="d-flex custom-card justify-content-between">
          <ColorSwitch
            color="#c42252"
            icon="pepper-hot"
            switchValue="default"
          />
          <ColorSwitch color="#3CA55C" icon="leaf" switchValue="green" />
          <ColorSwitch color="#B5AC49" icon="lemon" switchValue="lemon" />
          <ColorSwitch color="#009FFF" icon="pepper-hot" switchValue="blue" />
          <ColorSwitch color="#4A00E0" icon="pepper-hot" switchValue="purple" />
        </div>
        <label className="subtitle3 mt-3">Background</label>
        <div className="d-flex custom-card justify-content-between mb-3 ">
          <BackgroundSwitch
            text={"light"}
            color="#fcfcfc"
            switchValue="light"
          />
          <BackgroundSwitch
            dark
            text={"dim"}
            color="#332940"
            switchValue="dark-purple"
          />
          <BackgroundSwitch
            dark
            text={"dark"}
            color="#090909"
            switchValue="dark-black"
          />
        </div>
      </div>
    </div>
  );
}

export default ThemeSettings;
