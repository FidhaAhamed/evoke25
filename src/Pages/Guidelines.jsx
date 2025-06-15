import React, { useState } from 'react';
import { FileText, Wrench, DollarSign, CheckCircle,  Upload, Lightbulb } from 'lucide-react';
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
      description: "Submit via Unstop Link provided by the organizers.",
      icon: Upload,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 4,
      title: "Selection Fee",
      description: "A fee of ₹200 applies only if your entry is selected to the final round.",
      icon: DollarSign,
      color: "from-blue-600 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-c1 text-white font-jost">
      <div className="relative z-10 container mx-auto px-4">
        <Heading title = "SUBMISSION GUIDELINES"/>
        {/* Guidelines Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {guidelineItems.map((item, index) => {
            const IconComponent = item.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
                
                <div className="relative p-8">
                  {/* Icon and Title */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {item.description}
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

export default Guidelines;