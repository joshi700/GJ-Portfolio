// src/pages/ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import "../../App.css";
import { Container, Row, Col } from "react-bootstrap";

const projects = [
  {
    id: 1,
    title: 'Jebel Ali Free Zone Authority',
 description: `
      <strong>Context</strong><br><br>
      <ul>
        <li>JAFZA, or the Jebel Ali Free Zone Authority, is a free trade zone located in Dubai, United Arab Emirates. It was established in 1985 and is one of the largest and most successful free zones in the world.<br></li>
        <li>The free zone attracts a wide range of businesses, including manufacturing, trading, logistics, and services. Companies can benefit from 100% foreign ownership and full repatriation of profits.<br><br></li>
      </ul>
      <strong>Identify Customer - Personas</strong><br><br>
      <ul>
        <li>There are about 7000 companies (large, medium and small businesses) inside Jafza (Jebel Ali Free Trade Zone).<br><br></li>
      </ul>
      
      <strong>Customer Needs</strong><br><br>
      <ol>
        <li>These companies reach out to Jafza for company and employee services. These include services like visa applications, license renewals, official letters, and making payments.<br></li>
        <li>Jafza received 20,000 to 25,000 online transactions per month, with 92% of transactions starting online.<br></li>
        <li>The companies use a self-service portal to access these services. The customers of Jafza need these services to be operated from the mobile phone.<br><br></li>
      </ol>
      
      <strong>Types of Services for Companies in JAFZA</strong><br> <br>
      <ol>
        <li><strong>Why Jafza/ Why Dubai / Company News</strong><br></li>
        <li><strong>Gallery:</strong> Inquiries Services require username and password</li>
      
      
        <li><strong>Company Related Services:</strong> Company related services include services such as registration, licenses and lease.<br></li>

        <li><strong>Letters:</strong> Various letters can be requested, such as a letter to certify shareholders, a letter of good standing, etc.<br></li>

        <li><strong>Registration:</strong> Services related to the registration of a company, such as adding shareholders, changing share capital, etc.<br></li>

        <li><strong>License:</strong> Services related to licenses, such as the renewal of existing license, adding activities or adding new.<br></li>

        <li><strong>Lease:</strong> Services related to the lease of a company, such as renewals and related payments.<br></li>

        <li><strong>Reports:</strong> Key reports related to the company, such as company summary information, number and type of leases, number of visas, etc.<br></li>

        <li><strong>Other Services:</strong> Other services a company can obtain such as, Third party services:<br></li>
          - Etisalat Services<br>
          - DEWA services<br>
          - Post Office Services<br>
          - Attest Customs Form<br>

          Or a company can submit various requests such as:<br>
          - Reset Jafza mail password<br>
          - Facility Maintenance<br>
          - Complaints & Suggestions<br>

        <li><strong>Employee Related Services:</strong> All services relating to employees of the company, such as legal and status matters, visas and employee cards.<br></li>
        <li><strong>Letters:</strong> Various letters related to employees can be requested, such as no objection letters, salary certificates, etc.<br></li>
        <li><strong>Cards:</strong> All services related to employee cards such as health cards and access cards.<br></li>
        <li><strong>Visa:</strong> All services related to employees:<br></li>
          - legal status<br>
          - entry visas<br>
          - visit visas<br>
          - resident permits<br><br>
      
      </ol>

      <strong>Role Estimate:</strong><br>
      <ul>
        <li>Using the app, customers would be able to initiate interactions with Jafza for official letters, visa applications, license renewals, etc.<br></li>
        <li>Customers can submit all required documents by 'scanning them in' through the device's camera and get their requirements fulfilled without ever having to use a workstation or stepping into a Jafza Customer Service Centre.<br></li>
        <li>For the customers, the mobile app would offer company and employee services enabling companies to request and purchase services including payments and visa letters.<br><br></li>
      </ul>
      <strong>Summarize Recommendation:</strong><br>
      <ul>
      <li>This Mobile App is designed to provide a seamless experience in the free zone, enabling customers to manage their operations efficiently and stay ahead in the competitive business landscape.</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: 'The Vault',
    description: 'Central Business Intelligence and Service Delivery Framework.<br><br><br>Problem Statement:<br><br><br>Stifel had Bill Pay application.<br>NPS scores were not too good for that Bill Payment product.<br>The overall percentage of users enrolled in Bill Pay was 11 percent.<br>Stifel Bank pushed campaigns and promotions in the past and have found some lift, averaging 2 to 3 percent.<br>Really close to 50 percent inactive bill pay accounts.<br>Inactive bill pay accounts are Subscribers that have not paid a bill in 4 months.'
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
    <section>
    
        <Container fluid className="home-section" id="home">
        <Row>
        </Row>
        </Container>
    <div className="project-details">
      <h1>{project.title}</h1>
      <p className="project-details" dangerouslySetInnerHTML={{ __html: project.description }} />
    </div>
  </section>
  );
};

export default ProjectDetails;
