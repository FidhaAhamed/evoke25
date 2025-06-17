import React, { useState } from 'react';
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
      answer: "Initial registration is free. A fee of ₹200 per team is applicable if your project gets selected.",
      icon: CreditCard
    },
    {
      id: 7,
      question: "Will food be provided?",
      answer: "Yes, lunch will be provided on the day of the expo.",
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

  return (
    <div className="min-h-screen bg-c1 text-white font-jost">
      <div className="relative z-10 container mx-auto px-4">
        <Heading title = "FREQUENTLY ASKED QUESTIONS" />

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4 mb-40">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            const isOpen = openIndex === index;
            
            return (
              <div
                key={faq.id}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800/10 to-indigo-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                
                <button
                  onClick={() => toggleFAQ(index)}
                  className="relative w-full p-6 text-left  rounded-2xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180 bg-blue-500/30' : 'group-hover:bg-white/20'}`}>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-white" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="ml-16 pt-2">
                      <div className="h-px bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-transparent mb-4"></div>
                      <p className="text-white/90 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default FAQ;