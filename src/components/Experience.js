import React from 'react';

function Experience() {
  return (
    <section>
      <h2 className="section-title">Experience</h2>
      <div className="glass-card">
        <div className="card-title">Internship - Web Developer</div>
        <div className="card-subtitle">Tech Company Name</div>
        <div className="meta-info">
          <span className="date-range">Jan 2025 - Dec 2025</span>
        </div>
        <p className="card-description" style={{ marginTop: '12px' }}>
          Gained hands-on experience in web development and worked on real-world projects.
        </p>
        <ul>
          <li>Collaborated with senior developers on feature development</li>
          <li>Participated in code reviews and agile sprint planning</li>
          <li>Fixed bugs and optimized existing codebase</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
