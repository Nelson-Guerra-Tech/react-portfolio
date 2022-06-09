// custom css
import './Header.css';

// importing aos & useEffect
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import react links

// import svg
import myLogo from '../images/Asset 1.svg';

export default function Header() {
  // initializing AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className='header-container' data-aos='fade-down'>
      <div className='logo-container'>
        <img className='myLogo' src={myLogo} alt='nelson-logo' />
      </div>

      <div className='header-links'>
        <a href='/'>Home</a>
        <a href='/'>Projects</a>
        <a href='/'>About</a>
      </div>
    </div>
  );
}
