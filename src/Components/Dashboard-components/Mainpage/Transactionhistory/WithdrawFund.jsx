import React from 'react'

function WithdrawFund() {
    return (
        <div className="full-width">
            <div className="container-m">
                <div className="page-title">
                    Withdraw Funds
                </div>
                  <div className="column p-3 custom-shadow m-3 my-5">
                    {/* Account Details */}
                    <div className="row">
                        <div className=" col-12 col-sm-6 job-form">
                            <div className="my-3">Account Details</div>
                             <p className="subtitle2 my-1">Account Name</p>
                             <p className="subtitle2 my-1">Account Number</p>
                        </div>
                        <div className="col-12 col-sm-6  mx-auto">
                            <p className="subtitle1 my-1">you will receive</p>
                             <p className="title1 my-1 text-bold">Amount</p>
                        </div>


                    </div>
                    {/* Withdrawable */}
                    <div className="job-form mb-4">
                        <div className="my-2">
                            Withdrawable
                        </div>
                        <p>Total Withdrawable</p>
                    </div>
                    {/* Amount to withdraw */}
                    <div className="job-form">
                        <div>Amount to withdraw</div>
                        {/* <p>Withdrawable</p> */}
                        <div className="d-flex">
                        <input style={{width:"40px",padding:"0 12px"}} disabled  type="text" value="N"/>
                        <input  className="pl-2" type="number" min="0" style={{width:"100%",maxWidth:"330px"}}/>
                        </div>
                    </div>
                    {/* Withdraw btn */}
                    <div className="row justify-content-en px-3">
                    <div className=" mx-0 align-self-right btn btn-info">Withdraw Funds</div>
                    </div>
                    </div>  

            </div>
        </div>
    )
}

export default WithdrawFund 
