import React from 'react';
import styles from "./header.module.css"

function Header({ isScrolled }) {
console.log(isScrolled)
  return (<div>{
    !isScrolled 
    ? (<div className={`container d-flex border justify-content-end ${styles.sticky}`}>
      <nav>
        <a className={`navLink ${styles.navLink}`} href="#about">About</a>
        <a className={`navLink ${styles.navLink}`} href="#experience">Experience</a>
        <a className={`navLink ${styles.navLink}`} href="#projects">Projects</a>
        <a className={`navLink ${styles.navLink}`} href="#contact">Contact</a>
        <a>Resume</a>
      </nav>
    </div>
    ) : (<div className={`container d-flex border justify-content-end ${styles.sticky}`}>
        <nav>
          
        <a className={`navLink ${styles.navLink}`} href="#about">About</a>
        <a className={`navLink ${styles.navLink}`} href="#experience">Experience</a>
        <a className={`navLink ${styles.navLink}`} href="#projects">Projects</a>
        <a className={`navLink ${styles.navLink}`} href="#contact">Contact</a>
        <a>Resume</a>
        </nav>
      </div>
    )
    }</div>
    );
}

export default Header;