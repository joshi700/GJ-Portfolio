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
        <ImPointRight /> <strong className="purple">Drive the strategic direction and roadmap</strong> for the Mastercard Payment Gateway across AP and NAM regions.
      </li>
      <br />
      <li className="about-activity">
        <ImPointRight /> <strong className="purple">Localize global product strategies</strong> to meet regional customer and regulatory needs.
      </li>
      <br />
      <li className="about-activity">
        <ImPointRight /> <strong className="purple">Partner with cross-functional and cross-regional teams</strong>—engineering, design, marketing, operations, and compliance—to deliver impactful, market-fit solutions.
      </li>
      <br />
      <li className="about-activity">
        <ImPointRight /> <strong className="purple">Conduct market and competitive analysis</strong> to identify regional growth opportunities and optimize positioning.
      </li>
      <br />
      <li className="about-activity">
        <ImPointRight /> <strong className="purple">Define and monitor KPIs and performance metrics</strong> to measure adoption, customer satisfaction, and revenue outcomes.
      </li>
      <br />
      <li className="about-activity">
        <ImPointRight /> <strong className="purple">Advocate for customers</strong> by integrating user insights and feedback loops into continuous product improvement.
      </li>
    </ul>
  </p>
</blockquote>
              
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
