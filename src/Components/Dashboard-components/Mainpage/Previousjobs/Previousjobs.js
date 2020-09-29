import React from 'react'
import { appLogic } from '../../../..'
import { NavLink } from 'react-router-dom'
import PreviousJobItem from '../Availablejobs/Card/PreviousJobItem'

function Previousjobs() {
  
  return (
    <div className="full-width">
      <div className="container-m">
      <div className="page-title">Past Jobs</div>
        <div>
          <PreviousJobItem />
        </div>
      </div>
    </div>
  )
}
 
export default Previousjobs
