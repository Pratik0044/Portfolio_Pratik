
// SkillsSection.jsx
import React from 'react';

const SkillsSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="shadow-lg p-4 rounded-xl bg-gray-50">
            <h3 className="font-semibold text-xl mb-2">Graphic Design</h3>
            <p>Expert in Adobe Photoshop, Illustrator, and InDesign.</p>
          </div>
          <div className="shadow-lg p-4 rounded-xl bg-gray-50">
            <h3 className="font-semibold text-xl mb-2">Web Design</h3>
            <p>Proficient in creating user-friendly web interfaces with Figma.</p>
          </div>
          <div className="shadow-lg p-4 rounded-xl bg-gray-50">
            <h3 className="font-semibold text-xl mb-2">Illustration</h3>
            <p>Creating compelling illustrations for print and digital media.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
