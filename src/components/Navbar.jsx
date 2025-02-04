import React, { useState } from 'react';

const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#2c3e50] text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
       
        <a href="#home" className="text-xl font-bold">My Portfolio</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <i className="fa-solid fa-xmark"></i> // Close icon
          ) : (
            <i className="fa-solid fa-bars"></i> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2c3e50] mt-4">
          <ul className="flex flex-col space-y-4 p-4">
            <li><a href="#home" className="hover:text-gray-400" onClick={toggleMobileMenu}>Home</a></li>
            <li><a href="#about" className="hover:text-gray-400" onClick={toggleMobileMenu}>About</a></li>
            <li><a href="#projects" className="hover:text-gray-400" onClick={toggleMobileMenu}>Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-400" onClick={toggleMobileMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;