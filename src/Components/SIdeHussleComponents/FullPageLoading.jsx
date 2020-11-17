import React from "react";
import LottieCircleLoading from "./LottieCircleLoading";

function FullPageLoading({ loading, message }) {
  if(!loading) return null
  return (
    <div
      className="position-fixed d-flex column justify-content-center align-items-center"
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: "999999",
        background: "var(--dark-primary)",
        opacity: "0.8",
        flexDirection: "column",
        top:"0"
      }}
    >
        <div className="text-center">
      <LottieCircleLoading />
      <div className="title2"> {message}</div>
        </div>
    </div>
  );
}

export default FullPageLoading;
