import { FaReact } from 'react-icons/fa';
import styled from 'styled-components';
import { SiFirebase, SiNetlify, SiCss3, SiTesla } from 'react-icons/si';

const reactIcon = <FaReact className='project-icon react rotate' />;
const firebaseIcon = <SiFirebase className='project-icon firebase' />;
const netlifyIcon = <SiNetlify className='project-icon netlify' />;
const cssIcon = <SiCss3 className='project-icon css' />;

const TeslaLogo = styled(SiTesla)``;

const projects = [
  {
    id: 1,
    icon: [reactIcon, firebaseIcon],
    title: `Andromeda-Chat-App`,
    description:
      '🚀 Andromeda Chat is an application built using React, Redux, Styled Components, and hosted with Firebase. It also contains user authentication and allows the user to sign-in with Google.',
    liveUrl: 'https://slack-2-react-clone.web.app',
    githubUrl:
      'https://github.com/Nelson-Guerra-Tech/React-Slack-2.0/tree/main/slack-2-react',
    img: '',
  },
  {
    id: 2,
    icon: [reactIcon, netlifyIcon],
    title: 'Tesla-Update-Design',
    description:
      '⚡️ 🚘 🔋 This is an updated version of the Tesla site, built using React, Redux for car information, and animation on scroll. Giving the site a modern design.',
    liveUrl: 'https://react-tesla-updated-design.netlify.app/#model3',
    githubUrl:
      'https://github.com/Nelson-Guerra-Tech/Tesla-Redesign-App/tree/main/tesla-clone',
    img: '',
  },
  {
    id: 3,
    icon: [reactIcon, netlifyIcon],
    title: `Netflix-Clone-App`,
    description:
      '🍿 This app was built using the TMDB API & React to recreate a modern version of Netflix. The user can also click on a movie or show image and watch the trailer.',
    liveUrl: 'https://netflix-react-api-clone.netlify.app/',
    githubUrl:
      'https://github.com/Nelson-Guerra-Tech/React-Movie-App/tree/main/react-movie-app',
    img: '',
  },
  {
    id: 4,
    icon: reactIcon,
    title: 'E-Commerce-React-App',
    description:
      'This app was built using the TMDB API and React to recreate the Netflix app.',
    liveUrl: '',
    githubUrl: '',
    img: '',
  },
  {
    id: 5,
    icon: reactIcon,
    title: 'Budget-Tracker-React-App',
    description:
      'This app was built using the TMDB API and React to recreate the Netflix app.',
    liveUrl: '',
    githubUrl: '',
    img: '',
  },
  {
    id: 6,
    icon: reactIcon,
    title: 'Fullstack-React-App',
    description:
      'This app was built using the TMDB API and React to recreate the Netflix app.',
    liveUrl: '',
    githubUrl: '',
    img: '',
  },
];

export default projects;
