import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Userlogger from "./Container/Userlogger/Userlogger";
import Dashboard from "./Container/Dashboard/Dashboard";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" exact component={Userlogger} />
        <Route />
      </Switch>
    </Router>
  );
}

export default App;
