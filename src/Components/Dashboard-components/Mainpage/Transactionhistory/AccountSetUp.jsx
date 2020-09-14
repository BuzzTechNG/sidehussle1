import React from "react";
import CustomSelect from "../../../SIdeHussleComponents/customSelect";
function BankAccount() {
  const [backlist, setBanklist] = React.useState([]);
  const [accountNumber, setAccountNumber] = React.useState("");
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
    const body = {
      type: "nuban",
      name: vac.account_name,
      description: "user recipient",
      account_number: vac.account_number,
      bank_code: selectedBank.code,
      currency: "NGN",
    };
    let createRep = await fetch(`https://api.paystack.co/transferrecipient`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Authorization:
          "Bearer sk_test_9e2450a9dfb7daf8e8f4cc34c2aea150dc54536d",
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
    });
    createRep = await createRep.json();
    //   setVerifiedAccount(createRep)
    console.log(createRep);
    if (createRep.status) {
      //   save rep code api
    }
  }

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
      <div className="title3 mb-3">Bank Details</div>
      <div className="subtitle"> Select your bank </div>
      <CustomSelect selected={selectedBank.name}>
        {backlist.map((bank, index) => (
          <option onClick={() => setSelectedBank(bank)} key={index}>
            {bank.name}
          </option>
        ))}{" "}
      </CustomSelect>
      <div className="my-4 job-form">
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
        {/* verify btn */}
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
                className="action-btn"
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
    </div>
  );
}

function ProfileDetails() {
  return (
    <div className="col custom-shadow py-3 px-3 ">
      <div className="title3">Account Information </div>
      <div className="row job-form">
        <div className="col-12 col-md-6">
          <label className="subtitle2">First Name</label>
          <input type="text" />
        </div>
        <div className="col-12 col-md-6">
          <label className="subtitle2">Last Name</label>
          <input type="text" />
        </div>
        <div className="line mt-4 mb-2" style={{ width: "100%" }}></div>
        <div className="col-12 col-md-6">
          <label className="subtitle2">Email</label>
          <input type="text" />
        </div>
        <div className="col-12 col-md-6">
          <label className="subtitle2">Mobile Number</label>
          <input type="text" />
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

function AccountSetUp() {
  const [navigation, setNavigation] = React.useState(0);
  return (
    <div className="full-width" style={{ minHeight: "70vh" }}>
      <div className="container-m settings-page">
        <div className="page-title">Settings</div>
        <div className="row mt-4">
          <div className="col-12 col-lg-3 settings-navigation">
            <ul className="mt-3">
                <li className="p-0 m-0"></li>
              <li key="Profile" className={navigation === 0 ? 'active' : ''} onClick={()=>setNavigation(0)}>Profile</li>
              <li className={navigation === 1 ? 'active' : ''} onClick={()=>setNavigation(1)}>Notification</li>
              <li key="bank" className={navigation === 2 ? 'active' : ''} onClick={()=>setNavigation(2)}>Bank Details</li>
              <li className={navigation === 3 ? 'active' : ''} onClick={()=>setNavigation(3)}>Password</li>
            </ul>
          </div>

          {navigation === 0 && (
            <div className="col">
              {" "}
              <ProfileDetails />
            </div>
          )}
          {navigation === 2 && (
            <div className="col">
              {" "}
              <BankAccount />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AccountSetUp;
