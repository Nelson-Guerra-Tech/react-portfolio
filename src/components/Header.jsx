// custom css
import './Header.css';
import { Link } from 'react-router-dom';

// importing react icons
import { FaHome, FaCode, FaUser, FaEnvelope } from 'react-icons/fa';

// import react links

// import svg
import myLogo from '../images/Asset 1.svg';

export default function Header() {
  return (
    <nav className='header-container' data-aos='fade-down' data-aos-delay='500'>
      <div className='logo-container'>
        <Link to={'/'}>
          <img className='myLogo' src={myLogo} alt='nelson-logo' />
        </Link>
      </div>

      <div className='header-links'>
        <Link to='/' className='icon'>
          <FaHome />
        </Link>
        <Link to='/' className='links'>
          Home
        </Link>

        <Link to='/projects' className='icon'>
          <FaCode />
        </Link>
        <Link to={'/projects'} className='links'>
          Projects
        </Link>

        <Link to='/about' className='icon'>
          <FaUser />
        </Link>
        <Link to={'/about'} className='links'>
          About
        </Link>

        <Link to='/contact' className='icon'>
          <FaEnvelope />
        </Link>
        <Link to={'/contact'} className='links'>
          Contact
        </Link>
      </div>
    </nav>
  );
}
