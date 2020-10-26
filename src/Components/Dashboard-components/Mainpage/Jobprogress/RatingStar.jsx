import React from 'react'

function RatingStarUneditable({star}) {
    return (
        <div className="d-flex">
            {
                Array(5).fill(1,0,5).map((item,index)=>(
                    <i className="fa fa-star mr-2" style={{color:star > index ? "orange" : ""}}></i>
                ))
            }
        </div>
    )
}

export default RatingStarUneditable
