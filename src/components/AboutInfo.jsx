import React from 'react';
import { Link } from 'react-router-dom';
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
  SiMaterialui,
} from 'react-icons/si';
import { FiDownload } from 'react-icons/fi';

const reactIcon = <FaReact className='project-icon react rotate' />;
const cssIcon = <SiCss3 className='project-icon css' />;
const htmlIcon = <SiHtml5 className='project-icon html' />;
const javaScript = <SiJavascript className='project-icon javascript' />;
const nodeIcon = <SiNodedotjs className='project-icon node' />;
const expressIcon = <SiExpress className='project-icon' />;
const materialIcon = <SiMaterialui className='project-icon material-ui' />;
const tailwinIcon = <SiTailwindcss className='project-icon tailwind-icon' />;
const firebaseIcon = <SiFirebase className='project-icon firebase' />;

export default function AboutInfo() {
  return (
    <AboutContainer>
      <AboutInnerContainer data-aos='fade-up'>
        <PhotoContainer>
          <img src={myPhoto4} alt='me' />
        </PhotoContainer>

        <DescContainer>
          <Description>
            {/* <h2>I'm Nelson Guerra</h2> */}
            <h2>Nelson Guerra</h2>
            <p>
              An Army Veteran & Software Developer with a passion for
              technology. I consider myself a 'forever student' eager to both
              build on my academic foundations in web development and to stay in
              tune with the latest technologies.
              <br />
            </p>
          </Description>
        </DescContainer>
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
  margin-top: 2rem;
`;

const AboutInnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  border-radius: 10px;
  margin-bottom: 13rem;
`;

const PhotoContainer = styled.div`
  height: 24rem;
  width: 18rem;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: center;
  object-fit: cover;

  > img {
    margin: auto;
    width: 120%;
  }
`;

const DescContainer = styled.div`
  background-color: white;
  max-width: 40rem;
  /* line-height: 2.5rem; */
  margin: 0 1rem;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Description = styled.div`
  padding: 1.5rem;

  > h2 {
    font-size: 2rem;
    color: #333;
  }

  > p {
    margin-top: 0.5rem;
    font-size: 1.5rem;
    color: #333;
  }
`;
