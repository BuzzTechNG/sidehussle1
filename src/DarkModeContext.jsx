import React from 'react'
 
function DarkModeInitLogic(){
    if(localStorage.getItem("modeAndTheme")){
        return JSON.parse(localStorage.getItem("modeAndTheme"))
    }else{
        localStorage.setItem("modeAndTheme",JSON.stringify(["light","default"]))
        return ["light","default"]
    }
}

const DarkModeContext = React.createContext([DarkModeInitLogic(),() => {}])

const DarkModeToggler = () => {
    const [ mode, setMode ] = React.useContext(DarkModeContext);
    return(
        // <div onClick = {() => {setMode(mode === "light" ? "dark-black": "light")}}>
        //     <span title = "switch theme">
        //         {mode === "light" ? "🌙" : "☀️"}
        //     </span>
        // </div>
        <div></div>
    )
}


export default DarkModeContext;
export { DarkModeToggler }