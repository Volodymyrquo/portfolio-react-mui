import React from 'react';
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  particlesCanva: { position: 'absolute', opacity: '0.3' },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45,

              density: { enable: true, value_area: 900 },
            },
            shape: { type: 'circle', stroke: { width: 1, color: 'tomato' } },
            size: {
              value: 8,
              random: true,
              anim: { enable: true, speed: 6, size_min: 0.1, sync: true },
            },
            opacity: {
              value: 1,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.1, sync: true },
            },
          },
        }}
      />
    </div>
  );
};

export default Home;
