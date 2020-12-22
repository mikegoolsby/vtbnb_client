import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core'
import townhouse from '../images/townhouse.jpg'

const useStyles = makeStyles({
  fontStyling: {
    fontFamily: [
      'Yanone Kaffeesatz',
      'sans-serif',
    ].join(','),
    fontWeight: 300,
    fontSize: 30,
    textAlign: 'center'
  },
  image: {
    height: 500,
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
      <h1>Welcome to Vermont!</h1>
      <Box borderRight={0}>
        <img src={townhouse} className={classes.image}></img>
      </Box>
      <h3>Whether you're joining us for the first time, or you are a seasoned expert and have bragged about this place to your friends, we're so excited to have you.</h3>
  </Grid>
  )
}

export default Home;