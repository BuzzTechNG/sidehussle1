import React from "react";
import UploadInfo from "../../../SIdeHussleComponents/UploadInfo";

function ProductPage() {
  return (
    <div className="full-width">
      <div className="div">
      <div className="">
            <img src="https://cdn.hipwallpaper.com/i/19/88/YtwHJA.jpg" style={{width:"100%",height:"180px",top:0,left:0,zIndex:"0"}}  alt=""/>
            </div>
      </div>
      <div className="container-v row" style={{marginTop:"-50px"}}>
        <div className="col-9 row">
          <div className="col">
            <div className="custom-shadow no-shadow my-3 p-2 px-md-4">
              <div className="title3 my-3">Images & Videos</div>
              <div className="line"></div>
              <div className="row">

              <UploadInfo size="lg" />
              <UploadInfo size="sm" />
              </div>
            </div>
            <div className="custom-shadow no-shadow my-3 p-2 px-md-4">
              <div className="title3 my-3">Product Info</div>
              <div className="line"></div>
                <div className="job-form">
                    <div className="row">
                        <div className="col-md-8 my-2 subtitle1 col-sm-12">
                            Name
                            <input type="text"/>
                        </div>
                        <div className="col-md-3 my-2 subtitle1 col-sm-12">
                            Ribbon
                            <input type="text"/>
                        </div>
                        <div className="col-md-5 my-2 subtitle1 col-sm-12">
                            Price
                            <input type="number"/>
                        </div>
                            <div className="col-12 my-2 subtitle1">
                            Description
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                    </div>
                    



                    <div className="line my-3"></div>
                    <div className="title3 my-2">
                        Discount
                    </div>
                    <div className="row">
                    <div className="col-6">
                        Discount
                        <input type="text"/>
                    </div>
                    <div className="col-6">
                        Sale Price
                        <input type="text"/>
                    </div>
                    </div>
                    
                    <div className="line my-3"></div>
                    <div className="title2">
                        ADDITIONAL INFO SECTIONS
                    </div>
                    <div className="row">
                        <div className="col-4">RETURN & REFUND POLICY</div>
                        <div className="col-7">return and refund many many</div>
                    </div>
                    Add an info Section
                </div>


            </div>
            <div className="custom-shadow no-shadow my-3">
              <div className="title my-3">Product Options</div>
               
               
              <div className="line"></div>
              Color
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
