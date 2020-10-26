import React from 'react'
import { appLogic,apolloHelper } from '../../../..'
import { useMutation } from '@apollo/client'


function DepositFund(props) {
    const [deposit,setDeposit] = React.useState(0)
    const [payWithPaystack, payWithPaystackResult] = useMutation(apolloHelper.PAY_WITH_PAYSTACK)
   
    async function paystackInline(){
    const total = (parseFloat(appLogic.paystackCharge(deposit))+parseFloat(convertNaN(deposit))).toFixed(2)   
    const result = await payWithPaystack({variables:{
        amount: total
    }})
    console.log(result)

    const unparseResult = await JSON.parse(result.data.payWithPaystack)
    const url = unparseResult.data.authorization_url
    window.location.assign(url);
    }

    function convertNaN(value){
        if(isNaN(value))return 0
        return value
    }
    return (
        <div className="full-width" style={{minHeight:"80vh"}}>
            <div className="container-m">
                <div className="page-title">
                    Deposit Fund
                </div>
                <div className="custom-shadow mx-auto p-4 mt-5 py-5 mx-mb-2" style={{width:"100%"}}>
                    <div className="row my-3 align-items-center">
                        <div className="col-5 subtitle2">Deposit Amount</div>
                        <div className="col-7  text-right">
                             <div className="d-flex  job-form p-0 m-0">
                        <input style={{width:"40px",padding:"0 12px"}} disabled  type="text" value="N"/>
                        <input value={deposit} onChange={(e)=>setDeposit(e.target.value)}  className="pl-2" type="number" min="0" />
                        </div>
                         </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-5 subtitle2">Processing Fee <span style={{fontSize:"10px"}}>(paystack)</span></div>
                        <div className="col text-right">N{appLogic.numberWithCommas(appLogic.paystackCharge(deposit))}</div>
                    </div>
                    <div className="line" style={{width:"100%"}}></div>
                    <div className="row my-3">
                        <div className="col-5 subtitle1">Total</div>
                        <div className="col text-right" >N{appLogic.numberWithCommas((parseFloat(appLogic.paystackCharge(deposit))+parseFloat(convertNaN(deposit))).toFixed(2))}</div>
                    </div>
                    <div className="row my-3">
                        <div onClick={paystackInline} className="square-btn col-11 mx-auto py-2">Proceed Payment</div>
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
