import React from "react";
import "./skills.css"; // Ensure you have styles for alignment and responsiveness

const skills = [
  {
    category: "Strategic Leadership & Planning",
    expertise: [
      "Regional Go-to-Market (GTM) Strategy",
      "Strategic Account Planning & Management",
      "Market & Competitive Intelligence",
      "Product Roadmap Alignment with Regional Priorities",
    ],
  },
  {
    category: "Customer & Stakeholder Management",
    expertise: [
      "Escalation Management & Resolution",
      "Cross-Regional Coordination (US,AP)",
      "Partner & Ecosystem Management",
      "Regular Customer Touchpoint Orchestration",
    ],
  },
  {
    category: "Sales & Revenue Enablement",
    expertise: [
      "Sales Team Enablement & Training",
      "Demo Material Development",
      "Deal Support",
      "Technical Consultation",
    ],
  },
  {
    category: "Operational Excellence",
    expertise: [
      "Issue & Action Log Management",
      "Legal & Compliance Coordination",
      "Regional Performance Reporting",
      "Process Optimization & Documentation",
    ],
  },
  {
    category: "Technical & Product Acumen",
    expertise: [
      "Payment Gateway & Transaction Processing Expertise",
      "API Integration & Technical Architecture (JSON/XML, REST APIs)",
      "Technical Solution Design & Consultation",
      "Emerging Technology Evaluation (AI/ML in Payments)",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3>{skillCategory.category}</h3>
            <ul>
              {skillCategory.expertise.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
