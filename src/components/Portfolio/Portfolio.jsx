import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import Project from './Project';

const useStyles = makeStyles({
  mainContainer: { background: '#233', height: '100%' },
});

const projectImages = [
  'https://i.ibb.co/qyLv7x8/the-social-network.png',
  'https://i.ibb.co/s33PdHR/covid19-tracker.png',
  'https://i.ibb.co/71Fvpqt/youtube-api.png',
  'https://i.ibb.co/fXSqFC2/pwa-weather.png',
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component='div' className={classes.mainContainer}>
      <Grid container justify='center'>
        {projectImages.map((image, key) => (
          <Project key={key} image={image} />
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
