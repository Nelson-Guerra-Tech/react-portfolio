import React from 'react';
import styled from 'styled-components';

export default function ContactInfo() {
  return (
    <ContactContainer>
      <div className='contact-content' data-aos='fade-up'>
        <p>
          🤝 If you want to get in contact with me, send me an email by clicking
          <a href='mailto:nelsonguerra.tech@outlook.com'>nelsonguerra.tech</a>
        </p>
        <p>
          🔎 You can also find me on LinkedIn by clicking
          <a href='https://www.linkedin.com/in/nelson-guerra-7075b413a/'>
            @Nelson-Guerra
          </a>
          or by clicking the icon below.
        </p>
      </div>

      <div>
        <form
          action='https://getform.io/f/70f926b2-9884-46bc-a1a9-f1e7b4916c64'
          method='POST'
        >
          <div c>
            <p>
              Submit the form below or shoot me an email -
              nelsonguerra.tech@gmail.com
            </p>
          </div>
          <input />
          <input />
          <textarea></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  margin: 2rem 1rem;
`;
