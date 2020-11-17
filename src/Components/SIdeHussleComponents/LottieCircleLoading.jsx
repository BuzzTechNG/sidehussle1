import React from 'react'
import Lottie from '../../lottie'

function LottieCircleLoading() {
    return (
        <Lottie
            style={{
              width: "120px",
              height: "120px",
              transform: "scale(1)",
              margin: "auto auto",
            }}
            animation="/loading3.json"
          />
    )
}

export default LottieCircleLoading
