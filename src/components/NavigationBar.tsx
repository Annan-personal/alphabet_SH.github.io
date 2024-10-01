import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <img src="LOGO.jpg" alt="Company Logo" className="h-12 w-auto" />
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-800 hover:text-blue-500">Home</a></li>
          <li><a href="#" className="text-gray-800 hover:text-blue-500">Services</a></li>
          <li><a href="#" className="text-gray-800 hover:text-blue-500">About</a></li>
          <li><a href="#" className="text-gray-800 hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;