import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
  fontStyling: {
    fontFamily: [
      'Yanone Kaffeesatz',
      'sans-serif',
    ].join(','),
    fontWeight: 300
  },
});

const Home = () => {

  const classes = useStyles();

  return (
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
  >
      <h1 className={classes.fontStyling}>Welcome to your home away from home!</h1>
      <h3 className={classes.fontStyling}>Whether you're joining us for the first time, or you are a seasoned expert and have bragged about this place to your friends, we're so excited to have you.</h3>
  </Grid>
  )
}

export default Home;