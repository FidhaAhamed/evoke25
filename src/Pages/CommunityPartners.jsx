import React from "react";
import { motion } from 'framer-motion';
import Heading from "../Components/Heading";

// Sample community partners data - replace with your actual partners
const communityPartners = [
  { name: "LenientTree", logo: "/LENIENT TREE.jpg" },
];

export default function CommunityPartners() {
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

  const partnerVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Partner logo component
  const PartnerLogo = ({ partner }) => {
    return (
      <motion.div
        className="w-40 h-28 md:w-56 md:h-40 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center group hover:bg-white/20 transition-all duration-300 cursor-pointer overflow-hidden"
        variants={partnerVariants}
        whileHover={{ 
            scale: 1.05,
            borderColor: "rgba(255, 255, 255, 0.4)"
        }}
        >
        <img 
            src={partner.logo} 
            alt={partner.name}
            className="w-full h-full object-contain"
        />
        </motion.div>
    );
  };

  return (
    <motion.section
      id="community-partners"
      className="relative px-4 text-white bg-c1 font-jost"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <Heading title="COMMUNITY PARTNERS" />
      </motion.div>

      <motion.div 
        className="max-w-5xl mx-auto group bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-8 md:p-10 relative z-10 mb-48"
        variants={itemVariants}
      >
        {/* Partners Grid */}
        <motion.div 
            className={`grid gap-6 md:gap-8 justify-items-center ${
                communityPartners.length === 1 ? 'grid-cols-1 place-items-center' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            }`}
            variants={containerVariants}
            >
            {communityPartners.map((partner, index) => (
                <PartnerLogo key={index} partner={partner} />
            ))}
        </motion.div>


        
      </motion.div>
    </motion.section>
  );
}