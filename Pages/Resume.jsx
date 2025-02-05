
// Resume.jsx
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Resume = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-2">Resume</h2>
        <p className="text-center text-gray-500 mb-8">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Summary</h3>
            <h4 className="text-lg font-semibold">BRANDON JOHNSON</h4>
            <p className="italic text-gray-600">
              Innovative and deadline-driven Graphic Designer with 3+ years of experience designing
              and developing user-centered digital/print marketing material from initial concept to final,
              polished deliverable.
            </p>
            <ul className="mt-4 text-gray-700 space-y-1">
              <li>Portland par 127, Orlando, FL</li>
              <li>(123) 456-7891</li>
              <li>alice.barkley@example.com</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">Education</h3>
            <div>
              <h4 className="font-semibold">MASTER OF FINE ARTS & GRAPHIC DESIGN</h4>
              <p>2015 - 2016 | Rochester Institute of Technology, Rochester, NY</p>
              <p className="text-gray-600">
                Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h4>
              <p>2010 - 2014</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Professional Experience</h3>
            <div>
              <h4 className="font-semibold">SENIOR GRAPHIC DESIGN SPECIALIST</h4>
              <p>2019 - Present | Experion, New York, NY</p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Lead in the design, development, and implementation of communication materials</li>
                <li>Delegate tasks to 7 team members</li>
                <li>Supervise assessment of graphic materials for quality</li>
                <li>Oversee project budgets ranging from $2,000 - $25,000</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">GRAPHIC DESIGN SPECIALIST</h4>
              <p>2017 - 2018 | Stepping Stone Advertising, New York, NY</p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Developed marketing programs (logos, brochures, infographics)</li>
                <li>Presentations and advertisements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
