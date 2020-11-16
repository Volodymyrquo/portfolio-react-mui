import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
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
import avatar from '../me.JPG';
import Footer from './Footer';

//CSS STYLES

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: { width: 250, background: '#511', height: '100%' },
  avatar: {
    display: 'auto',
    margin: '0.5rem auto',
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  listItem: {
    color: 'tan',
  },
}));
const menuItems = [
  { listIcon: <Home />, listText: 'Home', listPath: '/' },
  { listIcon: <AssignmentInd />, listText: 'Resume', listPath: '/resume' },
  { listIcon: <Apps />, listText: 'Portfolio', listPath: '/portfolio' },
  { listIcon: <ContactMail />, listText: 'Contacts', listPath: '/contacts' },
];

const Navbar = () => {
  const [state, setState] = useState({ right: false });
  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();
  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component='div'
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt='Volodymyr Basok' />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              primary={lsItem.listText}
              className={classes.listItem}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component='nav'>
        <AppBar position='static' style={{ background: '#222' }}>
          <Toolbar>
            <IconButton onClick={toggleSlider('right', true)}>
              <ArrowBack style={{ color: 'tomato' }} />
            </IconButton>
            <Typography variant='h5' style={{ color: 'tan' }}>
              Portfolio
            </Typography>
            <MobilRightMenuSlider
              anchor='right'
              open={state.right}
              onClose={toggleSlider('right', false)}
            >
              {sideList('right')}
              <Footer />
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
