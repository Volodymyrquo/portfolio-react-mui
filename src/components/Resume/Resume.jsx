import React from 'react';
import { Typography, Box } from '@material-ui/core';
import useStyles from './styles';
import ResumeItem from './ResumeItem';
import { workingExperience } from '../../assets/utilities/workingExperience';

const Resume = () => {
  const classes = useStyles();

  return (
    <div>
      <>
        <Box component='header' className={classes.mainContainer}>
          <Typography variant='h4' align='center' className={classes.heading}>
            working experience
          </Typography>

          <Box component='div' className={classes.timeLine}>
            {workingExperience.map((item, index) => (
              <ResumeItem key={index} {...item} />
            ))}
          </Box>
        </Box>
      </>
    </div>
  );
};

export default Resume;
