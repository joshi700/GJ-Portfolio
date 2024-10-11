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
    description: 'Central Business Intelligence and Service Delivery Framework.<br>Problem Statement:<br>Stifel had Bill Pay application.<br>NPS scores were not too good for that Bill Payment product.<br>The overall percentage of users enrolled in Bill Pay was 11 percent.<br>Stifel Bank pushed campaigns and promotions in the past and have found some lift, averaging 2 to 3 percent.<br>Really close to 50 percent inactive bill pay accounts.<br>Inactive bill pay accounts are Subscribers that have not paid a bill in 4 months.'
  },
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
