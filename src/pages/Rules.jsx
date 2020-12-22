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
    fontSize: 50,
    listStyleType: 'square',
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
    <ul className={classes.fontStyling}>
      <li>rule 1</li>
      <li>rule 1</li>
      <li>rule 1</li>
      <li>rule 1</li>
      <li>rule 1</li>
      <li>rule 1</li>
      <li>rule 1</li>
      <li>rule 1</li>
      <li>rule 1</li>
      <li>rule 1</li>
      <li>rule 1</li>
      <li>rule 1</li>
    </ul>
  </Grid>)
}

export default Rules;