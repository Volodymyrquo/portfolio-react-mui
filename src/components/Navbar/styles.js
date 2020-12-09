import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  menuSliderContainer: { width: 250, background: '#511', height: '100%' },
  avatar: {
    display: 'auto',
    margin: '0.5rem auto',
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
  listItem: {
    color: 'tan',
  },
}));
