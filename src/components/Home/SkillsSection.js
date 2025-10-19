import React from "react";
import "./skills.css"; // Ensure you have styles for alignment and responsiveness

const skills = [
  {
    category: "Strategy",
    expertise: [
      "Regional Product Strategy & Roadmapping",
      "Market & Competitive Analysis",
      "Go-to-Market Planning",
      "Stakeholder & Partner Management",
    ],
  },
  {
    category: "Team Leadership",
    expertise: [
      "* Cross-functional & Regional Team Leadership",
      "Stakeholder Management",
      "Agile Methodologies",
      "Mentorship & Development",
    ],
  },
  {
    category: "Data-Driven Decision Making",
    expertise: [
      "KPIs & Metrics Tracking",
      "User Research",
      "User Experience (UX)",
    ],
  },
  {
    category: "Technical Acumen",
    expertise: [
      "API Integration (JSON/XML, Postman)",
      "Python, JavaScript, SQL",
      "Generative AI Applications in Product Innovation",
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
