import React, { useState } from 'react';
import styles from "./header.module.css";
import { Navbar, Nav } from 'react-bootstrap';

function Header({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`container-fluid d-flex border ${styles.sticky}`}>
      <Navbar expand="lg" className="w-100">
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} className="ml-auto" />
        <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-end ${isOpen ? 'show' : ''}`}>
          <Nav className="ml-auto text-right">
            <Nav.Link className={`navLink ${styles.navLink}`} href="#about">About</Nav.Link>
            <Nav.Link className={`navLink ${styles.navLink}`} href="#experience">Experience</Nav.Link>
            <Nav.Link className={`navLink ${styles.navLink}`} href="#projects">Projects</Nav.Link>
            <Nav.Link className={`navLink ${styles.navLink}`} href="#contact">Contact</Nav.Link>
            <Nav.Link className={`navLink ${styles.navLink}`} href="#resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
