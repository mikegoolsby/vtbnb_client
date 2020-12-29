import React, { useState, useEffect } from "react";
import { Grid, Typography } from '@material-ui/core'
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { makeStyles } from '@material-ui/core/styles';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { Card } from '@material-ui/core';
import eatsData from "../data/restaurants.json"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 8,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env

function Map() {
  const [selectedEat, setSelectedEat] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedEat(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    >
      <GoogleMap
        defaultZoom={12.25}
        defaultCenter={{ lat: 42.968489, lng: -72.888319 }}
        // defaultOptions={{ styles: mapStyles }}
      >
        {eatsData.map(eat => (
          <Marker
            key={eat.id}
            position={{
              lat: eat.lat,
              lng: eat.lng
            }}
            onClick={() => {
              setSelectedEat(eat);
            }}
            icon={{
              url: `https://static.thenounproject.com/png/189500-200.png`,
              scaledSize: new window.google.maps.Size(25, 25)
            }}
          />
        ))}

        {selectedEat && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedEat(null);
            }}
            position={{
              lat: selectedEat.lat,
              lng: selectedEat.lng
            }}
          >
            <div>
              <h2>{selectedEat.name}</h2>
              <p>{selectedEat.type}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
      {eatsData.map(eat => (
        <Card className={classes.root}>
          <RestaurantIcon/>
          <Typography>
            {eat.name}
          </Typography>
          <Typography>
            {eat.address}
          </Typography>
        </Card>
      ))}
    </Grid>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${REACT_APP_GOOGLE_MAPS_API_KEY}&v3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, padding: `20px`, filter: `drop-shadow(0 0 0.75rem black)` }} />}
        mapElement={<div style={{ height: `100%`, width: `auto` }} />}
      />
    </div>
  );
}