import React from "react";

function Wallet() {
  return (
    <div className="full-width">
      <div className="container-m">
        <div className="page-title">Wallet</div>
        <div className="custom-shadow row color-shadow card-rounded pl-3 mx-0">
            <div className="col py-4">
          <div className="d-flex">
            <div className="subtitle1">Total Balance</div>
            <div
              className="my-auto mx-3"
              style={{
                background: "#ff000012",
                color: "red",
                borderRadius: "20px",
                padding: "3px 18px",
                fontSize: "11px",
              }}
            >
              {" "}
              <i className="fa fa-arrow-up mr-2"></i> 3,000
            </div>
            <div
              className="my-auto mx-2"
              style={{
                background: "#00ff0012",
                color: "green",
                borderRadius: "20px",
                padding: "3px 18px",
                fontSize: "11px",
              }}
            >
              {" "}
              <i className="fa fa-arrow-down mr-2"></i> 1,200
            </div>
          </div>
          <div className="titleXL my-3">NGN 5,000.00</div>

          <div className="d-flex">
            <div className="action-btn btn-rounded mr-5">Deposit</div>
            <div className="action-btn2 btn-rounded">Withdraw</div>
          </div>
        </div>
        <div className="col-7 display-none">
              <div className="wallet-svg"></div>
        </div>
        </div>

        <div className="custom-shadow mt-5 mb-2 p-2 px-3 card-rounded color-shadow">
              <div className="d-flex justify-content-between my-2">
                <div className="subtitle1">Transaction History</div>
                <div className="custom-input">
                    <input type="text" className="input-plain"/>
                    <i className="fa fa-search"></i>
                </div>
              </div>
              <div className="line"></div>
              <div style={{height:"500px"}}> 

              </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
