import React from 'react'

function NoData({text}) {
    return (
        <div className="d-flex align-items-center mx-auto mt-2" style={{flexDirection:"column",opacity:"0.7"}} >
        <i className="fa fa-folder"></i>          
    
     <div className="subtitle1 mt-2">{text}</div>
    
</div>
    )
}

export default NoData
