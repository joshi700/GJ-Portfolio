// src/components/ProjectCard.js
import React from 'react';
import "../../App.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
