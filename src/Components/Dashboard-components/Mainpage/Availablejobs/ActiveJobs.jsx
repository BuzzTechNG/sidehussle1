import React from 'react'
import PreviousJobItem from './Card/PreviousJobItem'
import { Unavaliable } from '../../../../Unavaliable'
import { useQuery } from '@apollo/client'
import { appLogic, apolloHelper } from '../../../..'
import LottieCircleLoading from '../../../SIdeHussleComponents/LottieCircleLoading'

function ActiveJobs() {
    const {data, loading, } = useQuery(apolloHelper.GET_JOBS_ASSIGNED_TO_WITH_STATUS,{
      variables:{
        status:'Ongoing'
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
          {data?.getJobsAssignedToWithStatus?.length < 1 && <Unavaliable text="You have no ongoing job. Once a job is assigned to you, it would appear here" img={require("../../../../assets/err.svg")}/>}
         </div>
    </div>
    )
}

export default ActiveJobs
