// src/pages/ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const projects = [
  { id: 1, title: 'CheckFree RXP', description: 'Integrating Fiservs Bill Pay solution - CheckFree RXP to Stifels Online Banking Platform' },
  { id: 2, title: 'The Vault ', description: 'Central Business Intelligence and Service Delivery Framework. Problem Statement
    Stifel had Bill Pay application.
    NPS scores were not too good for that Bill Payment product
    The overall percentage of users enrolled in Bill Pay wais 11%.
    Stifel Bank pushed campaigns and promotions in the past and have found some lift (average 2%-3%) but nothing that held stability long term.
    Really close to 50% inactive bill pay accounts
    Inactive bill pay accounts i.e. Subscribers that have not paid a bill in 4 months. ' },
  // Add more projects as needed
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
