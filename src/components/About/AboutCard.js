import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My Job roles include:
            <br />
            <ul>
            <li className="about-activity">
              <ImPointRight /> <strong className="purple">Lead strategic direction and roadmap</strong> for Integration experience domain of Mastercard Payment Gateway. 
            </li>
              <br />
            <li className="about-activity">
              <ImPointRight /> Build, maintain, communicate, and execute against a <strong className="purple">prioritized product roadmap.</strong> 
            </li>
              <br />
            <li className="about-activity">
              <ImPointRight /> <strong className="purple">Collaborate with cross-functional teams, including engineering, design, marketing,</strong> finance, legal and operations, to deliver high-quality products on time.
            </li>
              <br />
            <li className="about-activity">
              <ImPointRight /> Conduct market research and competitive analysis to identify opportunities for product innovation and differentiation.
            </li>
              <br />
            <li className="about-activity">
              <ImPointRight /> <strong className="purple">Define and track key performance metrics,</strong> analyzing data to make informed product decisions.
            </li>
          </ul>
              </p>
        </blockquote>
              
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
