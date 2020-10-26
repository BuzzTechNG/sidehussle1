import React, { useRef } from "react";
import { appLogic, apolloHelper } from "../../../..";
import { useMutation, useQuery } from "@apollo/client";
import AvaliableBalance from "../Home/AvaliableBalance";
import NoData from "../../../SIdeHussleComponents/NoData";
import Lottie from "../../../../lottie";
import NoFile from "../../../SIdeHussleComponents/NoFile";
import NoMessage from "../../../SIdeHussleComponents/NoMessage";
import SvgWithdraw from "../../../SIdeHussleComponents/SvgWithdraw";
import NoBank from "../../../SIdeHussleComponents/NoBank";

function WithdrawFund() {
  const amountRef = useRef(null);
  const { data: bankData, loading } = useQuery(
    apolloHelper.GET_USER_BANK_DETAILS
  );

  const {
    data,
    refetch,
    loading: balanceLoading,
  } = useQuery(apolloHelper.AVALIABLE_BALANCE, { fetchPolicy: "network-only" });
  const [transfer, transferResult] = useMutation(
    apolloHelper.TRANSFER_WITH_PAYSTACK
  );
  const [bank, setBank] = React.useState(0);
  async function withDraw() {
    const resp = await transfer({
      variables: {
        amount: amountRef.current.value,
        userBank: bankData.getUserBankDetails[bank].paystackRSP,
      },
    });
    refetch();
    console.log(resp);
  }
  console.log(data);
  // if(loading && balanceLoading){ return   <Lottie style={{width:"120px",height:"40px",transform:"scale(1)", margin:"auto auto"}} animation="/loading4.json"/>}
  // if (!loading && bankData?.getUserBankDetails?.length < 1){ return <NoData text="No bank account registered, kindly register one to receive your funds"/>}

  return (
    <div className="full-width">
      <div className="container-m">
        <div className="page-title">Withdraw Funds</div>

        {loading && balanceLoading && (
          <Lottie
            style={{
              width: "120px",
              height: "120px",
              transform: "scale(1)",
              margin: "auto auto",
            }}
            animation="/loading3.json"
          />
        )}
        {(!loading && bankData?.getUserBankDetails?.length < 1 || bankData?.getUserBankDetails === null) && (
          <NoBank text="No bank account registered, kindly register one to receive your funds" />
        )}
        {!loading &&
          !balanceLoading &&
          bankData?.getUserBankDetails?.length > 0 && (
            <div className="row p-2 custom-shadow m-3 my-5">
                <div className="col-6 display-none ">
                <div className="subtitle1 job-form">
                    <div>
                    Account Details
                        </div> </div>
                <div className="title2 pr-4">

                <SvgWithdraw text="Kindly ensure that all the details supplied are correct before proceeding" className="mt-2"/>
                </div>
                </div>
              {/* Account Details */}
              <div className="col"> 
              <div className="row">
                <div className=" col-12 job-form">
                  <div className="mt-2 mb-1 subtitle1">Select account</div>
                  <select
                    defaultValue={"5"}
                    onChange={(e) => setBank(e.target.value)}
                  >
                    {bankData?.getUserBankDetails?.map((bank, index) => (
                      <option value={index} key={`${index}-bank`}>
                        {`${bank.accountName}-${bank.accountNumber}`}
                      </option>
                    ))}
                  </select>
                  <div className="subtitle2 my-1">
                    {" "}
                    <i className="fa fa-user"></i>{" "}
                    {bankData?.getUserBankDetails[bank]?.accountName}
                  </div>
                  <div className="subtitle2 my-1">
                    <i style={{ fontWeight: "700" }} className="fa fa-bank"></i>{" "}
                    {bankData?.getUserBankDetails[bank]?.accountNumber}
                  </div>
                </div>
              
              </div>
              {/* Withdrawable */}
              <div className="job-form mb-4">
                <div className="my-2 subtitle1">Withdrawable</div>
                {/* <div>{ `N ${appLogic.numberWithCommas(data?.getUserAvaliableBalance.balance)}.00` }</div> */}
                <div>{`N ${data?.getUserAvaliableBalance.balance}.00`}</div>
              </div>
              {/* Amount to withdraw */}
              <div className="job-form">
                <div className="subtitle1">Amount to withdraw</div>
                {/* <p>Withdrawable</p> */}
                <div className="d-flex">
                  <input
                    style={{ width: "40px", padding: "0 12px" }}
                    disabled
                    type="text"
                    value="N"
                  />
                  <input
                    ref={amountRef}
                    className="pl-2"
                    type="number"
                    min="0"
                    max={`${data?.getUserAvaliableBalance.balance}`}
                    style={{ width: "100%",  }}
                  />
                </div>
              </div>
              {/* Withdraw btn */}
              <div className="row justify-content-end px-3">
                <div
                  className=" mx-0 align-self-right square-btn p-2 px-4"
                  onClick={withDraw}
                >
                  Withdraw Funds
                </div>
              </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default WithdrawFund;
