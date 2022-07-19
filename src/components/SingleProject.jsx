import React, { useState } from 'react';
import './SingleProject.css';
import projects from '../data/projectsData';
import styled from 'styled-components';

import {
  SiFirebase,
  SiNetlify,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMaterialui,
} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

const reactIcon = <FaReact className='project-icon react rotate' />;
const cssIcon = <SiCss3 className='project-icon css' />;
const htmlIcon = <SiHtml5 className='project-icon html' />;
const javaScript = <SiJavascript className='project-icon javascript' />;
const nodeIcon = <SiNodedotjs className='project-icon node' />;
const expressIcon = <SiExpress className='project-icon' />;
const materialIcon = <SiMaterialui className='project-icon material-ui' />;
const tailwinIcon = <SiTailwindcss className='project-icon tailwind-icon' />;
const firebaseIcon = <SiFirebase className='project-icon firebase' />;

export default function SingleProject() {
  // setting useState for the projects array
  const [project, setProject] = useState(projects);

  return (
    <div className='single-project'>
      <IconContainer className='icon-container' data-aos='fade-up'>
        <div>
          {htmlIcon} <p>HTML</p>
        </div>
        <div>
          {cssIcon} <p>CSS</p>
        </div>
        <div>
          {javaScript} <p>Javascript</p>
        </div>
        <div>
          {reactIcon} <p>React</p>
        </div>
        <div>
          {materialIcon} <p>Material UI</p>
        </div>

        <div>
          {firebaseIcon} <p>Firebase</p>
        </div>
      </IconContainer>
      {project.map((singleProject) => {
        return (
          <div
            className='single-project-content'
            key={singleProject.id}
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <ImgContainer>
              <img src={singleProject.img} alt='project-img' />
            </ImgContainer>
            <h2>
              <a className='title' href={singleProject.liveUrl}>
                {singleProject.title}
              </a>
              {singleProject.icon}
            </h2>
            <p className='project-description'>{singleProject.description}</p>

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

const ImgContainer = styled.div`
  width: 100%;
  max-height: 300px;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;

  > img {
    width: 100%;
    border-radius: 10px;
    margin-top: 2rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 0.5rem;
  align-items: center;
  background: white;
  padding: 1rem;
  margin: 0 1rem;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > div > p {
    font-size: 0.8rem;
  }
`;
