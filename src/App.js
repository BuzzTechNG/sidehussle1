import React from "react";
import { Route, Switch } from "react-router-dom";
import Userlogger from "./Container/Userlogger/Userlogger";
import Dashboard from "./Container/Dashboard/Dashboard";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" exact component={Userlogger} />
        <Route />
      </Switch>
    </div>
  );
}

export default App;
