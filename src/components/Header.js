import React from 'react';

function Header() {
  return (
    <div className="header">
      <h1 className="name">Rufas Mugo Ndaba</h1>
      <p className="title">IT Graduate | Full Stack Developer</p>
      <div className="contact-info">
        <div className="contact-item">
          <span className="icon">📧</span>
          <span>mugorufas072@gmail.com</span>
        </div>
        <div className="contact-item">
          <span className="icon">📱</span>
          <span>0792560641</span>
        </div>
        <div className="contact-item">
          <span className="icon">📍</span>
          <span>Kutus, Kirinyaga</span>
        </div>
        <div className="contact-item">
          <span className="icon">🔗</span>
          <span>linkedin.com/in/rufas-ndaba</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
