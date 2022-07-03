import './Footer.css';
import {
  FaGithubSquare,
  FaLinkedin,
  FaHeart,
  FaReact,
  FaCodepen,
  FaInstagramSquare,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer__inner'>
        <div className='footer-content'>
          <p>Made with </p>
          <FaHeart className='heart-icon heart' />
          <p>by Nelson Guerra © built with</p>
          <FaReact className='react-icon rotate' />

          <div className='social-container'>
            <a
              href='https://www.linkedin.com/in/nelson-guerra-7075b413a/'
              target='_blank'
            >
              <FaLinkedin className='linked-icon fa-icon' />
            </a>
            <a href='https://github.com/Nelson-Guerra-Tech' target='_blank'>
              <FaGithubSquare className='git-icon fa-icon' />
            </a>
            <a href='https://codepen.io/your-work/' target='_blank'>
              <FaCodepen className='linked-icon fa-icon' />
            </a>
            <a href='https://www.instagram.com/bearded_nelly/' target='_blank'>
              <FaInstagramSquare className='linked-icon fa-icon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
