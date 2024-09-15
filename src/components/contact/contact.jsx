import React from 'react';
import styles from './contact.module.css'

const ContactButton = () => {
  const email = "garrettwilloughby@gmail.com"; // Your email address

  return (
    <a 
      href={`mailto:${email}`} 
      style={{
        textDecoration: 'none'
      }}
    >
      <button className={`${styles.buttoncontact}`}>
        Let's Connect!
      </button>
    </a>
  );
};

export default ContactButton;