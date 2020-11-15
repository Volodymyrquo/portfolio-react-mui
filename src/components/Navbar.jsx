import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  IconButton,
  ListItemIcon,
} from '@material-ui/core';
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from '@material-ui/icons';
import avatar from '../avatar.png';

//CSS STYLES

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: { width: 250, background: '#511', height: '30rem' },
  avatar: {
    display: 'auto',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.menuSliderContainer} component='div'>
        <Avatar className={classes.avatar} src={avatar} alt='Volodymyr Basok' />
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon></ListItemIcon>
          </ListItem>
        </List>
      </Box>
      <Box component='nav'>
        <AppBar position='static' style={{ background: '#222' }}>
          <Toolbar>
            <IconButton>
              <ArrowBack style={{ color: 'tomato' }} />
            </IconButton>
            <Typography variant='h5' style={{ color: 'tan' }}>
              Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
