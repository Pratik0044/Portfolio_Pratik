// Navbar.jsx
import React from 'react';
import {useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const handleItemClick = (id) =>{
    navigate(`/details/${id}`)
  }
  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Pratik Vishwakarma</h1>
        <ul className="flex space-x-6 text-gray-700">
          <li className="hover:text-teal-500 cursor-pointer" >Home</li>
          <li className="hover:text-teal-500 cursor-pointer">About</li>
          <li className="text-teal-500 border-b-2 border-teal-500 cursor-pointer">Resume</li>
          <li className="hover:text-teal-500 cursor-pointer">Portfolio</li>
          <li className="hover:text-teal-500 cursor-pointer">Contact</li>
        </ul>
        <div className="flex space-x-4">
          <i className="fab fa-facebook cursor-pointer"></i>
          <i className="fab fa-instagram cursor-pointer"></i>
          <i className="fab fa-linkedin cursor-pointer"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


