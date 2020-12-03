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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
          rem tempore distinctio rerum et aliquid quasi unde maiores officia
          inventore eaque cumque dolore labore at expedita tenetur deleniti
          atque quam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Minus ab cumque quidem, itaque ipsa sequi? Eaque dolorem consequuntur
          libero, ab amet inventore eveniet quisquam maiores et sed facere unde
          praesentium.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
