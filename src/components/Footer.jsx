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
      <div className='social-container'>
        <a
          href='https://www.linkedin.com/in/nelson-guerra-7075b413a/'
          target='_blank'
        >
          <FaLinkedin className='linked-icon' />
        </a>
        <a href='https://github.com/Nelson-Guerra-Tech' target='_blank'>
          <FaGithubSquare className='git-icon' />
        </a>
        <a href='https://codepen.io/your-work/' target='_blank'>
          <FaCodepen className='linked-icon' />
        </a>
        <a href='https://www.instagram.com/bearded_nelly/' target='_blank'>
          <FaInstagramSquare className='linked-icon' />
        </a>
      </div>
      <div className='footer-content'>
        <p>Made with </p>
        <FaHeart className='heart-icon heart' />
        <p> powered by</p>
        <FaReact className='react-icon rotate' />
      </div>
    </div>
  );
}
