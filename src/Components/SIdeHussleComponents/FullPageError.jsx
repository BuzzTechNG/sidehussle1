import React from 'react'
import Lottie from '../../lottie'

function FullPageError({show,message}) {
    if(!show) return null
    return (
      <div
        className="position-fixed d-flex column justify-content-center align-items-center"
        style={{
          width: "100vw",
          height: "100vh",
          zIndex: "9999999",
          background: "var(--dark-primary)",
          opacity: "0.8",
          flexDirection: "column",
          top:"0"
        }}
      >
          <div className="text-center">
          <Lottie
              style={{
                width: "170px",
                height: "170px",
                transform: "scale(1.5)",
                margin: "auto auto",
              }}
              animation="/failed.json"
            />      <div className="title2"> {message}</div>
          </div>
      </div>
    )
}

export default FullPageError
