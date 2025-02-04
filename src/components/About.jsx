import React from 'react';
import aboutImage from '../assets/siman.jpg'; // Import your image

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 sm:ml-52 ml-0
         text-[#18bc9c] ">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image on the left */}
          <div className="md:w-1/2">
            <img
              src={aboutImage} // Use the imported image
              alt="About Me"
              className=" shadow-lg rounded-full w-64 h-64 mx-auto"
            />
          </div>
          {/* Text on the right */}
          <div className="md:w-1/2">
            <p className="text-lg">
              I'm a full-stack developer with expertise in React.js, Node.js,Php&mysql, and modern web technologies.
              I love building user-friendly applications and solving complex problems. With a strong foundation
              in both front-end and back-end development, I strive to create seamless and efficient digital
              experiences.
            </p>
            <p className="text-lg mt-4">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects,
              and sharing my knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;