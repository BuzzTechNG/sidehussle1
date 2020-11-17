import React from "react";
import { useHistory } from "react-router-dom";

function CollectionCard({history}) {
  return (
    <div
        onClick={()=>history.push("/collection")}
      className="column justify-content-end m-4 card-rounded"
      style={{
        width: "350px",
        height: "250px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src="https://cdn.hipwallpaper.com/i/19/88/YtwHJA.jpg"
        style={{
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          position: "absolute",
        }}
        alt=""
      />
      <div
        className="text-light"
        style={{ bottom: "10px", left: "10px", position: "absolute" }}
      >
        Collection name
      </div>
    </div>
  );
}

function CollectionList() {
    const history = useHistory()
  return (
    <div className="full-width">
      <div className="container-lg">
        <div className="row justify-content-between align-items-center">
          <div className="page-title">Collections</div>
          <div onClick={()=>history.push("/collection")} className="action-btn btn-rounded my-auto" style={{height:"max-content"}}>
            {" "}
            <i className="fa fa-plus mr-2"></i> New Collection
          </div>
        </div>
        <div className="row">
          {Array(6)
            .fill(1, 0, 5)
            .map((value, index) => (
              <div key={`collect-${index}`}>
                <CollectionCard history={history} />
              </div>
            ))}
          <div
            className="row justify-content-center align-items-center custom-shadow2 m-4 card-rounded"
            style={{
              width: "350px",
              height: "250px",
              position: "relative",
              overflow: "hidden",
            }}
          >
              <div className="col text-center text-primary">

            <i className="fa fa-plus text-custom mr-2"></i>
            New Collection
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionList;
