import { FaReact } from 'react-icons/fa';
import { SiFirebase, SiNetlify, SiCss3 } from 'react-icons/si';

const reactIcon = <FaReact className='project-icon react rotate' />;
const firebaseIcon = <SiFirebase className='project-icon firebase' />;
const netlifyIcon = <SiNetlify className='project-icon netlify' />;
const cssIcon = <SiCss3 className='project-icon css' />;

const projects = [
  {
    id: 1,
    icon: [reactIcon, netlifyIcon],
    title: `Netflix-Clone-React-App`,
    description:
      '🍿 This app was built using the TMDB API & React to recreate a modern version of Netflix. The user can also click on a movie or show image and watch the trailer.',
    liveUrl: 'https://netflix-react-api-clone.netlify.app/',
    githubUrl:
      'https://github.com/Nelson-Guerra-Tech/React-Movie-App/tree/main/react-movie-app',
    img: '',
  },
  {
    id: 2,
    icon: reactIcon,
    title: 'Realtime-Chat-App',
    description:
      'This app was built using the TMDB API and React to recreate the Netflix app.',
    liveUrl: '',
    githubUrl: '',
    img: '',
  },
  {
    id: 3,
    icon: reactIcon,
    title: 'Airbnb-Clone-App',
    description:
      'This app was built using the TMDB API and React to recreate the Netflix app.',
    liveUrl: '',
    githubUrl: '',
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
