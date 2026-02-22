import React from "react";

const responsibilities = [
  {
    icon: "🗺️",
    title: "Strategic Vision & Roadmap Ownership",
    description:
      "Define and execute the product strategy for Mastercard Payment Gateway across Asia-Pacific and North America, aligning regional priorities with global objectives.",
  },
  {
    icon: "🌏",
    title: "Regional Market Adaptation",
    description:
      "Localize product offerings to address unique customer needs, regulatory requirements, and market dynamics across diverse geographies.",
  },
  {
    icon: "🤝",
    title: "Cross-Functional Leadership",
    description:
      "Collaborate with engineering, design, sales, marketing, operations, and compliance teams to deliver solutions that drive adoption and revenue growth.",
  },
  {
    icon: "🔍",
    title: "Market Intelligence & Competitive Analysis",
    description:
      "Continuously monitor market trends, competitive landscape, and emerging opportunities to inform product positioning and differentiation strategies.",
  },
  {
    icon: "📊",
    title: "Performance Management & Optimization",
    description:
      "Establish and track key performance indicators including adoption rates, customer satisfaction scores, and revenue metrics to measure success.",
  },
  {
    icon: "🎤",
    title: "Customer Advocacy & Voice of Customer",
    description:
      "Champion customer needs by gathering feedback, conducting user research, and integrating insights into iterative product enhancements.",
  },
];

function AboutCard() {
  return (
    <div className="about-card-grid">
      {responsibilities.map((item, index) => (
        <div key={index} className="about-responsibility-card">
          <div className="about-card-icon">{item.icon}</div>
          <h4 className="about-card-title">{item.title}</h4>
          <p className="about-card-desc">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutCard;
