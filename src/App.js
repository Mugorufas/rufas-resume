import React from 'react';
import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Summary />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Footer />
      </div>
    </div>
  );
}

export default App;
