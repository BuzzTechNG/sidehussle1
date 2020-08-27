import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Userlogger from "./Container/Userlogger/Userlogger";
import Dashboard from "./Container/Dashboard/Dashboard";
import DarkModeContext from "./DarkModeContext"
import "./css/App.css";
import "./css/styles.scss";

function App() {
  const mode = React.useState("light")
  return (
    <DarkModeContext.Provider value = {mode} >
    <Router >
      <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" exact component={Userlogger} />
        <Route />
      </Switch>
    </Router>
    </DarkModeContext.Provider>
  );
}

export default App;
