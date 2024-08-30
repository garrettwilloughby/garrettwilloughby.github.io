import React from 'react';

const ContactButton = () => {
  const email = "garrettwilloughby@gmail.com"; // Your email address

  return (
    <a 
      href={`mailto:${email}`} 
      style={{
        textDecoration: 'none'
      }}
    >
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Let's Connect!
      </button>
    </a>
  );
};

export default ContactButton;