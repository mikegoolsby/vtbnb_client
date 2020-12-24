import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// const useStyles = makeStyles({
//     fontStyling: {
//       fontFamily: [
//         'Yanone Kaffeesatz',
//         'sans-serif',
//       ].join(','),
//       fontWeight: 300,
//       fontSize: 30,
//     },
// });

const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env


const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_GOOGLE_MAPS_API_KEY}&v3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, padding: `20px`, filter: `drop-shadow(0 0 0.75rem black)` }} />,
    mapElement: <div style={{ height: `100%`, width: `auto` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    >
        <GoogleMap
            defaultZoom={12.25}
            defaultCenter={{ lat: 42.968489, lng: -72.888319 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: 42.968489, lng: -72.888319 }} onClick={props.onMarkerClick} />}
        </GoogleMap>
    </Grid>
)

class vtMap extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default vtMap;