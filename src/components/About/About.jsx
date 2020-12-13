import { Box, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const About = () => {
  const classes = useStyles();
  return (
    <Box component='div' className={classes.root}>
      <Box className={classes.about}>
        <Typography variant='h4' className={classes.header}>
          about me
        </Typography>
        <Typography variant='subtitle1' className={classes.article}>
          I am an enthusiastic and well-motivated person strongly interested in
          Software Development processes and advanced technologies. I am well
          familiar with such technologies as ReactJS, JavaScript, HTML, CSS, I
          have an experience in using such tools as Git, Material-UI and keep
          learning them. I work well both independently and with other
          cross-functional teams.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
