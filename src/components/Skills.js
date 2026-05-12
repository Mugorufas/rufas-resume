import React from 'react';

function Skills() {
  const skillsList = [
    'JavaScript',
    'React',
    'React Native',
    'HTML/CSS',
    'Python',
    'Java',
    'Node.js',
    'Express.js',
    'SQL',
    'MongoDB',
    'Firebase',
    'Git & GitHub',
    'REST APIs',
    'GraphQL',
    'Bootstrap',
    'Tailwind CSS',
    'Responsive Design',
    'UI/UX Design',
    'Agile/Scrum',
    'Database Design',
    'Web Security',
    'Performance Optimization'
  ];

  return (
    <section>
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-badge">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
