// src/pages/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from './ProjectCard';

const projects = [
  { id: 1, title: 'CheckFree RXP', description: 'Integrating Fiservs Bill Pay solution - CheckFree RXP to Stifels Online Banking Platform' },
  { id: 2, title: 'The Vault ', description: 'Central Business Intelligence and Service Delivery Framework' },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div>
    <section>
    <Container fluid className="home-section" id="home">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map(project => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
          </Container>
          </section>    
    </div>
  );
};

export default Projects;
