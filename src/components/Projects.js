import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Technova - E-Commerce Electronics Platform',
      subtitle: 'Full Stack Web Application',
      description: 'Developed Technova, a complete e-commerce platform specializing in electronics sales. Built with React, Node.js, and MongoDB, featuring user authentication, product catalog, shopping cart, and payment integration.',
      highlights: [
        'Designed responsive UI with glassmorphism design patterns',
        'Built RESTful APIs for product and order management',
        'Implemented JWT authentication and authorization',
        'Integrated payment processing for electronics transactions',
        'Created inventory management system'
      ]
    },
    {
      title: 'Potato Farming Guide',
      subtitle: 'Agriculture Advisory Web App',
      description: 'Built a research-backed agriculture app to help Kenyan potato farmers with planting, crop care, harvesting, and pest management. Includes live market price tracking, local weather intelligence, and expert advice.',
      highlights: [
        'Implemented live market price dashboard for potatoes across major Kenyan cities',
        'Integrated weather-based farming recommendations for irrigation and fertilization',
        'Created detailed crop guides for planting, care, harvest, and pest management',
        'Built a responsive UI with easy navigation for farmers and advisors',
        'Added social contact links for WhatsApp, Instagram, Facebook, X, and TikTok'
      ]
    },
    {
      title: 'Maize Farming Guide',
      subtitle: 'Agriculture Advisory Web App',
      description: 'Built an agriculture app for Kenyan maize farmers with research-backed guidance on planting, care, harvesting, and pest management. Features live market pricing, weather-based recommendations, and AI-powered expert assistance.',
      highlights: [
        'Implemented live market price tracking for maize across Kenyan cities',
        'Integrated smart weather-based farming intelligence and recommendations',
        'Created comprehensive guides for planting, crop care, harvesting, and pest defense',
        'Built responsive UI with audio guidance features for farmers',
        'Integrated AI assistant for expert farming advice'
      ]
    }
  ];

  return (
    <section>
      <h2 className="section-title">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="glass-card">
          <div className="card-title">{project.title}</div>
          <div className="card-subtitle">{project.subtitle}</div>
          <p className="card-description">{project.description}</p>
          <ul>
            {project.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Projects;
