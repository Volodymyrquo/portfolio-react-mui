import React from 'react';
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import useStyles from './styles';
import avatar from '../../me.jpg';
import { Link } from 'react-router-dom';
import { AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';

const menuItems = [
  { listIcon: <Home />, listText: 'Home', listPath: '/' },
  { listIcon: <AssignmentInd />, listText: 'Resume', listPath: '/resume' },
  { listIcon: <Apps />, listText: 'Portfolio', listPath: '/portfolio' },
  { listIcon: <ContactMail />, listText: 'Contacts', listPath: '/contacts' },
];

const SideList = ({ slider, toggleSlider }) => {
  const classes = useStyles();
  return (
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
};

export default SideList;
