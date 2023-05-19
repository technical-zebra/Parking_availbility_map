import React from 'react'
import './index.css'
import { Marker, Popup } from 'react-leaflet'

export default function Mark(props) {
  return (
    <Marker position={[props.lat, props.long]}>
      <Popup>
        <h3>{props.info}</h3>
      </Popup>
    </Marker>
  )
}
