
// HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-50 text-center py-20">
      <h1 className="text-4xl font-bold mb-2">Kelly Adams</h1>
      <p className="text-lg text-gray-600 mb-4">I'm a professional illustrator from San Francisco</p>
      <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600">
        ABOUT ME
      </button>
    </section>
  );
};

export default HeroSection;
