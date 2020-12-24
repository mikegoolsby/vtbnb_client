import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import WifiIcon from '@material-ui/icons/Wifi';
import { Grid } from '@material-ui/core'

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
      <p>The Escape to Mount Snow application&#169;, which is what you're currently using of course, is what we've provided to you free of charge. It contains resources, who to contact in case of various situations, and of course, the <WifiIcon/> password at the bottom of every screen.</p>
  </Grid>
  )
}

export default Procedures;