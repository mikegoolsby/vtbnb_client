import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import maintenance from '../images/maintenance.jpg'
import bus from '../images/bus.jpg'

const useStyles = makeStyles({
  fontStyling: {
    fontFamily: [
      'Yanone Kaffeesatz',
      'sans-serif',
    ].join(','),
    fontWeight: 300,
    fontSize: 30,
    padding: '8px'
  },
  root: {
      margin: 20,
      width: '75%',
  },
  media: {
    height: 200,
  },
});

const Contact = () => {

  const classes = useStyles();

  return (
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
  >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={maintenance}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.fontStyling}>
            Maintenance
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.fontStyling}>
              Please call with any issues regarding heat, hot water, plumbing, etc.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="tel:555-555-5555">
          Call
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={bus}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.fontStyling}>
            Moover
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.fontStyling}>
              Transportation to and from the mountain, free of charge.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="tel:802-464-8487">
          Call
        </Button>
        <Button size="small" color="primary" href="https://www.moover.com/routes-timetables/mount-snow" target="_blank">
          Visit
        </Button>
      </CardActions>
    </Card>
  </Grid>
  )
}

export default Contact;