import React from 'react'
import PreviousJobItem from './Card/PreviousJobItem'

function ActiveJobs() {
    return (
        <div className="full-width">
        <div className="container-m">
          <div className="page-title">Active Jobs</div>
          <PreviousJobItem/>  
        </div>
    </div>
    )
}

export default ActiveJobs
