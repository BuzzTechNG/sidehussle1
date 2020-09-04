import React from 'react'

function CustomSelect(props) {
    const [ optionOpened, setOptionOpened ] =  React.useState(false)
    const toggle = ()=> {setOptionOpened(prev => !prev); console.log(optionOpened)}
    return (
        <div className="sidehussle-select" onClick={toggle}>
          <i className="mx-1 fa  fa-angle-down"></i>  { props.selected }  
          { optionOpened && <div className="sidehussle-select-overlay"></div>}         
          { optionOpened && <div className="sidehussle-select-option"> { props.children } </div>}         
       </div>
    )
}

export default CustomSelect
