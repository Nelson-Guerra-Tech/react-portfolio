import ReactDOM from 'react-dom';

// importing components
import Header from './components/Header.jsx';

// importing css
import './index.css';

// importing aos & useEffect
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// importing svgs
import wavingHand from './images/waving-hand.png';
import globe from './images/globe.png';

function App() {
  // initializing AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className='App'>
      <Header />
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
          <p data-aos='zoom-in' data-aos-delay='500'>
            A <span className='heading-name'>Software Developer </span>with a
            Bachelor's in Information Technolgy, based out of Georgia
            <img className='globe' src={globe} alt='globe'></img>
            <span className='heading-name'>I design & develop</span> cool things
            for the web.
          </p>
          <button className='btn' data-aos='zoom-in' data-aos-delay='1000'>
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
