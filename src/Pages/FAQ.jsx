import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Users, Wrench, FileText, Award, CreditCard, Utensils, Target } from 'lucide-react';
import Heading from '../Components/Heading';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Who can participate in Evoke 2025?",
      answer: "Open to all students currently pursuing their studies or who have graduated in the year 2025, from any branch or institution. Individual or team (up to 4 members) participation is allowed.",
      icon: Users
    },
    {
      id: 2,
      question: "Is a hardware prototype mandatory?",
      answer: "Yes, selected teams must demonstrate a working hardware prototype at the expo.",
      icon: Wrench
    },
    {
      id: 3,
      question: "Can I submit an old or ongoing project?",
      answer: "Yes, as long as it's your original work.",
      icon: FileText
    },
    {
      id: 4,
      question: "What should the project submission include?",
      answer: "Title, domain, abstract, problem statement, solution, innovation/impact, and optional images/videos.",
      icon: FileText
    },
    {
      id: 5,
      question: "Will I receive a certificate?",
      answer: "Yes, all selected participants will receive certificates. Winners will get prizes and special recognition.",
      icon: Award
    },
    {
      id: 6,
      question: "Is there a registration fee?",
      answer: "Initial registration is free. A fee of ₹300 per team is applicable if your project gets selected.",
      icon: CreditCard
    },
    {
      id: 7,
      question: "Will food be provided?",
      answer: "Yes, Refreshments will be provided on the day of the expo.",
      icon: Utensils
    },
    {
      id: 8,
      question: "Does my project need to follow any specific theme?",
      answer: "Yes, your project should fall under any one of our specified tracks.",
      icon: Target
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      y: 30,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const answerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      marginTop: 0
    },
    visible: {
      opacity: 1,
      height: "auto",
      marginTop: "1rem",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      marginTop: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-c1 text-white font-jost" 
      id='faq'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="relative z-10 container mx-auto px-4">
        <motion.div variants={itemVariants}>
          <Heading title="FREQUENTLY ASKED QUESTIONS" />
        </motion.div>

        {/* FAQ Items */}
        <motion.div 
          className="max-w-4xl mx-auto space-y-4 mb-40"
          variants={containerVariants}
        >
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={faq.id}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                layout
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800/10 to-indigo-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="relative w-full p-6 text-left rounded-2xl"
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          initial={{ scale: 0, rotate: -90 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: false }}
                          transition={{ delay: index * 0.05 + 0.3, duration: 0.4 }}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>
                      <motion.h3 
                        className="text-lg md:text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.05 + 0.4, duration: 0.4 }}
                      >
                        {faq.question}
                      </motion.h3>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <motion.div 
                        className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180 bg-blue-500/30' : 'group-hover:bg-white/20'}`}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={answerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="ml-16 pt-2">
                          <div className="h-px bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-transparent mb-4"></div>
                          <p className="text-white/90 leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQ;