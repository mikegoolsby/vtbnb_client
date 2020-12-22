import React from 'react'
import WifiIcon from '@material-ui/icons/Wifi';
import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

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
    footerStyling: {
        position: 'absolute',
        display: 'flex',
        left: 0,
        bottom: 0,
        right: 0,
        fontSize: 15,
        fontFamily: [
            'Yanone Kaffeesatz',
            'sans-serif',
          ].join(','),
    }
  });

const Footer = () => {

    const classes = useStyles();

    return (
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        // className={classes.footerStyling}
    >
        <List>
            <ListItem>
                <ListItemIcon>
                    <WifiIcon/>
                </ListItemIcon>
                <ListItemText primary="WiFi Password: eatsleepski"/>
            </ListItem>
        </List>
    </Grid>
    )
}
  
export default Footer;