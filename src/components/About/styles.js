import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    background: '#233',
    height: '100vh',
  },
  about: {
    paddingTop: theme.spacing(15),
    width: '50%',
    margin: 'auto',
  },
  header: {
    textAlign: 'center',
    textTransform: 'capitalize',
    color: 'tomato',
  },
  article: {
    color: 'tan',
    textAlign: 'justify',
    marginTop: theme.spacing(2),
  },
}));
