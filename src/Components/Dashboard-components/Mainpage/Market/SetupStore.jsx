import React from 'react'

import StoreSetupView from './StoreSetupPage';

function SetupStore() {
    return (
        <div className="full-width">
            <div className="container-m p-md-3">
                <div className="page-title">Business Setup</div>
                <div className="pb-2">
                <StoreSetupView/>
                </div>
            </div>
        </div>
    )
}

export default SetupStore
