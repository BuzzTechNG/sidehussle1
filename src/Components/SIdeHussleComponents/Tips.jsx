import React from 'react'

function Tips({ children }) {
    return (
        <div className="custom-shadow2 p-2">
            <div> <i className="fa fa-info"></i> Tips</div>
            <div className="line my-2"></div>
            { children }
        </div>
    )
}

export default Tips
