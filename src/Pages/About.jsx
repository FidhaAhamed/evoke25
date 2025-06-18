import React from 'react';
import Heading from '../Components/Heading';

const About = () => {
  return (
    <section id='about' className="bg-c1 text-white py-10 px-6 md:px-20 text-center font-jost">
      
      <Heading title = "ABOUT EVOKE" />

      <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg leading-relaxed text-justify">
        <p>
          The MACE IoT Club in collaboration with IEDC MACE proudly presents Evoke 2025 – the flagship Technical Project Expo and Competition set to take place on 2nd August 2025. This vibrant event serves as a launchpad for young innovators to showcase functional prototypes, hardware builds, and IoT-based system-level solutions that tackle real-world problems.
        </p>

        <p>
          Bringing together a diverse community of tech enthusiasts, engineers, and creative problem-solvers, Evoke highlights the spirit of innovation that defines MACE. Participants will present projects ranging from academic explorations to independent innovations, with live demonstrations of smart devices and embedded systems.
        </p>

        <p>
          A panel of experienced faculty and domain experts will evaluate the projects, recognizing those with exceptional impact and innovation potential. More than just a competition, Evoke 2025 fosters collaboration, peer learning, and a spirit of entrepreneurship.
        </p>
      </div>
    </section>
  );
};

export default About;
