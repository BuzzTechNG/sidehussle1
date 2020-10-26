import React from 'react'
import MarketItemCard from './MarketItemCard'

function MarketView() {
    return (
        <div className="full-width">
            <div className="container-m">
            <div className="page-title">Store</div>
                <div className="row market p-3 custom-shadow">

                <div className="filter-view col-3 bdr "></div>
                    <div className="grid-view col">
                        {
                            Array(12).fill(1,0,12).map((item,index)=>(
                                <div className="market-card" key={`market-item-${index}`}>
                                    <MarketItemCard/>
                                </div>
                                ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketView
