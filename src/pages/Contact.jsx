import React from 'react';

// importing css
import './Contact.css';

export default function Contact() {
  return (
    <section className='contact-section'>
      <h2 className='section-heading' data-aos='fade-down'>
        📬 Contact
      </h2>

      <div className='contact-content' data-aos='fade-up'>
        <p>
          🤝 If you want to get in contact with me, send me an email by clicking
          <a href='mailto:nelsonguerra.tech@outlook.com'>
            nelsonguerra.tech@outlook.com
          </a>
        </p>
        <p>
          🔎 You can also reach me on LinkedIn by clicking
          <a href='https://www.linkedin.com/in/nelson-guerra-7075b413a/'>
            @Nelson-Guerra
          </a>
          or by clicking the icon in the below.
        </p>
      </div>
    </section>
  );
}
