import React from 'react'
import { appLogic } from '../../../..'
import { NavLink } from 'react-router-dom'
import PreviousJobItem from '../Availablejobs/Card/PreviousJobItem'
import { Unavaliable } from '../../../../Unavaliable'

function Previousjobs() {
  
  return (
      <div className="container-m">
        <div>
          <Unavaliable text="This section shows all jobs you've completed/attempted. You haven't completed any job." img={require("../../../../assets/err.svg")}/>
          <PreviousJobItem />
          </div>
      </div>

  )
}
 
export default Previousjobs
