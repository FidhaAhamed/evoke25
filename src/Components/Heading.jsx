import React from 'react';

const Heading = ({ title }) => {
  return (
    <div className="my-6 md:my-10 text-center">
      <h2 className="text-4xl md:text-6xl font-bold font-jost">{title}</h2>
    </div>
  );
};

export default Heading;
