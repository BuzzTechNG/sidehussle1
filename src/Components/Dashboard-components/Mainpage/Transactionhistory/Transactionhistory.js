import React, { Component } from "react";
import "./Transactionhistory.css";
import transactionlist from "../Previousjobslist";

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
      <div>
        <div className="container">
          <h1 className="my-5 strong text-center"> Transaction history</h1>
          <div className="row">
            <div className="col-12">
              <table class="table table-bordered table-hover">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th>Date & Time</th>
                    <th>Client Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Location</th>
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
