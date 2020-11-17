import React from 'react'
import SocailLink from './SocialLink'
import UploadInfo from '../../../SIdeHussleComponents/UploadInfo'

function StoreSetupView() {
    return (
        <div>
            <div className=" job-form">
             <div className="custom-shadow no-shadow py-4 mb-3">
             <div className="title1 mb-4 px-md-4 px-2">
             Basic Info
             <div className="hint">Let your visitors get to know you.</div>
             </div>   
             <div className="line my-3"></div>
            <div className="px-md-4 px-2">
            <div className="title3">Logo
                <div className="hint">For best results upload a high resoulution image</div>
                <UploadInfo/>
            </div>
            <div className="title3">Store Name
            <div className="hint">This should be your store/business name</div>
                <input type="text"/>
            </div>
            </div>
            </div>
            <div className="custom-shadow no-shadow py-4 mt-3">
            <div className="title1 mb-3 px-md-4 px-2">
             Contact Info
             <div className="hint">Add your contact info so people can get in touch.</div>
             </div>
            <div className="line my-3"></div>
             <div className="px-md-4 px-2">
            <div className="mb-3 title3">Store Physical Address
                <textarea type="text"/>
            </div>
            <div className="title3">Store/Business mobile no
                <input type="number"/>
            </div>
            </div>
            </div>
            <div className="custom-shadow no-shadow py-4 mt-5">
            <div className="title1 mb-3 px-md-4 px-2">
             Social Info
             <div className="hint">Add your social info so people can check them out.</div>
             </div>
            <div className="line my-4"></div>
            <div className="px-md-4 px-2">
            <div className="title3">Social Account
                <SocailLink onChange={()=>{}}/>
            </div>

            {/* <div>Pick Store theme</div> */}
            <div className="title3"> Services listed in your profile will be used as business category </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default StoreSetupView
