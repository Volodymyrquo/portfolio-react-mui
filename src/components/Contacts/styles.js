import { TextField } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  form: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
  },
  button: { marginTop: '1rem', color: 'tomato', borderColor: 'tomato' },
}));

export const InputField = withStyles({
  root: {
    '& label.Mui-focused': { color: 'tomato' },
    '& label': { color: 'tan' },
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'tan' },
      '&:hover fieldset': { borderColor: 'tan' },
      '&.Mui-focused fieldset': { borderColor: 'tan' },
    },
  },
})(TextField);
