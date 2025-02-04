import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2c3e50] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy;Sabrin Mohamud. All rights reserved.</p>
        <div className="mt-4">
          <a href="#home" className="mx-2 hover:text-gray-400">Home</a>
          <a href="#about" className="mx-2 hover:text-gray-400">About</a>
          <a href="#projects" className="mx-2 hover:text-gray-400">Projects</a>
          <a href="#contact" className="mx-2 hover:text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;