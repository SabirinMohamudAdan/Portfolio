import React, { useState, useEffect } from 'react';
import profileImage from '../assets/siman.jpg'; // Import your image

const Hero = () => {
  const [text, setText] = useState('');
  const words = ['Developer', 'Designer', 'Problem Solver'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setText((prevText) => {
        if (prevText.length === words[index].length) {
          setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
            setText('');
          }, 200); // Delay before starting the next word
          return prevText;
        }
        return words[index].substring(0, prevText.length + 1);
      });
    }, 100); // Typing speed

    return () => clearInterval(typingInterval);
  }, [index]);

  return (
    <section id="home" className="bg-[#2c3e50] text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 ">
            Hi, I'm Sabrin Mohamud
          </h1>
          <p className="text-lg mb-6">
            A passionate{' '}
            <span className="text-[#18bc9c] font-bold animated-text">
              {text}
              <span className="cursor"></span> {/* Blinking cursor */}
            </span>{' '}
            <br />
            building modern and responsive websites.
          </p>
          <a
            href="#projects"
            className="bg-[#18bc9c] text-white px-6 py-3 rounded-lg 
            hover:bg-[#449e8c] mt-20"
          >
            View My Work
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={profileImage} // Use the imported image
            alt="Profile"
            className="rounded-full w-64 h-64 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;