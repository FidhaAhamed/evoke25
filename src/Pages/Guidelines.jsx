import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Wrench, DollarSign, CheckCircle, Upload, Lightbulb } from 'lucide-react';
import Heading from '../Components/Heading';

const Guidelines = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const guidelineItems = [
    {
      id: 1,
      title: "Submission Format",
      description: "Submit a PPT (template provided) covering the problem, solution, and other key aspects.",
      icon: FileText,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 2,
      title: "Hardware Prototype",
      description: "A working hardware model is mandatory for entry into the final round.",
      icon: Wrench,
      color: "from-indigo-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Submission Portal",
      description: "Submit via Unstop Link provided.",
      icon: Upload,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 4,
      title: "Selection Fee",
      description: "A fee of ₹300 applies only if your entry is selected to the final round.",
      icon: DollarSign,
      color: "from-blue-600 to-indigo-600"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-c1 text-white font-jost" 
      id='guidelines'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="relative z-10 container mx-auto px-4">
        <motion.div variants={itemVariants}>
          <Heading title="SUBMISSION GUIDELINES"/>
        </motion.div>
        
        {/* Guidelines Grid */}
        <motion.div 
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {guidelineItems.map((item, index) => {
            const IconComponent = item.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
                variants={itemVariants}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
                
                <div className="relative p-8">
                  {/* Icon and Title */}
                  <div className="flex items-start space-x-4 mb-6">
                    <motion.div 
                      className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: false }}
                      transition={{ 
                        delay: index * 0.15 + 0.5,
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.15 + 0.6, duration: 0.5 }}
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p 
                        className="text-white/80 leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.15 + 0.7, duration: 0.5 }}
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>        
      </div>
    </motion.div>
  );
};

export default Guidelines;