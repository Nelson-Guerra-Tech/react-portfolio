import AboutInfo from '../components/AboutInfo';
import styled from 'styled-components';
import './About.css';

// importing css

export default function AboutPage() {
  return (
    <section className='about-section'>
      <h2 className='section-heading' data-aos='fade-down'>
        🧔🏻‍♂️ About
      </h2>

      <div className='about-info-container'>
        <AboutInfo />
      </div>
    </section>
  );
}
