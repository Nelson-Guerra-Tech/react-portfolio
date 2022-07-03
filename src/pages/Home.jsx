import React from 'react';
import { Link } from 'react-router-dom';

// importing svgs
import wavingHand from '../img/waving-hand.png';
import globe from '../img/globe.png';

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
              A <span className='heading-name'>Software Developer </span> based
              out of Georgia
              <img className='globe' src={globe} alt='globe'></img>
              <br />I design & develop cool things for the web
            </p>

            <div className='btn__container'>
              <a className='btn_1' href='' download>
                Download CV
              </a>
              <Link to={'/projects'}>
                <a className='btn'>Portfolio</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
