import React from 'react'
import { Grid } from '@material-ui/core'

const Layout = () => {
    return (
    <Grid alignContent="center" alignItems="center">
        <Grid item>
        </Grid>
        <Grid item container>
            <Grid item xs={0} sm={2}/>
            <Grid item xs={12} sm={8}>
            </Grid>
            <Grid item xs={0} sm={2}/>
        </Grid>
    </Grid>
    )
}

export default Layout;