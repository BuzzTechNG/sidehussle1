import React from 'react'
import UploadInfo from '../../../SIdeHussleComponents/UploadInfo'

function Collection() {
    return (
        <div className="full-width">
            <div className="">
            <img src="https://cdn.hipwallpaper.com/i/19/88/YtwHJA.jpg" style={{width:"100%",height:"180px",top:0,left:0,zIndex:"0"}}  alt=""/>
            </div>
            <div className="container-lg row" style={{marginTop:"-50px"}} >
                <div className="col-lg-8 col-xs-12 px-md-3 mb-3">
                    <div className="custom-shadow2 p-2 px-md-4 card-rounded full-card">
                        <div className="title3 my-4">Products in Collection</div>
                        <div className="line mb-3"></div>
                        <div className="mt-5">
                            <div className="title2 text-center " style={{fontWeight:"200"}}>Add products to your collections</div>
                            <div className="subtitle3 text-center my-2">creates a collection on your page</div>
                            <div className="action-btn btn-rounded mx-auto"> <i className="fa fa-plus mr-2"></i> Add Products</div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-xs-12 px-md-3">
                <div className="custom-shadow2 p-2 px-md-4 card-rounded job-form mt-0">
                <div className="title3 my-4">Collection Info</div>
                        <div className="line"></div>

                        <div className="subtitle2">Collection Name</div>
                        <input type="text"/>

                        <div className="subtitle2">Collection Image</div>
                        <UploadInfo/>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Collection
