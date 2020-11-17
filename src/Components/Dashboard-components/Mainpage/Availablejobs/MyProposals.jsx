import React from 'react'
import ActiveJobs from './ActiveJobs'
import Previousjobs from '../Previousjobs/Previousjobs'
import { Switch, Route, NavLink } from 'react-router-dom'
import Ads from '../../../SIdeHussleComponents/Ads'

function MyProposals() {
    const [navigation, setnavigation] = React.useState(0)
    return (
        <div className="full-width">
            <div className="container-m">
                <div className="page-title">My Applications</div>
                <div className="top-tab d-flex">
                    <NavLink to="/myproposals"  onClick={()=>setnavigation(0)} className={`tab-item ${navigation === 0 ? 'square-btn' : ''}` }>Active Jobs</NavLink>
                    <NavLink to="/myproposals/previousjob" activeClassName="square-btn" onClick={()=>setnavigation(1)} className={`tab-item ${navigation === 1 ? 'square-btn' : ''}` }>Past Jobs</NavLink>
                    <NavLink to="" onClick={()=>setnavigation(2)} className={`tab-item ${navigation === 2 ? 'square-btn' : ''}` }>Pending Applications</NavLink>
                </div>
            <ul class="nav row">
            <div className="col ">
            <Switch>
              <Route
                path="/myproposals"
                component={ActiveJobs}
                exact
              />
        
              <Route
                path="/myproposals/previousjob"
                component={Previousjobs}
              />
              {/* <Route
                path="/account_setup/display"
                render={ThemeSettings}
              /> */}
              
              {/* <Route path="/startjob" component={Startjob} /> */}
            </Switch>
        
        </div>
        <div className="col-3 display-none">
          <Ads/>
        </div>
            </ul>
            </div>
        </div>
    )
}

export default MyProposals
