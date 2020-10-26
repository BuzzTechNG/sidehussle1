import React from "react";
import CustomSelect from "../../../SIdeHussleComponents/customSelect";
import Accordion from "../../../SIdeHussleComponents/Accordion";
import { useQuery, useMutation } from "@apollo/client";
import { appLogic,apolloHelper } from "../../../..";
import Lottie from "../../../../lottie";
import NoMessage from "../../../SIdeHussleComponents/NoMessage";
import NoData from "../../../SIdeHussleComponents/NoData";
function BankAccount() {
  const { data, loading, refetch } = useQuery(apolloHelper.GET_USER_BANK_DETAILS)
  const [addUserBankDetails, addUserBankDetailsResult] = useMutation(apolloHelper.ADD_USER_BANK_DETAILS)
  const [backlist, setBanklist] = React.useState([]);
  const [accountNumber, setAccountNumber] = React.useState("");
  const [newAccountNumber, setNewAccountNumber] = React.useState(false);
  const [selectedBank, setSelectedBank] = React.useState({});
  const [verifiedAccount, setVerifiedAccount] = React.useState({});
  async function verifyAccountNumber(account_number, back_code) {
    let verifyAcc = await fetch(
      `https://api.paystack.co/bank/resolve?account_number=${account_number}&bank_code=${back_code}`,
      {
        headers: {
          Authorization:
            "Bearer sk_test_9e2450a9dfb7daf8e8f4cc34c2aea150dc54536d",
          "Cache-Control": "no-cache",
        },
      }
    );
    verifyAcc = await verifyAcc.json();
    setVerifiedAccount(verifyAcc);
    console.log(verifyAcc);
  }
  async function createTransferRecipient() {
    if (verifiedAccount.status === false) return;
    const vac = verifiedAccount.data;
    const response = await addUserBankDetails({variables:{
      type: "nuban",
      name: vac.account_name,
      
      account_number: vac.account_number,
      bank_code: selectedBank.code,
      currency: "NGN",
    }})
    if(response.data.addUserBankDetails.message === "success"){
      refetch()
    }
    console.log(response)
  }
  
  console.log(data)

  React.useEffect(() => {
    async function bankList() {
      let banks = await fetch("https://api.paystack.co/bank", {
        headers: {
          Authorization:
            "Bearer sk_test_9e2450a9dfb7daf8e8f4cc34c2aea150dc54536d",
          "Cache-Control": "no-cache",
        },
      });
      banks = await banks.json();
      console.log(banks);
      setBanklist(banks.data);
    }
    bankList();
    return () => {};
  }, []);
  return (
    <div className="col custom-shadow  py-3 px-3">
      <div className="title2 ">Bank Details</div>
      <div className="subtitle3 mb-3">Add or remove bank account</div>

          <div className="mx-4">
            <p className="subtitle1">
              Account Details you've added:
            </p>
            <div className="mcard p-2 mb-2"> 
            {
              loading &&   <Lottie style={{width:"120px",height:"40px",transform:"scale(1)", margin:"auto auto"}} animation="/loading4.json"/>

            } 
            {
              (!loading && data?.getUserBankDetails?.length < 1 || data?.getUserBankDetails === null)  && <NoData text="No account found"/>
            }
            {
             
              data?.getUserBankDetails?.map((bank,index) => (
                <div className="mb-2" key={`${index}-bank`}>
                  <div className="subtitle2">
                    {bank.accountName}
                  </div>
                  <div className="subtitle3">
                    {bank.accountNumber}
                  </div>
                </div>
              ))
            }</div>
            {/* <p className="link subtitle3" onClick={()=> setNewAccountNumber(prev => !prev)}>Add new bank account</p> */}
            <Accordion title={"Add new bank account"} titleClass={"subtitle3 link"} icon={"fa fa-sync"}>
            <div className="mx-3">
      {true && 
      <>
        <div className="subtitle1 mt-2"> Select your bank </div>
      <CustomSelect selected={selectedBank.name}>
        {backlist.map((bank, index) => (
          <option onClick={() => setSelectedBank(bank)} key={index}>
            {bank.name}
          </option>
        ))}{" "}
      </CustomSelect>
      <div className="my-2 job-form subtitle1">
        Account Number
        <div className="d-flex  job-form p-0 m-0">
          <input
            style={{ width: "40px", padding: "0 12px" }}
            disabled
            type="text"
            value=""
          />
          <input
            className="pl-2"
            style={{ maxWidth: "250px" }}
            onBlur={() => verifyAccountNumber(accountNumber, selectedBank.code)}
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            type="number"
            min="0"
          />
        </div>
        
        {verifiedAccount.data?.account_name !== undefined &&
          verifiedAccount?.status === true && (
            <div>
              <p className="subtitle2">
                Account Name: {verifiedAccount.data.account_name}
              </p>
              <p className="subtitle2">
                Account Number: {verifiedAccount.data.account_number}
              </p>

              <div
                className="action-btn subtitle1"
                onClick={() => createTransferRecipient()}
              >
                Save Account
              </div>
            </div>
          )}
        {verifiedAccount?.status === false && (
          <div className="mt-2">
            <i className="fa fa-warning mr-3" style={{ fontWeight: "900" }}></i>
            {verifiedAccount?.message}
          </div>
        )}
      </div>
      </>
      }
      </div>
            </Accordion>
          </div>
      
      
    </div>
  );
}

function ProfileDetails() {
  return (
    <div className="col custom-shadow py-3 px-3 ">
      <div className="title3">Account Information </div>
      <div className="subtitle3">Settings to help you keep your account secure</div>
      <div className="row job-form">
        <div className="col-12 col-md-6">
          <label className="subtitle2 ">First Name</label>
          <input  type="text" />
        </div>
        <div className="col-12 col-md-6">
          <label className="subtitle2 ">Last Name</label>
          <input  type="text" />
        </div>
        <div className="line mt-4 mb-2" style={{ width: "100%" }}></div>
        <div className="col-12">
        <div className="title3">
          Email address
        </div>
        <div className="subtitle3 mb-2 font-weight-normal">Add or remove email address</div>
        <div className="mx-3">
          <p className="subtitle1">Email address you've added</p>
        </div>
        <Accordion title={"change email"} titleClass={"subtitle3 link"} icon={"fa fa-sync"}>
        <div className="col-12 mx-md-3">
          <label className="subtitle2 ">Email address</label>
          <input  type="text" />
        </div>
        <div className="d-flex mx-4 pl-1">
        <div className="action-btn subtitle2 mr-2">
          Cancel
        </div>
        <div className="action-btn subtitle2">
          Send Verification
        </div>
        </div>
        </Accordion>
        </div>
        
        <div className="line mt-4 mb-2" style={{ width: "100%" }}></div>

        <div className="col-12">
        <div className="title3">
          Mobile Number
        </div>
        <div className="subtitle3 mb-2 font-weight-normal">Add or remove mobile number</div>
        <div className="mx-3">
          <p className="subtitle1">Mobile number you've added</p>
        </div>
        <Accordion title={"change mobile number"} titleClass={"subtitle3 link"} icon={"fa fa-sync"}>
        <div className="col-12 mx-3">
          <label className="subtitle2 ">Mobile number</label>
          <input  type="text" />
        </div>
        <div className="d-flex mx-4 pl-1">
        <div className="action-btn subtitle2 mr-2">
          Cancel
        </div>
        <div className="action-btn subtitle2">
          Send Verification
        </div>
        </div>
        </Accordion>
        </div>
      </div>

      <div className="line mt-4 mb-2" style={{ width: "100%" }}></div>
      <div className="">
        <div className="subtitle">Linked Accounts</div>
        <div className="hint">
          we use this to let you sign in and populate your profile information
        </div>
        <div className="d-flex subtitle my-4 align-items-center">
          <i className="fa fa-google mr-3"></i>{" "}
          <div className="column">
            {" "}
            with Google<div className="hint">google id: 84878774djdikds</div>
          </div>{" "}
            <i className="fa fa-times col"></i>
        </div>
      </div>
      <div className="line mt-4 mb-2" style={{ width: "100%" }}></div>
        <div>
        <div className="subtitle2">Delete Account</div>
        <div className="hint">
          By deleting user account you will lose all your data
        </div>
        </div>
        <div className="action-btn">Save Changes</div>
    </div>
  );
}
function Password(){
    return (
        <div className="col custom-shadow py-3 px-3 ">
          <div className="title3">Change Password</div>
          <div className="subtitle3 mb-3">Choose a unique password to protect your account</div>

          <div className="column job-form mx-4">
            
            <div className="subtitle2"><label > Type your Current Password
            <input className="hint" type="password"/>
            </label></div>    
            <div className="line mt-2" style={{width:"100%"}}></div>
                
                
            <div className="subtitle2 mt-4"><label >Type your new Password      
            <input className="pr-5 hint" type="password"/>
            </label></div>    
            <div className="subtitle2"><label >Retype your new Password
            <input className="hint pr-4" type="password"/>
            </label></div>    
                <div className="action-btn subtitle1">
                    Save Password
                </div>
          </div>
          
          </div>
              )
}
function NotificationSettings(){
    return (
        <div className="col custom-shadow p-3 pb-4 ">
          <div className="title3">Notification Settings</div>
          <div className="line mt-2" style={{width:"100%"}}></div>
          <div className="column">
              <div className="d-flex mt-4">
                  <div className="col">
                    <div className="subtitle1">Push Notification</div>
                    <div className="subtitle3">Receive instant jobs push notifications</div>
                  </div>
                  <div>
                  <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
                </label>

                  </div>
              </div>
              <div className="d-flex mt-4">
                  <div className="col">
                    <div className="subtitle1">Chat Notification</div>
                    <div className="subtitle3">Receive chat notifications</div>
                  </div>
                  <div>
                  <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
                </label>

                  </div>
              </div>
              <div className="d-flex mt-4">
                  <div className="col">
                    <div className="subtitle1">Payment Notification</div>
                    <div className="subtitle3">Receive payment push notifications</div>
                  </div>
                  <div>
                  <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
                </label>

                  </div>
              </div>
           </div>
           </div>)

}
function AccountSetUp() {
  const [navigation, setNavigation] = React.useState(1);
  return (
    <div className="full-width" >
      <div className="container-m settings-page mb-3">
        <div className="page-title">Settings</div>
        <div className="row mt-4">
          <div className="col-12 col-lg-3 settings-navigation ">
            <ul className="mt-3 ">
                <li className="p-0 m-0"></li>
              <li key="Profile" className={navigation === 0 ? 'active' : ''} onClick={()=>setNavigation(0)}>Account</li>
              <li className={navigation === 1 ? 'active' : ''} onClick={()=>setNavigation(1)}>Notification</li>
              <li key="bank" className={navigation === 2 ? 'active' : ''} onClick={()=>setNavigation(2)}>Bank Details</li>
              <li className={navigation === 3 ? 'active' : ''} onClick={()=>setNavigation(3)}>Password</li>
            </ul>
          </div>
        <div className="col px-3">
        {navigation === 0 && (
            <div className="col">
              {" "}
              <ProfileDetails />
            </div>
          )}
          {navigation === 1 && (
            <div className="col">
              {" "}
              <NotificationSettings />
            </div>
          )}
          {navigation === 2 && (
            <div className="col">
              {" "}
              <BankAccount />
            </div>
          )}
          {navigation === 3 && (
            <div className="col">
              {" "}
              <Password />
            </div>
          )}
        </div>
          
        </div>
      </div>
    </div>
  );
}

export default AccountSetUp;
