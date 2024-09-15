import React from 'react';
import styles from './tag.module.css';

function Tag({ text }) { 
  return (
    <div className={`${styles.tag}`}>
      <p>{text}</p>  
    </div>
  );
}

export default Tag;