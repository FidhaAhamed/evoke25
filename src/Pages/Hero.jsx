import React from 'react';
import { motion } from 'framer-motion';
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

      {/* Logo + Button with animation */}
      <motion.div
        className="z-10 flex flex-col gap-4 absolute top-48 lg:left-20"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={evokeLogo}
          alt="Evoke Logo"
          className="w-64 lg:w-80"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.a 
          href="https://unstop.com/p/evoke-25-a-project-expo-mace-iot-club-iedc-mace-1501422"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#112DBC] hover:bg-[#2238A4] px-6 py-3 rounded-lg font-medium text-sm shadow-md w-fit self-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          REGISTER NOW
        </motion.a>
      </motion.div>

      {/* Robot with animation */}
      <motion.img
        src={robot}
        alt="Robot"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 md:w-72 lg:w-[40rem] object-contain z-10"
        />
    </div>
  );
};

export default Hero;