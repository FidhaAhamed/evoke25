import React from 'react';
import robot from '/robot.png';
import evokeLogo from '/evoke logo.png';

const Hero = () => {
  return (
    <div className="min-h-screen bg-c1 text-white relative overflow-hidden flex items-end justify-center px-6 md:px-10 font-jost">

      {/* Content beside Robot */}
      <div className="w-full h-full flex flex-col lg:flex-row relative z-10">

        {/* Left Content */}
        <div className="lg:w-1/4 flex flex-col justify-center items-start gap-10 mb-10 lg:mb-0">
          {/* Logo */}
          <img src={evokeLogo} alt="Evoke Logo" className="w-52 md:w-64 lg:w-80 mx-auto lg:mx-0" />

          {/* Description */}
          <p className="text-sm leading-relaxed text-white text-justify max-w-[90%] md:max-w-[80%] lg:max-w-full mx-auto lg:mx-0">
            The MACE IoT Club in collaboration with IEDC MACE proudly presents Evoke 2025 – the flagship technical project expo and competition set to take place on 2nd August 2025. This vibrant event serves as a launchpad for young innovators to showcase functional prototypes, hardware builds, and IoT-based system-level solutions that tackle real-world problems.
          </p>

          {/* Button */}
          <button className="bg-[#112DBC] hover:bg-[#2238A4] px-6 py-3 rounded-md font-medium text-sm shadow-md w-fit mx-auto lg:mx-0">
            REGISTER NOW
          </button>
        </div>

        {/* Center Robot */}
        <div className="lg:w-2/4 flex justify-center items-end mt-6 lg:mt-0">
          <img
            src={robot}
            alt="robot"
            className="w-60 md:w-72 lg:w-[40rem] object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/4 flex justify-end items-end pb-10">
          <div className="max-w-[90%] md:max-w-[80%] lg:max-w-full text-sm leading-relaxed text-white text-justify mx-auto lg:mx-0">
            Bringing together a diverse community of tech enthusiasts, engineers, and creative problem-solvers, Evoke highlights the spirit of innovation that defines MACE. Participants will present projects ranging from academic explorations to independent innovations, with live demonstrations of smart devices and embedded systems.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
