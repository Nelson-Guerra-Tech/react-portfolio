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
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  margin: 2rem 1rem;
`;
