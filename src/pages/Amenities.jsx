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
    textAlign: 'center',
    padding: '8px'
  },
  listSyling: {
    listStyleType: 'square',
    textAlign: 'left'
  },
  ulStyling: {
    // lineHeight: '18px'
  }
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
      <ul className={classes.listSyling}>
        <li className={classes.ulStyling}>Mount Snow Skiing & Snowboarding that you can see from your living room window!</li>
        <li className={classes.ulStyling}>Clubhouse with indoor pool as well as tennis courts and a basketball court</li>
        <li className={classes.ulStyling}>Free shuttle just steps away with access to and from the mountain</li>
        <li className={classes.ulStyling}>Laundry access with attached game room all just down the hallway</li>
      </ul>
      <Footer/>
  </Grid>
  )
}

export default Amenities;