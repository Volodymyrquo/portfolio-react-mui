import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import useStyles, { InputField } from './styles';

const Contacts = () => {
  const classes = useStyles();

  return (
    <Box component='div' style={{ background: '#233', height: '100vh' }}>
      <Grid container justify='center'>
        <Box component='form' className={classes.form}>
          <Typography
            variant='h5'
            style={{
              color: 'tomato',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            hire or contact me...
          </Typography>
          <form noValidate autoComplete='off' name='contact' method='post'>
            {/* hidden input added for netlify to send message */}
            <input type='hidden' name='form-name' value='contact' />
            <InputField
              fullWidth={true}
              label='Name'
              name='name'
              variant='outlined'
              inputProps={{ style: { color: 'white' } }}
              margin='dense'
              size='medium'
            />
            <br />
            <InputField
              fullWidth={true}
              name='email'
              label='Email'
              variant='outlined'
              inputProps={{ style: { color: 'white' } }}
              margin='dense'
              size='medium'
            />
            <br />
            <InputField
              fullWidth={true}
              label='Company name'
              variant='outlined'
              inputProps={{ style: { color: 'white' } }}
              margin='dense'
              size='medium'
            />
            <br />
            <InputField
              fullWidth={true}
              multiline
              rows={4}
              label='Your message'
              variant='outlined'
              inputProps={{ style: { color: 'white' } }}
              margin='dense'
              size='medium'
            />
            <br />
            <Button
              type='submit'
              className={classes.button}
              variant='outlined'
              fullWidth={true}
              endIcon={<SendIcon />}
            >
              contact me
            </Button>
          </form>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
