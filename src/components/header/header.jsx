import React, { useState } from 'react';
import styles from "./header.module.css";
import Resume from '../resume button/fancy-resume-button';

function Header({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`d-flex navbar navbar-expand-lg navbar-light width-100`}
    style={{ position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '1000' }}>
      <a className="navbar-brand d-lg-none px-3 text-bold" href="#"><Resume /></a>
      <button 
        className="navbar-toggler" 
        type="button" 
        onClick={toggleMenu} // Toggle the menu manually
        aria-controls="navbarNavAltMarkup" 
        aria-expanded={isOpen} 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse justify-content-end px-3 ${isOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
        <div className="navbar-nav align-items-center">
          <a className={`"nav-item nav-link ${styles.navLink}`} href="#about">About</a>
          <a className={`"nav-item nav-link ${styles.navLink}`} href="#experience">Experience</a>
          <a className={`"nav-item nav-link ${styles.navLink}`} href="#projects">Projects</a>
          <a className={`"nav-item nav-link ${styles.navLink}`} href="#contact">Contact</a>
          <div className="nav-item nav-link" href="#"> 
            <Resume />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;