import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'

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
});

const Amenities = () => {

  const classes = useStyles();

  return (
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    className={classes.fontStyling}
  >
      <h1>Below are some amenities you'll find while staying with us:</h1>
      <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum eligendi facere asperiores dicta tempore quo in mollitia quia, ex doloremque accusantium dolor nostrum tenetur unde aliquid eveniet pariatur doloribus rerum?</h3>
  </Grid>
  )
}

export default Amenities;