import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="ProjectCard">
      <img src={require(`../images/${project.image}`).default} alt={project.title} />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
