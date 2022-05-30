import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import WifiIcon from '@material-ui/icons/Wifi';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ski from '../images/ski.jpg'
import Footer from '../components/Footer';

const useStyles = makeStyles({
  fontStyling: {
    fontFamily: [
      'Yanone Kaffeesatz',
      'sans-serif',
    ].join(','),
    fontWeight: 300,
    fontSize: 30,
    textAlign: 'center',
    padding: '8px'
  },
  root: {
      margin: 20,
      width: '75%',
  },
  media: {
    height: 200,
  },
});

const Procedures = () => {

  const classes = useStyles();

  return (
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    className={classes.fontStyling}
  >
      <h1>Check-in & Check-out</h1>
      <p>The official Airbnb&#169; app will be your starting point for checking in. You'll ensure your stay is confirmed and communicate with us through that application.</p>
      <br/>
      <p>The Escape to Mount Snow application&#169;, which is what you're currently using of course, is what we've provided to you free of charge. It contains resources, who to contact in case of various situations, and of course, the <WifiIcon/> network and password at the bottom of every screen.</p>
      <br/>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ski}
          title="skiing"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.fontStyling}>
            Check-In & Day 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.fontStyling}>
              Check in using the official Airbnb&#169; app and then, once you're settled, hop on the Moover and get out on the slopes! The mover stops right outside between our building and the next building over. Click below for transit information.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://www.moover.com/routes-timetables/mount-snow" target="_blank">
          Moover
        </Button>
        <Button size="small" color="primary" href="https://www.airbnb.com/" target="_blank">
          Airbnb&#169;
        </Button>
      </CardActions>
    </Card>
      <Footer/>
  </Grid>
  )
}

export default Procedures;