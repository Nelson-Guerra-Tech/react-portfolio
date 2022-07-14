import React from 'react';
import styled from 'styled-components';

export default function ContactInfo() {
  return (
    <ContactContainer>
      <div className='contact-content' data-aos='fade-up'>
        <p>
          🤝 If you want to get in contact with me, send me an email at
          <span> nelsonguerra.tech@outlook.com</span>
        </p>

        <FormContainer>
          <form
            action='https://getform.io/f/70f926b2-9884-46bc-a1a9-f1e7b4916c64'
            method='POST'
          >
            <input type='text' name='name' placeholder='Name' required />
            <input type='email' name='email' placeholder='Email' required />
            <textarea
              name='message'
              placeholder='Type your message...'
              required
            ></textarea>
            <button className='btn'>Send Message</button>
          </form>
        </FormContainer>
      </div>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  margin: 2rem 1rem;
`;

const FormContainer = styled.div`
  display: flex;

  > form {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  > form > input {
    width: 100%;
    height: 2.5rem;
    border-radius: 8px;
    border: 1px solid;
  }

  > form > textarea {
    width: 100%;
    height: 8rem;
    border-radius: 8px;
    resize: none;
  }

  > form > button {
    width: 100%;
    margin: 0;
  }
`;
