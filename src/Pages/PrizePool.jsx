import React from "react";
import { motion } from 'framer-motion';
import Heading from "../Components/Heading";

export default function PrizePool() {
  // Animation variants matching your timeline
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const prizeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const numberVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <motion.section
      id="prizepool"
      className="relative px-4 text-white bg-c1 font-jost"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <Heading title="PRIZE POOL" />
      </motion.div>

      <motion.div 
        className="max-w-5xl mx-auto group bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-12 md:p-16 relative z-10 mb-36"
        variants={itemVariants}
      >
        {/* Prize Pool Display */}
        <motion.div 
          className="text-center"
          variants={prizeVariants}
        >
          {/* Worth Text */}
          <motion.p 
            className="font-csclairemonodrawn text-lg md:text-xl text-white/70 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Prize Pool Worth
          </motion.p>

          {/* Main Prize Amount */}
          <motion.div 
            className="relative"
            variants={numberVariants}
          >
            <motion.h2 
              className="font-csclairemonodrawn text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              ₹1L
            </motion.h2>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-8 h-8 border-2 border-white/30 rounded-full"
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-white/30 rounded-full"
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: -360 }}
              viewport={{ once: false }}
              transition={{ delay: 1, duration: 0.5 }}
            />
          </motion.div>

          {/* Additional Info */}
          <motion.p 
            className="font-jost text-base md:text-lg text-white/60 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Exciting rewards await the most innovative teams
          </motion.p>
        </motion.div>

        {/* Decorative Background Elements */}
        <motion.div 
          className="absolute top-8 left-8 w-16 h-16 border border-white/10 rounded-2xl"
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, rotate: 45 }}
          viewport={{ once: false }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />
        <motion.div 
          className="absolute bottom-8 right-8 w-12 h-12 border border-white/10 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.4, duration: 0.6 }}
        />
      </motion.div>
    </motion.section>
  );
}