import React from 'react'
import { appLogic, apolloHelper } from '../../../..'
import { NavLink } from 'react-router-dom'
import PreviousJobItem from '../Availablejobs/Card/PreviousJobItem'
import { Unavaliable } from '../../../../Unavaliable'
import { useQuery } from '@apollo/client'
import LottieCircleLoading from '../../../SIdeHussleComponents/LottieCircleLoading'

function Previousjobs() {
  
  const {data, loading, } = useQuery(apolloHelper.GET_JOBS_ASSIGNED_TO_WITH_STATUS,{
    variables:{
      status:'Completed'
    }
  })
  console.log(data)
  
  return (
      <div>
       <div className="container-m">
        {
          loading && <LottieCircleLoading/>
        }
        {
          data?.getJobsAssignedToWithStatus?.map((items,index)=>(
            <PreviousJobItem key={`prec-${index}`} price={items.jobBudget} description={items.jobDescription} id={items.id} topic={items.jobTitle} specification={items.jobSpecification} />  
          ))
        }
        {data?.getJobsAssignedToWithStatus?.length < 1 &&      <Unavaliable text="This section shows all jobs you've completed/attempted. You haven't completed any job." img={require("../../../../assets/err.svg")}/>}
       </div>
  </div>
  )
   
}
 
export default Previousjobs
