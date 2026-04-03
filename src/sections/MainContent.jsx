import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import SystemLogs from './SystemLogs';

const MainContent = () => {
  return (
    <div className="reveal">
      <Hero />
      <Projects />
      <SystemLogs />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default MainContent;