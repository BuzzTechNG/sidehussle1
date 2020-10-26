import React from 'react'

function PageNotFound() {
    return (
        <div className="full-width">
            <div className="container-m">
                <div className="d-flex justify-content-center mt-5" >
                <img width="60%" src={require('../../../assets/404_page_not_found_.svg')} alt=""/>
                </div>
                <h1 className="title1 text-center mt-2">PAGE NOT FOUND</h1>
            </div>
        </div>
    )
}

export default PageNotFound
