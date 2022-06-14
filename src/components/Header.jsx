// custom css
import './Header.css';
import { Link } from 'react-router-dom';

// importing aos & useEffect
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
  // font awesome
  const houseIcon = <FontAwesomeIcon className='icon' icon={faHouse} />;
  const codeIcon = <FontAwesomeIcon className='icon' icon={faCode} />;
  const userIcon = <FontAwesomeIcon className='icon' icon={faCircleUser} />;
  const mailIcon = <FontAwesomeIcon className='icon' icon={faEnvelope} />;

  return (
    <nav className='header-container' data-aos='fade-down' data-aos-delay='500'>
      <div className='logo-container'>
        <Link to={'/'}>
          <img className='myLogo' src={myLogo} alt='nelson-logo' />
        </Link>
      </div>

      <div className='header-links'>
        <Link to='/' className='icon'>
          {houseIcon}
        </Link>
        <Link to='/' className='links'>
          Home
        </Link>

        <Link to='/projects' className='icon'>
          {codeIcon}
        </Link>
        <Link to={'/projects'} className='links'>
          Projects
        </Link>

        <Link to='/about' className='icon'>
          {userIcon}
        </Link>
        <Link to={'/about'} className='links'>
          About
        </Link>

        <Link to='/contact' className='icon'>
          {mailIcon}
        </Link>
        <Link to={'/contact'} className='links'>
          Contact
        </Link>
      </div>
    </nav>
  );
}
