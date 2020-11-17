import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Grid, Avatar } from '@material-ui/core';
import avatar from '../../me.jpg';
import Typed from 'react-typed';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: { color: 'tomato' },
  subtitle: { color: 'tan' },
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    textAlign: 'center',
    zIndex: 1,
  },
}));
const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify='center'>
        <Avatar src={avatar} alt='Volodymyr Basok' className={classes.avatar} />
      </Grid>
      <Typography className={classes.title} variant='h4'>
        <Typed strings={['Volodymyr Basok']} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant='h5'>
        <Typed
          strings={['React JS', 'Redux', 'Material UI']}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
