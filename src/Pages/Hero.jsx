import React from 'react';
import bgImage from '/hero-bg.png';
import robot from '/robot.png';
import evokeLogo from '/evoke logo.png';

const Hero = () => {
  return (
    <div
      id='home'
      className="min-h-screen bg-c1 text-white relative overflow-hidden px-6 md:px-10 font-jost flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      {/* Logo + Button */}
      <div
        className="z-10 flex flex-col gap-4 absolute top-48 lg:left-20">
        <img
          src={evokeLogo}
          alt="Evoke Logo"
          className="w-64 lg:w-80"
        />
        <button className="bg-[#112DBC] hover:bg-[#2238A4] px-6 py-3 rounded-lg font-medium text-sm shadow-md w-fit self-center">
          REGISTER NOW
        </button>
      </div>

      {/* Robot at bottom center */}
      <img
        src={robot}
        alt="Robot"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 md:w-72 lg:w-[40rem] object-contain z-10"
      />
    </div>
  );
};

export default Hero;
