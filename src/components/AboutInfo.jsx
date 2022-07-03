import React from 'react';
import './SingleProject.css';

import myPhoto3 from '../img/DSC04392.jpg';
import myPhoto4 from '../img/IMG_4443.JPG';

import { FaReact } from 'react-icons/fa';
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
} from 'react-icons/si';

const reactIcon = <FaReact className='project-icon react rotate' />;
const cssIcon = <SiCss3 className='project-icon css' />;
const htmlIcon = <SiHtml5 className='project-icon html' />;
const javaScript = <SiJavascript className='project-icon javascript' />;
const nodeIcon = <SiNodedotjs className='project-icon node' />;
const expressIcon = <SiExpress className='project-icon' />;

export default function AboutInfo() {
  return (
    <AboutContainer>
      <AboutInnerContainer data-aos='fade-up'>
        <PhotoContainer data-aos='fade-up' data-aos-delay='100'>
          <img src={myPhoto3} alt='me' />
        </PhotoContainer>

        <PhotoContainer data-aos='fade-up' data-aos-delay='200'>
          <Description>
            <h2>I'm Nelson Guerra</h2>
            <p>
              A Software Developer & Army Veteran with a passion for technology.
              I consider myself a 'forever student' eager to both build on my
              academic foundations in web development and to stay in tune with
              the latest technologies.
            </p>
          </Description>
        </PhotoContainer>

        <PhotoContainer data-aos='fade-up' data-aos-delay='300'>
          <Description>
            <h2>🎯 Skills</h2>
            <IconContainer>
              {htmlIcon}
              {cssIcon}
              {javaScript}
              {reactIcon}
              {nodeIcon}
              {expressIcon}
            </IconContainer>
            <p>
              I use modern languages, frameworks, and libraries to build web
              applications. Some include HTML, CSS, Javascript and have
              experience building applications using React, Node JS, and Express
              JS. I strive to improve my skills and learning new technologies.
            </p>
          </Description>
        </PhotoContainer>

        <PhotoContainer data-aos='fade-up' data-aos-delay='400'>
          <Description>
            <h2>🎓 Education</h2>
            <p>
              I graduated from Kennesaw State University with a major in
              Information Technology. My studies were focused on software
              development, data communications, wireless security, & mobile
              applications.
            </p>
          </Description>
        </PhotoContainer>

        <PhotoContainer data-aos='fade-up' data-aos-delay='500'>
          <img src={myPhoto4} alt='me' />
        </PhotoContainer>
      </AboutInnerContainer>
    </AboutContainer>
  );
}

const IconContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
`;

const AboutContainer = styled.div`
  max-width: 1024px;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const AboutInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  border-radius: 10px;
  border-radius: 10px;
  margin-bottom: 13rem;
`;

const PhotoContainer = styled.div`
  background-color: white;
  height: 25rem;
  width: 18rem;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;

  > img {
    padding-top: 6rem;
    padding-right: 1rem;
    width: 120%;
  }

  > p {
    padding: 1rem;
  }
`;

const Description = styled.div`
  padding: 1.5rem;
  height: 100%;

  > h2 {
    font-size: 1.5rem;
  }

  > p {
    margin-top: 0.5rem;
  }
`;
