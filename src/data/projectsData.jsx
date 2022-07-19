import { FaReact } from 'react-icons/fa';
import styled from 'styled-components';
import { SiFirebase, SiNetlify, SiCss3, SiTesla } from 'react-icons/si';

const reactIcon = <FaReact className='project-icon react rotate' />;
const firebaseIcon = <SiFirebase className='project-icon firebase' />;
const netlifyIcon = <SiNetlify className='project-icon netlify' />;
const cssIcon = <SiCss3 className='project-icon css' />;

const projects = [
  {
    id: 1,
    icon: [reactIcon],
    title: `Wordle-Game-Clone`,
    description:
      '🔎 It is a Wordle game clone, made with React. The goal of this project is to practice basic React fundamentals using useEffect, useState, and creating custom hooks. The game uses random words API and axios to fetch data.',
    liveUrl: 'https://react-wordle-updated-clone.netlify.app/',
    githubUrl: 'https://github.com/Nelson-Guerra-Tech/wordle-clone',
    img: 'https://github.com/Nelson-Guerra-Tech/wordle-clone/raw/main/public/social-image.png',
  },
  {
    id: 2,
    icon: [reactIcon, firebaseIcon],
    title: `Milky-Way-Dev`,
    description:
      '🪐 🚀 It is a React application for developers to manage project with groups or a team. The app uses Firebase as a backend for user authentication. . The user can add a project, comment on projects, mark project as complete, and see users online/offline.',
    liveUrl: 'https://andromeda-management.web.app/login',
    githubUrl: 'https://github.com/Nelson-Guerra-Tech/andromeda-management',
    img: 'https://github.com/Nelson-Guerra-Tech/andromeda-management/raw/main/public/social-image.png',
  },
  {
    id: 3,
    icon: [reactIcon, firebaseIcon],
    title: 'React-Expense-Tracker-App',
    description:
      '🌎 💰 It is a React application for users to track their expenses. The expense tracker uses Firebase as the backend and allows users to create their own account by email and password, that way each user can privately track expenses.',
    liveUrl: 'https://expense-tracker-3fa3a.web.app/login',
    githubUrl: 'https://github.com/Nelson-Guerra-Tech/Finance-Tracker',
    img: 'https://github.com/Nelson-Guerra-Tech/Finance-Tracker/raw/main/public/social-image.png',
  },
  {
    id: 4,
    icon: [reactIcon],
    title: `Netflix-Clone-App`,
    description:
      '🍿 This app was built using the TMDB API & React to recreate a modern version of Netflix. The user can also click on a movie or show image and watch the trailer. This app was build using React and styled components.',
    liveUrl: 'https://netflix-react-api-clone.netlify.app/',
    githubUrl:
      'https://github.com/Nelson-Guerra-Tech/React-Movie-App/tree/main/react-movie-app',
    img: 'https://user-images.githubusercontent.com/62409790/177017120-d05b5081-1b00-44a5-a4f6-5af3fc665031.png',
  },
  {
    id: 5,
    icon: [reactIcon],
    title: 'Tesla-Update-Design',
    description:
      '⚡️ 🚘 🔋 This is an updated version of the Tesla site, built using React, Redux for car information, and animation on scroll. The goal for this application was design and build a modern website using modern web technologies and techniques.',
    liveUrl: 'https://react-tesla-updated-design.netlify.app/#model3',
    githubUrl:
      'https://github.com/Nelson-Guerra-Tech/Tesla-Redesign-App/tree/main/tesla-clone',
    img: 'https://user-images.githubusercontent.com/62409790/177016945-ccfd4041-d724-4109-9e67-fa396db347df.png',
  },
  {
    id: 6,
    icon: [reactIcon],
    title: `Github-Finder-API`,
    description:
      '🔎 Github Finder is an application that uses the Github API to find github users and has user authentication. The user is able to sign-in using their github or google account. It was build using React, Axios for fetching data from the API, and styled components.',
    liveUrl: 'https://react-github-finder-api.netlify.app/login',
    githubUrl:
      'https://github.com/Nelson-Guerra-Tech/Github-API-Project/tree/main',
    img: 'https://user-images.githubusercontent.com/62409790/177017194-1d2666a2-e367-494f-8386-b910fd26013a.png',
  },
];

export default projects;
