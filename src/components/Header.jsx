// custom css
import './Header.css';

// importing aos & useEffect
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faHouse,
  faCircleUser,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

// import react links

// import svg
import myLogo from '../images/Asset 1.svg';

export default function Header() {
  // initializing AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  // font awesome
  const houseIcon = <FontAwesomeIcon className='icon' icon={faHouse} />;
  const codeIcon = <FontAwesomeIcon className='icon' icon={faCode} />;
  const userIcon = <FontAwesomeIcon className='icon' icon={faCircleUser} />;
  const mailIcon = <FontAwesomeIcon className='icon' icon={faEnvelope} />;

  return (
    <div className='header-container' data-aos='fade-down' data-aos-delay='500'>
      <div className='logo-container'>
        <img className='myLogo' src={myLogo} alt='nelson-logo' />
      </div>

      <div className='header-links'>
        {houseIcon}
        <a href='/'>Home</a>
        {codeIcon}
        <a href='/'>Projects</a>
        {userIcon}
        <a href='/'>About</a>
        {mailIcon}
        <a href='/'>Contact</a>
      </div>
    </div>
  );
}
