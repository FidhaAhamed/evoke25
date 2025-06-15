import React from 'react';

const Gradient = () => {
  return (
    <div
      className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none z-0"
      style={{
        background: `radial-gradient(circle, 
          rgba(90, 11, 243, 0.5) 0%, 
          rgba(255, 255, 255, 1) 13%, 
          rgba(47, 0, 255, 0) 100%)`,
      }}
    ></div>
  );
};

export default Gradient;
