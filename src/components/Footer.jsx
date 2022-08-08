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
        marginTop: 'calc(5% + 60px)',
        display: 'flex',
        justifyContent: 'center',
        bottom: 0,
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
        <Grid className={classes.useStyles}
        container
        direction="column"
        justify="center"
        alignItems="center">
            <List>
                <ListItem>
                    <ListItemIcon>
                        <WifiIcon/>
                    </ListItemIcon>
                    <ListItemText primary="DownhillFromHere | sickflipkid!"/>
                </ListItem>
            </List>
        </Grid>
    )
}
  
export default Footer;