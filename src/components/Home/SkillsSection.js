import React from "react";
import "./skills.css";

const skills = [
  {
    icon: "🎯",
    category: "Strategic Leadership & Planning",
    expertise: [
      "Regional Go-to-Market (GTM) Strategy",
      "Strategic Account Planning & Management",
      "Market & Competitive Intelligence",
      "Product Roadmap Alignment with Regional Priorities",
    ],
  },
  {
    icon: "🤝",
    category: "Customer & Stakeholder Management",
    expertise: [
      "Escalation Management & Resolution",
      "Cross-Regional Coordination (US, AP)",
      "Partner & Ecosystem Management",
      "Regular Customer Touchpoint Orchestration",
    ],
  },
  {
    icon: "📈",
    category: "Sales & Revenue Enablement",
    expertise: [
      "Sales Team Enablement & Training",
      "Demo Material Development",
      "Deal Support",
      "Technical Consultation",
    ],
  },
  {
    icon: "⚙️",
    category: "Operational Excellence",
    expertise: [
      "Issue & Action Log Management",
      "Legal & Compliance Coordination",
      "Regional Performance Reporting",
      "Process Optimization & Documentation",
    ],
  },
  {
    icon: "💡",
    category: "Technical & Product Acumen",
    expertise: [
      "Payment Gateway & Transaction Processing",
      "API Integration & Technical Architecture",
      "Technical Solution Design & Consultation",
      "Emerging Technology Evaluation (AI/ML)",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">
        Skills &amp; Expertise
        <span className="skills-title-accent"></span>
      </h2>
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <div className="skill-icon">{skillCategory.icon}</div>
            <h3>{skillCategory.category}</h3>
            <ul>
              {skillCategory.expertise.map((skill, i) => (
                <li key={i}>
                  <span className="skill-bullet">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
