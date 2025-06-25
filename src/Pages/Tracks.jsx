import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Brain, ChevronRight, Sparkles } from 'lucide-react';
import Heading from '../Components/Heading';

export default function Tracks() {
  const [activeTrack, setActiveTrack] = useState(null);

  const tracks = [
    {
      id: 1,
      title: "Sustainable Innovation & Tech",
      icon: Leaf,
      description: "Design projects that focus on building environmentally responsible and economically sustainable solutions. This includes ideas like renewable energy systems, sustainable agriculture, eco-friendly products, or smart waste management tools.",
    },
    {
      id: 2,
      title: "Human-Centered Health & Assistive Design",
      icon: Heart,
      description: "Create solutions that focus on improving health, accessibility, and user well-being. Projects can include assistive technologies, wearable health trackers, mental wellness tools, or personalized healthcare devices designed with the user in mind.",
    },
    {
      id: 3,
      title: "Intelligent Systems & Autonomous Solutions",
      icon: Brain,
      description: "Work on projects that involve smart, autonomous, or self-regulating systems. This track is ideal for those exploring robotics, AI-driven automation, IoT-based monitoring systems, and intelligent devices that reduce human effort and enhance performance.",
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen text-white relative overflow-hidden bg-c1 font-jost"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <Heading title="SCOPES TO EXPLORE"/>
      </motion.div>
      
      <div className="relative z-10 my-6">
        {/* Tracks Grid */}
        <main className="px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {tracks.map((track, index) => {
                const IconComponent = track.icon;
                return (
                  <motion.div
                    key={track.id}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden"
                    variants={itemVariants}
                    onMouseEnter={() => setActiveTrack(track.id)}
                    onMouseLeave={() => setActiveTrack(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative p-8 h-full flex flex-col">
                      {/* Icon */}
                      <motion.div 
                        className="w-16 h-16 rounded-2xl bg-white/10 p-4 mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/20"
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                        viewport={{ once: false }}
                      >
                        <IconComponent className="w-full h-full text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {track.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/70 leading-relaxed mb-6 flex-grow">
                        {track.description}
                      </p>
                    </div>

                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 ">
                      <div className="absolute inset-0 rounded-3xl bg-white/20 p-px">
                        <div className="w-full h-full rounded-3xl bg-white/5 backdrop-blur-sm"></div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}