import React from 'react';
import { MapPin, Phone, Mail, Instagram, Linkedin, Youtube, Globe } from 'lucide-react';
import evokeLogo from "/evoke logo.png"

const Footer = () => {
  const eventLeads = [
    {
      name: "Anuja C Suresh",
      phone: "+91 9495879375"
    },
    {
      name: "Abhinand S R",
      phone: "+91 9400240110"
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/evokemace/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/maceiotclub/posts/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@iotclubmace", label: "Youtube" },
    { icon: Globe, href: "https://maceiot.macehub.in/", label: "Globe" }
  ];

  return (
    <footer className="bg-c1 text-white">
      <div className='group bg-white/5 backdrop-blur-sm'>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 ">
        
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
          <div className="flex flex-col items-center space-y-8">
            <h3 className="text-2xl font-bold text-white tracking-wide text-center">LOCATION</h3>

            <div className="flex items-start gap-4 justify-center text-center">
              <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
              <p className="text-white text-lg max-w-md">
                Mar Athanasius College of Engineering, Kothamangalam
              </p>
            </div>

            {/* Map */}
            <div className="w-full rounded-xl overflow-hidden border border-gray-700 shadow-lg h-56">
              <iframe
                title="EVOKE Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.5419517885586!2d76.61676431430614!3d10.053937092486465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e6154a2133e5%3A0x2c26b2d532bb30ea!2sMar%20Athanasius%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1718625604303!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white tracking-wide text-center">CONTACT US</h3>
            
            <div className="space-y-6">
            {eventLeads.map((lead, index) => (
                <div key={index} className="text-center space-y-3">
                <h4 className="font-medium text-white text-lg">{lead.name}</h4>
                <div className="flex justify-center items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <a 
                    href={`tel:${lead.phone}`}
                    className="text-gray-200 hover:text-blue-400 transition-colors font-medium  font-mono"
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
          
          <p className="text-white text-base">
            Follow us for the latest updates and announcements
          </p>
          
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank" 
                rel="noopener noreferrer" 
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
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 EVOKE. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;