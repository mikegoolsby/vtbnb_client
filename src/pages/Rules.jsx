import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
  fontStyling: {
    fontFamily: [
      'Yanone Kaffeesatz',
      'sans-serif',
    ].join(',')
  },
});


const Rules = () => {
  const classes = useStyles();
  return (
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
  >
      <h1 className={classes.fontStyling}>This is the rules page</h1>
  </Grid>)
}

export default Rules;