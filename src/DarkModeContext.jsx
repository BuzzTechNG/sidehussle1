import React from 'react'
 
const DarkModeContext = React.createContext(["light",() => {}])

const DarkModeToggler = () => {
    const [ mode, setMode ] = React.useContext(DarkModeContext);
    return(
        <div onClick = {() => {setMode(mode === "light" ? "dark": "light")}}>
            <span title = "switch theme">
                {mode === "light" ? "🌙" : "☀️"}
            </span>
        </div>
    )
}

export default DarkModeContext;
export { DarkModeToggler }