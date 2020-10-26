import React from 'react'

function Unavaliable({img,text, children}) {
    return (
        <div className="d-flex align-items-center mb-4 card container-m  py-5" style={{flexDirection:"column"}} >
            <img src={img} alt="" style={{width:"150px",}}/>
            
             <div className="subtitle2 mt-4">{text}</div>
            {children}
        </div>
    )
}

export { Unavaliable }