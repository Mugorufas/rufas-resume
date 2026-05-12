import React from 'react';

function Certifications() {
  const certs = [
    'React Developer Certification - Online Platform',
    'Full Stack Web Development - Bootcamp',
    'Google Cloud Fundamentals - Cloud Computing Basics'
  ];

  return (
    <section>
      <h2 className="section-title">Certifications</h2>
      <div className="glass-card">
        <ul>
          {certs.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certifications;
