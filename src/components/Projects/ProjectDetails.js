// src/pages/ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'CheckFree RXP',
    description: 'Integrating Fiserv\'s Bill Pay solution - CheckFree RXP to Stifel\'s Online Banking Platform'
  },
  {
    id: 2,
    title: 'The Vault',
    description: 'Central Business Intelligence and Service Delivery Framework.\nProblem Statement:\nStifel had Bill Pay application.\nNPS scores were not too good for that Bill Payment product.\nThe overall percentage of users enrolled in Bill Pay was 11 percent.\nStifel Bank pushed campaigns and promotions in the past and have found some lift, averaging 2 to 3 percent.\nReally close to 50 percent inactive bill pay accounts.\nInactive bill pay accounts are Subscribers that have not paid a bill in 4 months.'
  },
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
