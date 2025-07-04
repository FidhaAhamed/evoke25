import React from "react";
import { motion } from 'framer-motion';
import Heading from "../Components/Heading";

const events = [
  { date: "June 27", title: "Website Live and Registrations Open" },
  { date: "July 21", title: "Registrations Close" },
  { date: "July 26", title: "Releasing Shortlisted Teams" },
  { date: "August 2", title: "Project Expo and Winners Announcement" },
];

export default function Timeline() {
  // Animation variants
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

  const lineVariants = {
    hidden: { 
      scaleY: 0,
      opacity: 0 
    },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const dotVariants = {
    hidden: { 
      scale: 0,
      opacity: 0 
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      id="timeline"
      className="relative px-4 text-white bg-c1 font-jost"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <Heading title="TIMELINE" />
      </motion.div>

      <motion.div 
        className="max-w-5xl mx-auto group bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-10 relative z-10 mb-36"
        variants={itemVariants}
      >
        {/* Vertical line */}
        <motion.div 
          className="absolute top-10 left-1/2 transform -translate-x-1/2 h-[calc(100%-5rem)] w-0.5 bg-white z-0 origin-top"
          variants={lineVariants}
        />

        <motion.div 
          className="grid grid-cols-3 gap-y-16 items-center relative z-10"
          variants={containerVariants}
        >
          {events.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <React.Fragment key={index}>
                {/* Left column */}
                <motion.div 
                  className={`${isLeft ? "text-right" : ""}`}
                  variants={itemVariants}
                >
                  {isLeft && (
                    <>
                      <motion.h3 
                        className="font-bold font-csclairemonodrawn text-lg md:text-2xl"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                      >
                        {event.date}
                      </motion.h3>
                      <motion.p 
                        className="font-csclairemonodrawn text-base md:text-xl font-light"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
                      >
                        {event.title}
                      </motion.p>
                    </>
                  )}
                </motion.div>

                {/* Center Dot */}
                <motion.div 
                  className="flex items-center justify-center"
                  variants={dotVariants}
                >
                  <div className="relative w-8 h-8">
                    <div className="absolute w-5 h-5 rounded-full border border-white top-1.5 left-1.5" />
                    <div className="w-4 h-4 bg-white rounded-full border-2 border-black absolute top-2 left-2 z-10" />
                  </div>
                </motion.div>

                {/* Right column */}
                <motion.div 
                  className={` ${!isLeft ? "text-left" : ""}`}
                  variants={itemVariants}
                >
                  {!isLeft && (
                    <>
                      <motion.h3 
                        className="font-bold font-csclairemonodrawn text-lg md:text-2xl"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                      >
                        {event.date}
                      </motion.h3>
                      <motion.p 
                        className="font-csclairemonodrawn text-base md:text-xl font-light"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
                      >
                        {event.title}
                      </motion.p>
                    </>
                  )}
                </motion.div>
              </React.Fragment>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}