import React from 'react';
import { Typography, Grid, Avatar, Box } from '@material-ui/core';
import avatar from '../../me.jpg';
import Typed from 'react-typed';
import useStyles from './styles';

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
          strings={[
            'React JS',
            'Redux',
            'Context',
            'Material UI',
            'Bootstrap',
            'Styled Components',
            'Axios Rest API',
            'JavaScript ES6',
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
