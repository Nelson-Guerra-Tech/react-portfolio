import React from 'react';
import ContactInfo from '../components/ContactInfo';

// importing css
import './Contact.css';

export default function Contact() {
  return (
    <section className='contact-section'>
      <h2 className='section-heading' data-aos='fade-down'>
        📬 Contact
      </h2>

      <div className='contact-info-container'>
        <ContactInfo />
      </div>
    </section>
  );
}
