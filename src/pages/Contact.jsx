import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import maintenance from '../images/maintenance.jpg'
import bus from '../images/bus.jpg'
import Footer from '../components/Footer'
import emergency from '../images/emergency.jpg'

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
              Please contact us via Airbnb or VRBO for any issues regarding heat, hot water, plumbing, condo access, etc. We will work with our local maintenance partners to resolve the issue as soon as possible.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary" href="tel:802-266-2244">
          Business Hours Line (Mon-Fri, 9a-4:30p)
        </Button>
        <Button size="small" color="primary" href="tel:802-742-2244">
          After Hours Emergency Pager Line
        </Button> */}
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
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={emergency}
          title="emergency services"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.fontStyling}>
            Police/Emergency Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.fontStyling}>
              Ya know, just in case. For any emergencies, please dial 911.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="tel:8024642020">
          Call
        </Button>
        <Button size="small" color="primary" href="https://www.doververmont.com/police" target="_blank">
          Visit
        </Button>
      </CardActions>
    </Card>
    <Footer/>
  </Grid>
  )
}

export default Contact;