import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Phone,
  Instagram, Linkedin, Youtube, Globe
} from 'lucide-react';
import evokeLogo from "/evoke logo.png";

const Footer = () => {
  const eventLeads = [
    { name: "Anuja C Suresh", phone: "+91 9495879375" },
    { name: "Abhinand S R", phone: "+91 9400240110" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/evokemace/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/maceiotclub/posts/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@iotclubmace", label: "Youtube" },
    { icon: Globe, href: "https://maceiot.macehub.in/", label: "Website" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay }
    })
  };

  return (
    <footer className="bg-c1 text-white">
      <div className='group bg-white/5 backdrop-blur-sm'>
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Logo */}
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={0}
          >
            <img src={evokeLogo} alt="EVOKE" className="h-20 w-auto mx-auto" />
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-32 mb-16">
            {/* Location */}
            <div className="flex flex-col items-center space-y-8">
              <motion.div
                className="flex flex-col items-center space-y-8"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                custom={0.1}
              >
                <h3 className="text-2xl font-bold">LOCATION</h3>
                <div className="flex items-start gap-4 justify-center text-center">
                  <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                  <p className="text-lg max-w-md text-white">
                    Mar Athanasius College of Engineering, Kothamangalam
                  </p>
                </div>
              </motion.div>

              {/* Map (untouched) */}
              <div className="w-full h-56 rounded-xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300">
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

            {/* Contact */}
            <motion.div
              className="space-y-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              custom={0.3}
            >
              <h3 className="text-2xl font-bold text-center">CONTACT US</h3>
              <div className="space-y-6">
                {eventLeads.map((lead, index) => (
                  <motion.div
                    key={index}
                    className="text-center space-y-3"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    custom={0.4 + index * 0.1}
                  >
                    <h4 className="text-lg font-medium">{lead.name}</h4>
                    <div className="flex justify-center items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <a
                        href={`tel:${lead.phone}`}
                        className="text-gray-200 hover:text-blue-400 font-mono transition-colors"
                      >
                        {lead.phone}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Social Media */}
          <motion.div
            className="text-center space-y-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={0.5}
          >
            <h3 className="text-2xl font-bold">CONNECT WITH US</h3>
            <p className="text-base">Follow us for updates and announcements</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:bg-blue-600 hover:border-blue-600 hover:scale-110 transition-all duration-300 shadow-lg"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  custom={0.5 + index * 0.1}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center">
            <p className="text-gray-400">© 2025 EVOKE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
