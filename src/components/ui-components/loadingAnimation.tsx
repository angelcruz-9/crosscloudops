import React from "react";

const LoadingAnimation: React.FC = () => {
  return (
    <div id="container" className="h-screen flex flex-col justify-center items-center">
      <label className="loading-title">Loading ...</label>
      <span className="loading-circle sp1">
        <span className="loading-circle sp2">
          <span className="loading-circle sp3"></span>
        </span>
      </span>
    </div>
  );
};

export default LoadingAnimation;
