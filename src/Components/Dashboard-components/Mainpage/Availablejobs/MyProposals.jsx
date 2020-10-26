import React from 'react'
import ActiveJobs from './ActiveJobs'
import Previousjobs from '../Previousjobs/Previousjobs'

function MyProposals() {
    const [navigation, setnavigation] = React.useState(0)
    return (
        <div className="full-width">
            <div className="container-m">
                <div className="page-title">My Proposals</div>
                <div className="top-tab d-flex">
                    <div onClick={()=>setnavigation(0)} className={`tab-item ${navigation === 0 ? 'square-btn' : ''}` }>Active Jobs</div>
                    <div onClick={()=>setnavigation(1)} className={`tab-item ${navigation === 1 ? 'square-btn' : ''}` }>Past Jobs</div>
                    <div onClick={()=>setnavigation(2)} className={`tab-item ${navigation === 2 ? 'square-btn' : ''}` }>Intresting jobs</div>
                </div>
            <ul class="nav nav-tabs">
            <div className="col ">
        {navigation === 0 && (
            <div className="">
              {" "}
              <ActiveJobs />
            </div>
          )}
          {navigation === 1 && (
            <div className="col">
              {" "}
              <Previousjobs />
            </div>
          )}
          {navigation === 2 && (
            <div className="col">
              {" "}
              {/* <BankAccount /> */}
            </div>
          )}
          {navigation === 3 && (
            <div className="col">
              {" "}
              {/* <Password /> */}
            </div>
          )}
        </div>
            </ul>
            </div>
        </div>
    )
}

export default MyProposals
