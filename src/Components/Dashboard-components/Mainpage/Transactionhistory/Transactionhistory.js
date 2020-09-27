import React, { Component } from "react";
import "./Transactionhistory.css";
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
        <div className="container-lg">
          <div className="page-title my-4"> Transaction history</div>
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered mb-5">
                <thead className="custom-shadow tablehead subtitle1">
                  <tr>
                    <th scope="col">#</th>
                    <th>Date & Time</th>
                    
                    <th scope="col">Amount</th>
                    <th scope="col">Transaction Id</th>
                    <th scope="col">Transaction status</th>
                  </tr>
                </thead>
                {Thcard}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Transactionhistory;
