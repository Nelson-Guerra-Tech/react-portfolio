import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

// importing svgs
import wavingHand from '../images/waving-hand.png';
import globe from '../images/globe.png';

export default function Home() {
  return (
    <section className='home-container'>
      <div className='main-container'>
        <div className='heading-container'>
          <h1 data-aos='zoom-in'>
            <img
              className='waving-hand wave'
              src={wavingHand}
              alt='waving-hand'
            ></img>
            Hello, I'm <span className='heading-name'> Nelson</span>!
          </h1>
          <div className='title-info' data-aos='zoom-in' data-aos-delay='500'>
            <p>
              A <span className='heading-name'>Software Developer </span>with a
              Bachelors in Information Technology, based out of Georgia
              <img className='globe' src={globe} alt='globe'></img>
              <span className='heading-name'>I design & develop</span> cool
              things for the web
            </p>
            <Link to={'/projects'}>
              <button className='btn'>View Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
