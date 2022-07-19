// custom css
import './Header.css';
import { Link } from 'react-router-dom';

// importing react icons
import { FaHome, FaCode, FaUser, FaEnvelope, FaMailBulk } from 'react-icons/fa';

// import react links

// import svg
import myLogo from '../img/Asset 1.svg';

export default function Header() {
  return (
    <nav className='header-container'>
      <div className='logo-container'>
        <Link to={'/'}>
          <img className='myLogo' src={myLogo} alt='nelson-logo' />
        </Link>
      </div>

      <div className='header-links'>
        <Link to='/' className='header-links'>
          <div className='icon'>
            <FaHome />
          </div>
          <p className='home'>Home</p>
        </Link>

        <Link to='/projects' className='header-links'>
          <div className='icon'>
            <FaCode />
          </div>
          <p className='home'>Portfolio</p>
        </Link>

        {/* <Link to='/about' className='header-links'>
          <div className='icon'>
            <FaUser />
          </div>
          <p className='home'>About</p>
        </Link> */}

        <Link to='/contact' className='header-links'>
          <div className='icon'>
            <FaEnvelope />
          </div>
          <p className='home'>Contact</p>
        </Link>
      </div>
    </nav>
  );
}
