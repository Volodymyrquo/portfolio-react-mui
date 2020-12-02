import React, { useState } from 'react';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
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
  const [state, setState] = useState({ right: false });
  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  return (
    <>
      <Box component='nav'>
        <AppBar position='fixed' style={{ background: '#222' }}>
          <Toolbar>
            <IconButton onClick={toggleSlider('right', true)}>
              <MenuIcon style={{ color: 'tomato' }} />
            </IconButton>

            <Typography variant='h5' style={{ color: 'tan' }}>
              Menu
            </Typography>

            <MobilRightMenuSlider
              anchor='right'
              open={state.right}
              onClose={toggleSlider('right', false)}
            >
              <SideList slider='right' toggleSlider={toggleSlider} />

              <Footer />
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
