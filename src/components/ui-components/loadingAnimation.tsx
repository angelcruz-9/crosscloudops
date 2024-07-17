import React from 'react';

const LoadingAnimation: React.FC = () => {
  return (
    <div role="status" className='loading-container'>
      <div className="loading-dot"></div>
      <div className="loading-dot"></div>
      <div className="loading-dot"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingAnimation;
