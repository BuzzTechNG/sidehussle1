import React from 'react'

function SvgWithdraw({text}) {
    return (
        <div className="d-flex align-items-center mb-4 container-m mx-4" style={{flexDirection:"column"}} >
            <div style={{width:"70%"}}>
               <img src={require("../../assets/withdraw.svg")} alt=""/>
                </div>
             <div className="subtitle1 mt-4">{text}</div>
            
        </div>
    )
}

export default SvgWithdraw











