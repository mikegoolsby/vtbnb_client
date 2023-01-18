import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import Footer from '../components/Footer';

const useStyles = makeStyles({
  fontStyling: {
    fontFamily: [
      'Yanone Kaffeesatz',
      'sans-serif',
    ].join(','),
    fontWeight: 300,
    fontSize: 30,
    listStyleType: 'square',
    padding: '8px'
  },
  listSyling: {
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
    <ul className={classes.listSyling}>
      <li>
        Check-in is after 4:00PM, check-out is before 10:00AM.
      </li>
      <li>
        No pets.
      </li>
      <li>
        No parties or large events.
      </li>
      <li>
        No smoking.
      </li>
      <li>
        Respect our neighbors. Quiet hours are from 11:00PM to 7:00AM.
      </li>
    </ul>
    <Footer/>
  </Grid>)
}

export default Rules;