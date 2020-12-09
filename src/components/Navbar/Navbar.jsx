import React, { useState } from 'react';
import MobilLeftMenuSlider from '@material-ui/core/Drawer';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Footer from './Footer';
import SideList from './SideList';

const Navbar = () => {
  const [state, setState] = useState({ left: false });
  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  return (
    <>
      <Box component='nav'>
        <AppBar position='fixed' style={{ background: '#222' }}>
          <Toolbar>
            <IconButton onClick={toggleSlider('left', true)}>
              <MenuIcon style={{ color: 'tomato' }} />
            </IconButton>

            <Typography variant='h5' style={{ color: 'tan' }}>
              Menu
            </Typography>

            <MobilLeftMenuSlider
              anchor='left'
              open={state.left}
              onClose={toggleSlider('left', false)}
            >
              <SideList slider='left' toggleSlider={toggleSlider} />

              <Footer />
            </MobilLeftMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
