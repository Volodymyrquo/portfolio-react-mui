import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
const useStyles = makeStyles({
  cardContainer: { maxWidth: 400, margin: '4rem auto' },
});

const Project = ({ image }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Project 1'
            height='200'
            image={image}
          />
          <CardContent>
            <Typography gutterBottom variant='h5'>
              Project 1
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nam molestiae perspiciatis aut velit est a, modi
              reprehenderit mollitia fugit fugiat cumque non deserunt voluptatem
              eligendi accusamus veniam temporibus! Eum?
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            code
          </Button>
          <Button size='small' color='primary'>
            Live Demo
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Project;
