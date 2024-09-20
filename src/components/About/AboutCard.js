import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gaurav Joshi </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently employed as a Global Product Manager at Mastercard.
            <br />
            I have completed my MBA in Finance and Marketing from IIT Roorkee.
            <br />
              <br />
            My Job roles include:
            <br />
            <ul>
            <li className="about-activity">
              <ImPointRight /> Lead the strategic direction and roadmap for Integration experience of Mastercard Payment gateway user ensuring alignment with company objectives and market needs.
            </li>
            <li className="about-activity">
              <ImPointRight /> Drive product management from conception to launch, including defining features, prioritizing requirements, and overseeing implementation.
            </li>
            <li className="about-activity">
              <ImPointRight /> Collaborate with cross-functional teams, including engineering, design, marketing, and operations, to deliver high-quality products on time.
            </li>
            <li className="about-activity">
              <ImPointRight /> Conduct market research and competitive analysis to identify opportunities for product innovation and differentiation.
            </li>

            <li className="about-activity">
              <ImPointRight /> Define and track key performance metrics, analyzing data to make informed product decisions.
            </li>
            <li className="about-activity">
              <ImPointRight /> Provide leadership and mentorship to the product team, fostering a culture of innovation, collaboration, and excellence.
            </li>
            <li className="about-activity">
              <ImPointRight /> Build, Maintain, communicate, and execute against a prioritized product roadmap for an integrated payment processing strategy for Mastercard Payment Gateway Solutions. 
            </li>
            <li className="about-activity">
              <ImPointRight /> In-depth knowledge of payments environments of International and Domestic card brands/ Issuers/ processors / Acquirers/ PayFac models is a necessity. 
            </li>

            <li className="about-activity">
              <ImPointRight /> Understand mandates and compliance and prior knowledge and experience in digesting and interpreting Brands technical letters to anticipate future changes or steps we need to take to keep compliant. 
            </li>
            <li className="about-activity">
              <ImPointRight /> Knowledge and experience in understanding Processor specs and implementing solutions with emphasis on Major card and domestic schemes. 
            </li>
            <li className="about-activity">
              <ImPointRight /> Experienced in creating/developing and setting up boarding, commercialization of new features on existing platforms. 
            </li>
            <li className="about-activity">
              <ImPointRight /> Interface with key processing clients, identifying and recommending the right partners. 
            </li>

            <li className="about-activity">
              <ImPointRight /> Produce detailed product and functional requirements that will drive product development, testing and deployment. 
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
