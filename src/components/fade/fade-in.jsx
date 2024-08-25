import React from 'react';
import useIntersectionObserver from './intersection-observer';
import './fade-in.css'; // Import your custom CSS

function FadeInSection({ children }) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1, // Start the fade-in when 10% of the element is in view
  });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
}

export default FadeInSection;
