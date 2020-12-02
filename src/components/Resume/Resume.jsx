import React from 'react';
import { Typography, Box } from '@material-ui/core';
import useStyles from './styles';

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
            <Typography
              variant='h2'
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2013
            </Typography>
            <Box component='div' className={classes.timeLineItem}>
              <Typography
                variant='h5'
                align='center'
                className={classes.subHeading}
              >
                react js
              </Typography>
              <Typography
                variant='body1'
                align='center'
                style={{ color: 'tomato' }}
              >
                company name where worked
              </Typography>
              <Typography
                variant='subtitle1'
                align='center'
                style={{ color: 'tan' }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                totam omnis quisquam perspiciatis alias voluptatibus fugiat
                velit ea reprehenderit harum.
              </Typography>
            </Box>
            <Typography
              variant='h2'
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2014
            </Typography>
            <Box component='div' className={classes.timeLineItem}>
              <Typography
                variant='h5'
                align='center'
                className={classes.subHeading}
              >
                redux
              </Typography>
              <Typography
                variant='body1'
                align='center'
                style={{ color: 'tomato' }}
              >
                company name where worked
              </Typography>
              <Typography
                variant='subtitle1'
                align='center'
                style={{ color: 'tan' }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                totam omnis quisquam perspiciatis alias voluptatibus fugiat
                velit ea reprehenderit harum.
              </Typography>
            </Box>
            <Typography
              variant='h2'
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2015
            </Typography>
            <Box component='div' className={classes.timeLineItem}>
              <Typography
                variant='h5'
                align='center'
                className={classes.subHeading}
              >
                javascript full stack
              </Typography>
              <Typography
                variant='body1'
                align='center'
                style={{ color: 'tomato' }}
              >
                company name where worked
              </Typography>
              <Typography
                variant='subtitle1'
                align='center'
                style={{ color: 'tan' }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                totam omnis quisquam perspiciatis alias voluptatibus fugiat
                velit ea reprehenderit harum.
              </Typography>
            </Box>
            <Typography
              variant='h2'
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2016
            </Typography>
            <Box component='div' className={classes.timeLineItem}>
              <Typography
                variant='h5'
                align='center'
                className={classes.subHeading}
              >
                mern full stack
              </Typography>
              <Typography
                variant='body1'
                align='center'
                style={{ color: 'tomato' }}
              >
                company name where worked
              </Typography>
              <Typography
                variant='subtitle1'
                align='center'
                style={{ color: 'tan' }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                totam omnis quisquam perspiciatis alias voluptatibus fugiat
                velit ea reprehenderit harum.
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    </div>
  );
};

export default Resume;
