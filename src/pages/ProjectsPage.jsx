import { FaGithubSquare } from 'react-icons/fa';
import projects from '../data/projectsData';
import { useState, useEffect } from 'react';
import SingleProject from '../components/SingleProject';

// importing css
import './ProjectsPage.css';

export default function ProjectsPage() {
  return (
    <section className='project-section'>
      <h2 className='section-heading' data-aos='fade-down'>
        💾 Portfolio
      </h2>

      <div className='projects-section'>
        <SingleProject />
      </div>
    </section>
  );
}
