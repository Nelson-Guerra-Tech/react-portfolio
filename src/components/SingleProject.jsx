import React, { useState, useEffect } from 'react';
import './SingleProject.css';
import projects from '../data/projectsData';

export default function SingleProject() {
  // setting useState for the projects array
  const [project, setProject] = useState(projects);

  return (
    <div className='single-project'>
      {project.map((singleProject) => {
        return (
          <div
            className='single-project-content'
            key={singleProject.id}
            data-aos='fade-up'
            data-aos-delay=''
          >
            <h2>
              {singleProject.icon}
              <a className='title' href='#'>
                {singleProject.title}
              </a>
            </h2>
            <p>{singleProject.description}</p>
            <div className='btn-container'>
              <button className='live-button'>Live Demo</button>
              <button className='github-button'>Github Source</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
