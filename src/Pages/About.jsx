import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">About</h2>
        <p className="text-center text-gray-600 mb-10">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src="https://via.placeholder.com/300"
            alt="Profile"
            className="rounded-lg shadow-lg w-72 h-72 object-cover"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">UI/UX Designer & Web Developer</h3>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <p><span className="font-semibold">Birthday:</span> 1 May 1995</p>
              <p><span className="font-semibold">Age:</span> 30</p>
              <p><span className="font-semibold">Website:</span> www.example.com</p>
              <p><span className="font-semibold">Degree:</span> Master</p>
              <p><span className="font-semibold">Phone:</span> +123 456 7890</p>
              <p><span className="font-semibold">Email:</span> email@example.com</p>
              <p><span className="font-semibold">City:</span> New York, USA</p>
              <p><span className="font-semibold">Freelance:</span> Available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
