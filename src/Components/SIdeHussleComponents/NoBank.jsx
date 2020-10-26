import React from 'react'

function NoBank({text}) {
    return (
        <div className="d-flex align-items-center mb-4 container-m mx-4" style={{flexDirection:"column"}} >
            <div style={{width:"30%"}}>
               <img src={require("../../assets/bank_note.svg")} alt=""/>
                </div>
             <div className="subtitle1 mt-4">{text}</div>
            
        </div>
    )
}

export default NoBank
