import React from 'react';
import FadeInSection from '../../components/fade/fade-in';
import ContactButton from '../../components/contact/contact';

function Contact() {
  return (
    <FadeInSection>
      <div className="contact-container text-center min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <h2 className="contact-heading">What's Next?</h2>
        <p className="contact-description">
          I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.
        </p>
        <ContactButton />
      </div>
    </FadeInSection>
  );
}

export default Contact;