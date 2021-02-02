import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Collapse} from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    maxWidth: 545,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 340,
    '&:hover': {
        zoom: '1.1',
    },
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  description: {
      fontSize: '1.1rem',
      color: '#ddd',
  },
  book: {
    backgroundColor: '#5AFF3D',
    borderRadius: '0.3rem',
    padding: '0 auto',
    margin: '10px',
    fontWeight: 'bold',
    width: '100px',
    '&:hover': {
        backgroundColor: '#ddd',
    },
  },
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} 
    {...(checked ? { timeout: 1000 } : {})} 
    >
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography 
          gutterBottom 
          variant="h5" 
          component="h1" 
          className={classes.title}
          >
            {place.title}
          </Typography>
          <Typography 
          variant="body2" 
          color="textSecondary" 
          component="p"
          className={classes.description}
          >
           {place.description}
          </Typography>
        </CardContent>
        <Button className={classes.book}>Book</Button>
    </Card>
    </Collapse>
  );
}