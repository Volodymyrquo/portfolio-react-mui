import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Icon } from '@iconify/react';
import codersrankIcon from '@iconify-icons/simple-icons/codersrank';

const useStyles = makeStyles({
  icon: {
    color: 'tan',
    fontSize: '1.5rem',
    '&:hover': {
      color: 'tomato',
      fontSize: '1.8rem',
    },
  },
});

const CodersRankIcon = () => {
  const classes = useStyles();
  return <Icon className={classes.icon} icon={codersrankIcon} />;
};

export default CodersRankIcon;
