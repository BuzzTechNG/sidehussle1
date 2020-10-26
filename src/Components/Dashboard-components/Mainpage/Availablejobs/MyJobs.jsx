import React from 'react'
import PreviousJobItem from './Card/PreviousJobItem'
import { Unavaliable } from '../../../../Unavaliable'
import { appLogic, apolloHelper } from '../../../..'
import { useQuery } from '@apollo/client'

function MyJobs() {
    const {data, loading, } = useQuery(apolloHelper.GET_JOBS_USER_POSTED_WITH_STATUS,{
        variables:{
          status:'Ongoing'
        }
      })
      console.log(data)
    return (
        <div className="full-width">
            <div className="container-m">
              <div className="page-title">My Jobs</div>
              {data?.getJobsUserPostedWithStatus?.length < 1 && <Unavaliable text="You havn't posted a job." img={require("../../../../assets/err.svg")}/>}
              {
            data?.getJobsUserPostedWithStatus?.map((items,index)=>(
              <PreviousJobItem key={`prec-${index}`} price={items.jobBudget} description={items.jobDescription} id={items.id} topic={items.jobTitle} specification={items.jobSpecification} />  
            ))
          }
            </div>
        </div>
        
    )
}

export default MyJobs
