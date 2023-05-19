import React from 'react'
import './index.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import Marker from './Marker'


export default function Map() {

  const defaultProps = {
    center: {
      lat: 1.3521,
      lng: 103.8198
    },
    zoom: 12
  }

  return (
    <MapContainer className="map" center={[defaultProps.center.lat, defaultProps.center.lng]} zoom={defaultProps.zoom} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker lat='1.310352984' long='103.893668999' info='My Home' />
      <Marker lat='1.3159' long='103.8758' info='JCU School. Yeah!!!' />

    </MapContainer>
  );
}
