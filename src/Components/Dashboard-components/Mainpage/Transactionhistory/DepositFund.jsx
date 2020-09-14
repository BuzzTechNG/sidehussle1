import React from 'react'


function DepositFund() {
   async function paystackInline(){
    const body = {
        'email' : "topemichealodediran@gmail.com",
        'amount' : "20000",
        'callback_url': "google.com"
    }  
    let fetchResponse = await fetch('https://api.paystack.co/transaction/initialize',
            {
                method: "POST",
                body: JSON.stringify(body),
                headers:{
                    "Authorization": "Bearer sk_test_9e2450a9dfb7daf8e8f4cc34c2aea150dc54536d",
                    "Cache-Control": "no-cache"
                }
            }
        )
        fetchResponse = await fetchResponse.json()
        console.log(fetchResponse)
    }
    return (
        <div className="full-width" style={{minHeight:"80vh"}}>
            <div className="container-m">
                <div className="page-title">
                    Deposit Fund
                </div>
                <div className="custom-shadow mx-auto p-4 mt-5 py-5 " style={{maxWidth:"750px",width:"100%"}}>
                    <div className="row my-3 align-items-center">
                        <div className="col-5 subtitle2">Deposit Amount</div>
                        <div className="col-7  text-right">
                             <div className="d-flex  job-form p-0 m-0">
                        <input style={{width:"40px",padding:"0 12px"}} disabled  type="text" value="N"/>
                        <input  className="pl-2" type="number" min="0" />
                        </div>
                         </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-5 subtitle2">Processing Fee</div>
                        <div className="col text-right">N787</div>
                    </div>
                    <div className="line" style={{width:"100%"}}></div>
                    <div className="row my-3">
                        <div className="col-5 subtitle1">Total</div>
                        <div className="col text-right" >N555</div>
                    </div>
                    <div className="row my-3">
                        <div onClick={paystackInline} className="btn btn-primary col-11 mx-auto py-2">Proceed Payment</div>
                    </div>
                    <div className="row my-1 subtitle3 px-3">
                    You agree to authorize the use of your card for this deposit and future payments.
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default DepositFund
