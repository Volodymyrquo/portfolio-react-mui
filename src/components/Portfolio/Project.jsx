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
  cardContainer: { maxWidth: 500, margin: '5rem auto' },
});

const Project = ({ image, name, code, liveDemo }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={8} md={6}>
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Project 1'
            //height='250'
            image={image}
          />
          <CardContent>
            <Typography gutterBottom variant='h5'>
              {name}
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
          <Button size='small' color='primary' href={code} target='_blank'>
            code
          </Button>
          <Button size='small' color='primary' href={liveDemo} target='_blank'>
            Live Demo
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Project;
