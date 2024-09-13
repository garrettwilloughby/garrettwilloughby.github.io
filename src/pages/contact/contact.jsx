import React, { useState, useEffect } from 'react';
import FadeInSection from '../../components/fade/fade-in';
import ContactButton from '../../components/contact/contact';
import { IconLinkedin, IconGitHub, IconGoodReads } from '../../assets/icons';
import styles from "./contact.module.css";


function Contact() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {  // Adjust this value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <FadeInSection>
      <div className="contact-container text-center min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <h2 className="contact-heading">What's Next?</h2>
        <p className="contact-description">
          I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.
        </p>
        <ContactButton />

        {isMobile && 
        <div className='d-flex'>
          <div className={`${styles.svg}`}>
            <IconGitHub />
          </div>

           <div className={`${styles.svg}`}>
            <IconLinkedin />
            </div>
          <div className={`${styles.svg}`}>
            <IconGoodReads />
          </div>
        </div>
        }
      </div>

      


    </FadeInSection>
  );
}

export default Contact;