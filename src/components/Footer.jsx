import './Footer.css';

// importing font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faReact } from '@fortawesome/free-solid-svg-icons';

// importing aos
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// importing svgs
import reactIcon from '../images/icons8-react-native.svg';

export default function Footer() {
  // initializing AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  // font awesome
  const heartIcon = (
    <FontAwesomeIcon className='heart-icon heart' icon={faHeart} />
  );

  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <p>Made with </p>
        {heartIcon}
        <p> powered by</p>
        <img
          className='react-icon rotate'
          src={reactIcon}
          alt='react-icon'
        ></img>
      </div>
    </div>
  );
}
