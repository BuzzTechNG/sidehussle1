import React from "react";

function MarketItemCard() {
  return (
    <>
      <div className="img-view">
        <img src={"https://picsum.photos/200/300"} width="100%" height="100%" alt="" />
      </div>
      <div className="bottom-container subtitle1 p-2">
      <div className="d-flex justify-content-between">
        <div className="">
          <div className="subtitle2 mb-1">title</div>
          <p className="subtitle3">subtitle</p>
        </div>
        <div>N1200</div>
        </div>
        <div className="bottom-info subtitle2">
        
          <div>color</div>
          <div>size</div>
        </div>
      </div>
    </>
  );
}

export default MarketItemCard;
