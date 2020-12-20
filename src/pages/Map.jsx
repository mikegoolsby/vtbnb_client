import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import { Grid } from '@material-ui/core'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const useStyles = makeStyles({
    fontStyling: {
      fontFamily: [
        'Yanone Kaffeesatz',
        'sans-serif',
      ].join(','),
      fontWeight: 300
    },
  });

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCD8QCD6vWccqGGOTNFTXR1m9EQB14FXdM&v3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={12.25}
    defaultCenter={{ lat: 42.968489, lng: -72.888319 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 42.968489, lng: -72.888319 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

class MyFancyComponent extends React.PureComponent {
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

export default MyFancyComponent;