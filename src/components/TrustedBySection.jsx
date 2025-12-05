import React from 'react';
import Brands from './Brands';

const TrustedBySection = () => {


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
       
        <h3 className="text-lg md:text-xl font-semibold text-gray-600 tracking-wider uppercase mb-12">
          Trusted by +10,000 Consultants & Organisations
        </h3>

          <Brands />
      </div>
    </section>
  );
};

export default TrustedBySection;