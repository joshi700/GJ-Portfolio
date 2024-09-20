import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />
            <br />
            My Job roles include:
            <br />
            <ul>
            <li className="about-activity">
              <ImPointRight /> Lead strategic direction and roadmap for Integration experience domain of Mastercard Payment Gateway. 
            </li>
            <li className="about-activity">
              <ImPointRight /> Build, maintain, communicate, and execute against a prioritized product roadmap. 
            </li>
            <li className="about-activity">
              <ImPointRight /> Collaborate with cross-functional teams, including engineering, design, marketing, finance, legal and operations, to deliver high-quality products on time.
            </li>
            <li className="about-activity">
              <ImPointRight /> Conduct market research and competitive analysis to identify opportunities for product innovation and differentiation.
            </li>
            <li className="about-activity">
              <ImPointRight /> Define and track key performance metrics, analyzing data to make informed product decisions.
            </li>
            <li className="about-activity">
              <ImPointRight /> In-depth knowledge of payments environments of International and Domestic card brands/ Issuers/ processors / Acquirers/ PayFac models. 
            </li>
            <li className="about-activity">
              <ImPointRight /> Experienced in creating/developing and setting up boarding, commercialization of new features on existing Payment Gateway platform. 
            </li>
            <li className="about-activity">
              <ImPointRight /> Produce detailed product and functional requirements that drive product development, testing and deployment. 
            </li>
          </ul>


              
          <br />
            Other activities that I love!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Poker
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Marvel Movies Buff
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Gaurav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
