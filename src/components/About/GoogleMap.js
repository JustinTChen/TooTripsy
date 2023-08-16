import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

import { GOOGLE_MAPS_API_KEY } from "../../constants"

export default function GoogleMapsWidget() {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 37.7749, // Latitude of the map center
    lng: -122.4194, // Longitude of the map center
  };

  const markers = [
    {
      position: { lat: 37.7749, lng: -122.4194 },
      label: 'Marker 1',
    },
    {
      position: { lat: 37.7746, lng: -122.4159 },
      label: 'Marker 2',
    },
    // Add more markers as needed
  ];

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={10}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          label={marker.label}
        />
      ))}
    </GoogleMap>
  );
};