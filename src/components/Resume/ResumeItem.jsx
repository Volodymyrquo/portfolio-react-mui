import { Box, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const ResumeItem = ({ year, position, company, experience }) => {
  const classes = useStyles();
  return (
    <>
      <Box component='div' className={classes.timeLineItem}>
        <Typography variant='h5' align='center' className={classes.subHeading}>
          {position}
        </Typography>
        <Typography variant='body1' align='center' style={{ color: 'tomato' }}>
          {company}
        </Typography>
        <Typography variant='subtitle1' align='center' style={{ color: 'tan' }}>
          {experience}
        </Typography>
      </Box>
      <Typography
        variant='h2'
        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
      >
        {year}
      </Typography>
    </>
  );
};

export default ResumeItem;
