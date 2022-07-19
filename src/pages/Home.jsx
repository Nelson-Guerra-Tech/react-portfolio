import React from 'react';
import { Link } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';

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
              <br />
              Focused on {''}
              <span className='heading-name'>designing & programming</span>{' '}
              front-end applications
            </p>

            <div className='btn__container'>
              <a
                href='https://1drv.ms/b/s!ArPqeXXG-P85f8KkvguCJ7r_LZY'
                target='_blank'
              >
                <button className='btn_1'>
                  <FiDownload className='download-icon' /> Resúme
                </button>
              </a>
              <Link to={'/projects'}>
                <button className='btn'>Portfolio</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
