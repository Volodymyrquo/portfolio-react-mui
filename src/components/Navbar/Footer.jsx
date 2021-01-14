import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import Facebook from '@material-ui/icons/Facebook';
import CodeIcon from '@material-ui/icons/Code';
import { Icon, InlineIcon } from '@iconify/react';
import codersrankIcon from '@iconify-icons/simple-icons/codersrank';
import CodersRankIcon from './CodersRankIcon';

const useStyles = makeStyles({
  root: {
    '& .MuiBottomNavigationAction-root': { minWidth: 0, maxWidth: 250 },
    '& .MuiSvgIcon-root': {
      fill: 'tan',
      '&:hover': { fill: 'tomato', fontSize: '1.8rem' },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width='auto' style={{ background: '#222' }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<GitHub />}
        href='https://github.com/Volodymyrquo'
        target='_blank'
      />

      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<LinkedIn />}
        href='https://www.linkedin.com/in/volodymyr-basok/'
        target='_blank'
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<CodersRankIcon />}
        href='https://profile.codersrank.io/user/volodymyrquo/'
        target='_blank'
      />
    </BottomNavigation>
  );
};

export default Footer;
