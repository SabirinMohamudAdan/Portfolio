import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'A responsive e-commerce website built with React and Node.js.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    title: 'Project 2',
    description: 'A task  management  with real-time system using php&mysql.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <a href={project.link} className="inline-block mt-4 bg-[#18bc9c]
               text-white px-4 py-2 rounded-lg hover:bg-[#449e8c]">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;