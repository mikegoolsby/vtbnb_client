import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core'
import mtsnowdrone from '../images/mtsnowdrone.jpg'
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
  image: {
    height: 250,
    width: 'auto',
    borderStyle: 'solid',
    borderColor: 'white'
  }
});

const Home = () => {

  const classes = useStyles();

  return (
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    className={classes.fontStyling}
  >
      <h1>Welcome to Vermont & the Canyon Run Lodge!</h1>
      <Box borderRight={0}>
        <img src={mtsnowdrone} className={classes.image} alt="aerial drone shot of mount snow in dover, vermont"></img>
      </Box>
      <h3>Whether you're joining us for the first time, or you are a seasoned expert and have bragged about this place to your friends, we're so excited to have you. Please use this app as your official guide to your stay! First up, the Wifi information. You'll find this at the bottom of every page, including this one. The network name is first, followed by the password.</h3>
      <Footer/>
  </Grid>
  )
}

export default Home;