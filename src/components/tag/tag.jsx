import React from 'react';
import styles from './tag.module.css';

function Tag() {
  return (
    <div className={`border mx-3 d-flex flex-column justify-content-end align-items-center min-vh-100 ${styles.sidebar}`}>
      <p className={`${styles.svg}`} onClick={() => window.open('github.com/garrettwilloughby', '_blank')}>
        <IconGitHub /> 
      </p>
      <p className={`${styles.svg}`} onClick={() => window.open('linkedin.com/in/garrettwilloughby', '_blank')}>
        <IconLinkedin />
      </p>
    </div>
  );
}

export default Tag;