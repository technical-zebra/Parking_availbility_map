import React from 'react'
import './index.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import Mark from './Mark'


export default function Map() {

  const defaultProps = {
    center: {
      lat: 59.955413,
      lng: 30.337844
    },
    zoom: 15
  }

  return (
      <MapContainer className="map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
  );
}
