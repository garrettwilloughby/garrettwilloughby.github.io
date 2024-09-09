import React from 'react';
import styles from './tag.module.css';

function Tag(text) {
  return (
    <div className={`border mx-3 d-flex flex-column justify-content-end align-items-center p-3 rounded w-50`}>
      <p>{text}</p>
    </div>
  );
}

export default Tag;