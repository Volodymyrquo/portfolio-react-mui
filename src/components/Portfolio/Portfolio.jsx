import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import Project from './Project';
import projectData from './projectData';

const useStyles = makeStyles({
  mainContainer: { background: '#233', height: '100%', marginTop: '3rem' },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component='div' className={classes.mainContainer}>
      <Grid container justify='center'>
        {projectData.map((item, key) => (
          <Project key={key} {...item} />
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
