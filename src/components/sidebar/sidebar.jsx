import React from 'react';
import { IconGitHub, IconGoodReads, IconLinkedin } from '../../assets/icons/index';
import styles from './sidebar.module.css';

function Sidebar() {
  
  return (
    <div className={`mx-5 min-vh-100 ${styles.sidebar}`}>
      <p className={`${styles.svg}`} onClick={() => window.open('https://github.com/garrettwilloughby', '_blank')}>
        <IconGitHub /> 
      </p>
      <p className={`${styles.svg}`} onClick={() => window.open('https://www.linkedin.com/in/garrettwilloughby', '_blank')}>
        <IconLinkedin />
      </p>

      <p className={`${styles.svg}`} onClick={() => window.open('https://www.goodreads.com/user/show/181021564-garrett-willoughby', '_blank')}>
        <IconGoodReads />
      </p>

    </div>
  );
}

export default Sidebar;