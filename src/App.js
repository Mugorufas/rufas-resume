import React, { useRef, useState } from 'react';
import './App.css';
import jsPDF from 'jspdf';
import Header from './components/Header';
import Summary from './components/Summary';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  const resumeRef = useRef(null);
  const [hideDownloadButton, setHideDownloadButton] = useState(false);

  const handleDownload = async () => {
    if (!resumeRef.current) return;

    setHideDownloadButton(true);

    try {
      const pdf = new jsPDF('p', 'mm', 'a4');

      // Calculate PDF content width in pixels (1 mm = 3.779527559 px at 96dpi)
      const pageWidthMM = pdf.internal.pageSize.getWidth();
      const marginMM = 10; // match the margins used in export
      const contentWidthMM = pageWidthMM - marginMM * 2;
      const mmToPx = 3.779527559;
      const contentWidthPx = Math.round(contentWidthMM * mmToPx);

      // Temporarily resize the live resume element and add pdf-ready so html2canvas can capture it
      const el = resumeRef.current;
      const originalStyle = {
        width: el.style.width || '',
        boxSizing: el.style.boxSizing || '',
      };
      // Apply PDF sizing and class
      el.style.boxSizing = 'border-box';
      el.style.width = `${contentWidthPx}px`;
      el.classList.add('pdf-ready');
      // Wait briefly for layout to update
      await new Promise((resolve) => setTimeout(resolve, 200));

      try {
        await pdf.html(el, {
          callback: (doc) => {
            doc.save('resume.pdf');
          },
          x: marginMM,
          y: marginMM,
          html2canvas: {
            scale: 1.5,
            useCORS: true,
            backgroundColor: '#ffffff',
            windowWidth: contentWidthPx,
          },
          autoPaging: 'text',
        });
      } finally {
        // restore original styles
        el.classList.remove('pdf-ready');
        el.style.width = originalStyle.width;
        el.style.boxSizing = originalStyle.boxSizing;
      }
    } finally {
      resumeRef.current.classList.remove('pdf-ready');
      setHideDownloadButton(false);
    }
  };

  return (
    <div className="app">
      <div className="container" ref={resumeRef}>
        <Header onDownload={handleDownload} hideDownloadButton={hideDownloadButton} />
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
