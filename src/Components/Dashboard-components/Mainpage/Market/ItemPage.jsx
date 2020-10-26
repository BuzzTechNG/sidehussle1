import React from "react";

function ItemPage() {
  return (
    <div className="full-width">
      <div className="container-m "> 
      <div className="page-title">Item page</div>
      <div className="mt-3 row item-page custom-shadow p-4">
        <div className="col-6 col-xl-12">
          <div style={{ height: "400px",width:"300px" }}>
            <img
              src={"https://picsum.photos/200/300"}
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </div>
        <div className="col ">
          <div className="title1">Full item title</div>
          <div className="title3">Price</div>
          <div className="subtitle1">category</div>

          <div>
            <p>Color</p>
            <div className="d-flex">
              <div
                className="color-avatar"
                style={{ backgroundColor: "blue" }}
              ></div>
              <div
                className="color-avatar"
                style={{ backgroundColor: "red" }}
              ></div>
              <div
                className="color-avatar"
                style={{ backgroundColor: "pink" }}
              ></div>
              <div
                className="color-avatar"
                style={{ backgroundColor: "yellow" }}
              ></div>
            </div>
          </div>
          <div className="d-flex my-2">
            {/* Size */}
            <div
              className="mcard d-flex p-2 mr-2 flex-wrap"
              style={{ maxWidth: "max-content" }}
            >
              <div className="subtitle2">Sizes</div>
              <select name="" id=""></select>
            </div>
            {/* Quantity */}
            <div
              style={{
                border: "0.51px solid",
                maxWidth: "max-content",
                padding: "5px 0",
              }}
              className="subtitle1 d-flex align-items-center"
            >
              <i className="fa fa-minus px-2"></i>
              <div>3</div>
              <i className="fa fa-plus px-2"></i>
            </div>
            {/* Add to car */}
            <div className="action-btn ml-3">Add to cart</div>
          </div>

          <div className="subtitle1">DESCRIPTION</div>
          <div className="subtitle3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            perspiciatis nihil, minima delectus quaerat ipsa sit voluptatum
            temporibus obcaecati. Dolore a animi recusandae fugiat, repellat
            quia, et ad nobis reprehenderit dolorum debitis nulla itaque illo
            harum maxime labore culpa, fugit numquam voluptatem! Veniam totam
            quas quasi. Adipisci eligendi impedit reprehenderit nemo incidunt
            nobis necessitatibus porro cupiditate error! Laborum nulla vel
            reprehenderit sint autem nisi unde quisquam necessitatibus sit
            laboriosam, id atque corrupti commodi minima enim est dolorum?
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ItemPage;
