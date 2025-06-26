import React from "react";
import { motion } from 'framer-motion';
import Heading from "../Components/Heading";

// Sponsor data
const sponsors = [
  { name: "SeeedStudio", logo: "/seeedStudio.png" },
];

export default function Sponsors() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const sponsorVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  // Individual sponsor logo
  const SponsorLogo = ({ sponsor }) => {
    return (
      <motion.div
        className="w-40 h-28 md:w-56 md:h-40 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center group hover:bg-white/20 transition-all duration-300 cursor-pointer overflow-hidden"
        variants={sponsorVariants}
        whileHover={{ 
          scale: 1.05,
          borderColor: "rgba(255, 255, 255, 0.4)"
        }}
      >
        <img 
          src={sponsor.logo} 
          alt={sponsor.name}
          className="w-full h-full object-contain"
        />
      </motion.div>
    );
  };

  return (
    <motion.section
      id="sponsors"
      className="relative px-4 text-white bg-c1 font-jost"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <Heading title="SPONSORS" />
      </motion.div>

      <motion.div 
        className="max-w-5xl mx-auto group bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-8 md:p-10 relative z-10 mb-48"
        variants={itemVariants}
      >
        {/* Sponsors Grid */}
        <motion.div 
          className={`grid gap-6 md:gap-8 justify-items-center ${
            sponsors.length === 1 
              ? 'grid-cols-1 place-items-center' 
              : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          }`}
          variants={containerVariants}
        >
          {sponsors.map((sponsor, index) => (
            <SponsorLogo key={index} sponsor={sponsor} />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
