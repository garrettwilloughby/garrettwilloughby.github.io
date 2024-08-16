import React, { useState, useEffect } from 'react';
import { Experience, Projects, About, Contact, Home } from './pages';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {  // Adjust this value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app-container d-flex">
    <Sidebar />
    <div className="main-content flex-grow-1">
      <Header isScrolled={isScrolled} />
      <Home />
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  </div>
  );
}

export default App;