import React from 'react';
import { MapPin, Phone, Mail, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import evokeLogo from "/evoke logo.png"

const Footer = () => {
  const eventLeads = [
    {
      name: "Sarah Johnson",
      phone: "+1 (555) 123-4567"
    },
    {
      name: "Mike Chen",
      phone: "+1 (555) 234-5678"
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Event Logo Section */}
        <div className="text-center mb-16">
          <img 
            src={evokeLogo} 
            alt="EVOKE" 
            className="h-20 w-auto object-contain mx-auto"
          />
        </div>

        {/* 2 Column Grid - Location & Contact */}
        <div className="grid md:grid-cols-2 gap-32 mb-16">
          
          {/* Location Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white tracking-wide">LOCATION</h3>
            
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
              <p className="text-white text-lg">Mar Athanasius College of Engineering, Kothamangalam</p>
            </div>

            {/* Map */}
            <div className="bg-gray-800 rounded-xl p-6 h-56 flex items-center justify-center border border-gray-700 shadow-lg">
              <MapPin className="w-16 h-16 text-blue-400" />
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white tracking-wide text-center">CONTACT US</h3>
            
            <div className="space-y-6">
            {eventLeads.map((lead, index) => (
                <div key={index} className="text-center space-y-3">
                <h4 className="font-bold text-white text-lg">{lead.name}</h4>
                <div className="flex justify-center items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <a 
                    href={`tel:${lead.phone}`}
                    className="text-gray-200 hover:text-blue-400 transition-colors font-medium"
                    >
                    {lead.phone}
                    </a>
                </div>
                </div>
            ))}
            </div>
          </div>
        </div>

        {/* Social Media Section - Below Grid */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-white tracking-wide">CONNECT WITH US</h3>
          
          <p className="text-gray-300 text-base">
            Follow us for the latest updates and announcements
          </p>
          
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:bg-blue-600 hover:border-blue-600 hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 EVOKE. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;