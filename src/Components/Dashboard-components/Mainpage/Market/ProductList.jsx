import React from 'react'


function ProductCard(){
    return(
        <div className="product-card subtitle2">
              <div className="selectior"> <input type="checkbox"/> </div>
              <div className="avatar"></div>
              <div className="product-name">I'm a product</div>
              <div className="sku">44545454414545</div>
              <div className="price">N85</div>
              <div className="inventory">In stock</div>
              <div className="menu d-flex justify-content-end"></div>  
        </div>
    )
}
function ProductHeader(){
    return(
        <div className="product-card subtitle3" style={{paddingTop:"3px",paddingBottom:"3px"}}>
              <div className="selector"> </div>
              <div className="avatar"></div>
              <div className="product-name">Name</div>
              <div className="sku">ID</div>
              <div className="price">Price</div>
              <div className="inventory">INVENTORY</div>
              <div className="menu d-flex justify-content-end"></div>  
        </div>
    )
}
function ProductList() {
    return (
        <div className="full-width">
            <div className="container-v">
             <div className="d-flex justify-content-between align-items-center">
              <div className="page-title">
                  Products
                  </div>  
                  <div className="action-btn">
                    New Product
                  </div>
             </div>  
            <div className="custom-shadow no-shadow" >
            <ProductHeader/>
            {Array(10).fill(0,1,10).map((item,index)=>(
               <div key={index}>
                   <ProductCard/>
                   <div className="line"></div>
               </div>
            ))}
        </div>
            </div>
        </div>
    )
}

export default ProductList
