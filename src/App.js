import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Userlogger from "./Container/Userlogger/Userlogger";
import Dashboard from "./Container/Dashboard/Dashboard";
import VerifyUser from "./Components/Dashboard-components/Mainpage/Home/VerifyMobileNumber";
import DarkModeContext from "./DarkModeContext"
import "./css/App.css";

import "./css/styles.scss";
import AuthUserContext from "./AuthContext";



function ProtectedRoute(props) {
  const [isSignedIn, setSignedIn] = React.useState(()=>{
    if(localStorage.getItem("token")){
        return true
    }else{
        return false
    }
})
  function authLogic() {
      
    const signIn = () =>{
     setSignedIn(true)   
    }

    const signOut = () =>{
        localStorage.removeItem("token")
        setSignedIn(false)
    }

    return {
        isSignedIn,
        setSignedIn,
        signIn,
        signOut
    }
}
  return (
    <AuthUserContext.Provider value={authLogic()}>
    <AuthSwitch/>
    </AuthUserContext.Provider>
  )
}
function AuthSwitch(){
const context = React.useContext(AuthUserContext)
if(context.isSignedIn){
return (
  <Dashboard/>
)}else{
 return (
    <Userlogger/>
  )
}
}

function App() {
  const mode = React.useState(()=>{
      // document.body.classList.add("background-primary")
      if(localStorage.getItem("modeAndTheme")){
          return JSON.parse(localStorage.getItem("modeAndTheme"))
      }else{
          localStorage.setItem("modeAndTheme",JSON.stringify(["light","default"]))
          return ["light","default"]
      }
  })
  return (
    <DarkModeContext.Provider value = {mode} >
    <div dark={mode[0]} theme={mode[1]} >
    <Router >
      <Switch>
      <Route path="/verifyUser/:id" component={VerifyUser} />
      <Route path="/" component={ProtectedRoute} />
        <Route />
      </Switch>
    </Router>
    </div>
    </DarkModeContext.Provider>
  );
}

export default App;
