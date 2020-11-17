import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainContainer: { background: '#233' },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',
    '&:before': {
      content: '""',
      position: 'absolute',
      height: '100%',
      border: '1px solid tan',
      right: '40px',
      top: 0,
    },
    '&:after': { content: '""', display: 'table', clear: 'both' },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': { left: 'calc(50% - 1px)', right: 'auto' },
    },
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': { content: '""', position: 'absolute' },
    '&:before': {
      content: '""',
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50%-5px)',
      borderStyle: 'solid',
      borderColor: 'tomato tomato transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'tan',
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent tomato tomato',
      },
    },
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    background: 'tomato',
    color: 'white',
    lineHeight: 1,
    padding: '0.5rem 0 1rem',
    '&:before': { display: 'none' },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': { float: 'none', margin: '0 auto' },
    },
  },
  heading: { color: 'tomato', padding: '3rem 0', textTransform: 'uppercase' },
  subHeading: { color: 'white', padding: '0', textTransform: 'uppercase' },
}));
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
