import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';

// importing components
import Header from './components/Header.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import Footer from './components/Footer.jsx';

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
          <div className='title-info' data-aos='zoom-in' data-aos-delay='500'>
            <p>
              A <span className='heading-name'>Software Developer </span>with a
              Bachelors in Information Technology, based out of Georgia
              <img className='globe' src={globe} alt='globe'></img>
              <span className='heading-name'>I design & develop</span> cool
              things for the web
            </p>
            <button className='btn'>View Projects</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
