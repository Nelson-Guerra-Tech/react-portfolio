import React, { useState } from 'react';
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
          >
            <h2>
              <a className='title' href={singleProject.liveUrl}>
                {singleProject.title}
              </a>
              {singleProject.icon}
            </h2>
            <p>{singleProject.description}</p>

            <div className='btn-container' key={singleProject.id}>
              <a href={singleProject.liveUrl} target='_blank'>
                <button className='live-button'>Live Demo</button>
              </a>
              <a href={singleProject.githubUrl} target='_blank'>
                <button className='github-button'>Github Source</button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
