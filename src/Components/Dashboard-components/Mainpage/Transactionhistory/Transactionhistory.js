import React, { Component } from "react";
import transactionlist from "../Previousjobslist";
import "./Transactionhistory.scss";

import THcard from "./THcard/THcard";

class Transactionhistory extends Component {
  state = {
    transactionlist: transactionlist,
  };

  render() {
    const Thcard = this.state.transactionlist.map((transaction) => (
      <THcard
        key={transaction.id}
        id={transaction.id}
        price={transaction.price}
        location={transaction.location}
        time={transaction.time}
        date={transaction.date}
        name={transaction.name}
        balance={transaction.balance}
        status={transaction.status}
      />
    ));
    return (
      <div className="full-width">
        <div className="container-m">
          <div className="page-title my-4"> Transaction history</div>
          <div className="mcard mb-4 card-rounded color-shadow">
            <div className="p-4">
              {/* <table className="table table-bordere mb-5">
                <thead className="custom-shadow tablehead subtitle1">
                  <tr>
                    <th scope="col">#</th>
                    <th>Date & Time</th>
                    
                    <th scope="col">Amount</th>
                    <th scope="col">Transaction Id</th>
                    <th scope="col">Transaction status</th>
                  </tr>
                </thead>
                <tbody className="subtitle2">
                {Thcard}
                </tbody>
              </table> */}
              <div className="trans-row row title3 display-none">
        <div className="col">#</div>
        <div className="col-11 row">
        <div className=" col-8 col-md-3 col-xs-8 ">
          Date & Time
        </div>
        <div className="col-4 col-md-2 col-xs-4">Amount</div>
        <div className="col-6 col-md-3 col-xs-6">Type</div>
        <div className="col-12 col-md-3 col-xs-12">Status</div>
        </div>
      </div>
      <div className="line"></div>
              {Thcard}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Transactionhistory;
