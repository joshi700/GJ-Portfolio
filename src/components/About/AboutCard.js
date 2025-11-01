import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <strong style={{ fontSize: "1.1em" }}>My responsibilities as Regional Product Manager include:</strong>
            <br />
            <br />
            <ul>
              <li className="about-activity">
                <ImPointRight /> <strong className="purple">Strategic Vision & Roadmap Ownership</strong> — Define and execute the product strategy for Mastercard Payment Gateway across Asia-Pacific and North America, aligning regional priorities with global objectives.
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> <strong className="purple">Regional Market Adaptation</strong> — Localize product offerings to address unique customer needs, regulatory requirements, and market dynamics across diverse geographies.
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> <strong className="purple">Cross-Functional Leadership</strong> — Collaborate with engineering, design, sales, marketing, operations, and compliance teams to deliver solutions that drive adoption and revenue growth.
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> <strong className="purple">Market Intelligence & Competitive Analysis</strong> — Continuously monitor market trends, competitive landscape, and emerging opportunities to inform product positioning and differentiation strategies.
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> <strong className="purple">Performance Management & Optimization</strong> — Establish and track key performance indicators (KPIs) including adoption rates, customer satisfaction scores, and revenue metrics to measure success and identify improvement areas.
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> <strong className="purple">Customer Advocacy & Voice of Customer</strong> — Champion customer needs by gathering feedback, conducting user research, and integrating insights into iterative product enhancements.
              </li>
            </ul>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
