import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
  // Example project data
  const projects = [
    {
      id: 1,
      title: 'Grocery Delivery Service',
      description: 'Developed a full-stack application for a grocery delivery service, providing a seamless user experience.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      image: 'grocery-delivery.png',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Plantify using Deep Learning',
      description: 'Created a deep learning model to detect and classify plant diseases from leaf images.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Flask'],
      image: 'plantify.png',
      demoLink: '#',
      githubLink: '#'
    }
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="Projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
