import { Typography } from '@material-ui/core';

const projectData = [
  {
    image: 'https://i.ibb.co/qyLv7x8/the-social-network.png',
    name: 'The Social Network',
    code: 'https://github.com/Volodymyrquo/the-social-network',
    liveDemo: 'https://volodymyrquo.github.io/the-social-network/',
    description: () => (
      <Typography variant='body2' color='textSecondary' component='p'>
        Single page application based on FLUX architecture. In the project is
        used technologies: ReactJS, Material-UI, Redux, Redux-Thunk, Redux-Form,
        React hooks, Axios, TDD.
      </Typography>
    ),
  },
  {
    image: 'https://i.ibb.co/7X54D0Q/phone-store.png',
    name: 'Phone store e-commerce',
    code: 'https://github.com/Volodymyrquo/phone-store-e-commerce',
    liveDemo: 'https://vquo-phone-store-gh.netlify.app/',
    description: () => (
      <Typography variant='body2' color='textSecondary' component='p'>
        Phone store e-commerce developed on React, Bootstrap and Styled
        Components. As a payment system in this store is using PayPal that
        realized with React-paypal-express-checkout.{' '}
      </Typography>
    ),
  },
  {
    image: 'https://i.ibb.co/7KBv9RQ/personal-site.png',
    name: 'My personal portfolio site',
    code: 'https://github.com/Volodymyrquo/portfolio-react-mui',
    liveDemo: 'https://www.volodymyr-basok.pp.ua/',
    description: () => (
      <Typography variant='body2' color='textSecondary' component='p'>
        My personal portfolio site developed using React and Material UI . That
        is a good example of a demonstration on how to implement two
        technologies (React & Material UI).
      </Typography>
    ),
  },
  {
    image: 'https://i.ibb.co/fXSqFC2/pwa-weather.png',
    name: 'PWA Weather Application',
    code: 'https://github.com/Volodymyrquo/pwa-weather',
    liveDemo: 'https://vquo-weather-gh.netlify.app/',
    description: () => (
      <Typography variant='body2' color='textSecondary' component='p'>
        This is a PWA developed using React. I created custom service workers
        and used a JSON Manifest. Progressive Web Apps provide a unique
        opportunity to deliver a web experience users will love. Using the
        latest web features to bring native-like capabilities and reliability,
        Progressive Web Apps allow to be installed by anyone, anywhere, on any
        device with a single codebase.{' '}
      </Typography>
    ),
  },
  {
    image: 'https://i.ibb.co/s33PdHR/covid19-tracker.png',
    name: 'Covid19 Tracker/Stats React App',
    code: 'https://github.com/Volodymyrquo/covid19-tracker',
    liveDemo: 'https://vquo-covid19-tracker-gh.netlify.app/',
    description: () => (
      <Typography variant='body2' color='textSecondary' component='p'>
        COVID19 Tracker React Application with the addition of Charts.js, Axios,
        Material UI, and many different modules. The project is fetching the
        live data from the API using Async/Await syntax and than displayed cards
        with statistics as well as Charts. This project/application is created
        using the most modern JavaScript syntax and use Material UI, Charts.js,
        React Hooks, API data fetching, all of it in React JS.
      </Typography>
    ),
  },
  {
    image: 'https://i.ibb.co/71Fvpqt/youtube-api.png',
    name: 'YouTube API',
    code: 'https://github.com/Volodymyrquo/youtube-api',
    liveDemo: 'https://vquo-youtube-api-md.netlify.app/',
    description: () => (
      <Typography variant='body2' color='textSecondary' component='p'>
        YouTube Clone Application developed on React. This project covers a lot
        of concepts that appear often in reactjs workflow: lifecycle methods,
        project structure, destructuring, state management, passing props from
        parent to child components, API calls and much more.'
      </Typography>
    ),
  },
];

export default projectData;
