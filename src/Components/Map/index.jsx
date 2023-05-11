import React from 'react'
import './index.css'
import GoogleMapReact from 'google-map-react'
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
    <div className='map' >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDtGXKaUHWYpdH3Li-vc__gix0KXtxG17I" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Mark text='Mark' lat={59.955413}
          lng={30.337844} />
      </GoogleMapReact>
    </div>
  )
}
