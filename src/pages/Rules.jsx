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
    listStyleType: 'square',
  },
});


const Rules = (props) => {

  const {rules} = props

  const classes = useStyles();
  return (
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    className={classes.fontStyling}
  >
    <h1>House Rules:</h1>
    <ul>
      {rules.map((rules) => (
        <li>{rules.body}</li>
      ))}
    </ul>
  </Grid>)
}

export default Rules;