import React from "react";
import { useState } from "react";

function Report() {
  const [issueCategory, setIssueCategory] = useState("");
  const [issue, setIssue] = useState("");
  return (
    <div className="full-width">
      <div className="container-m">
        <div className="page-title">Report</div>
        <div className="mcard p-3 px-5 job-form mt-3 mt-md-5">
          <div>
            <div>Category</div>
            <select
              className="px-1"
              onChange={(e) => setIssueCategory(e.target.value)}
              value={issueCategory}
              name=""
              id=""
            >
              <option value="General" className="my-3">General</option>
              <option value="Dispute">Dispute</option>
            </select>
          </div>
          
          { <div className={issueCategory === "Dispute" ? "my-3" : ""} style={{opacity:issueCategory === "Dispute" ? '1.0' : '0.0', height:issueCategory === "Dispute" ? '90px' : '0px',transition:"height 200ms"}}>
            <div>Job ID</div>
            <div className="hint">
              Kindly enter the "Jod ID" causing the dispute
            </div>
            <input
              onChange={(e) => setIssue(e.target.value)}
              value={issue}
              name=""
              id=""
              rows="8"
            ></input>
          </div>}
          <div className="my-3">
            <div>Issue</div>
            <div className="hint">
              Kindly state the issue you are facing in details
            </div>
            <textarea
              onChange={(e) => setIssue(e.target.value)}
              value={issue}
              name=""
              id=""
              rows="8"
            ></textarea>
          </div>
          <div className="d-flex justify-content-end">
              <div className="action-btn" style={{fontSize:"15px"}}>Submit Report <div className="fa fa-check"></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
