import './App.css'

import React from "react"
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => (
  <div style={{
    width: '110px',
    height: '100px',
    color: 'white',
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
  }}>
    {text}
  </div>
);

function App() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 10.99835602
    },
    zoom: 11
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDtGXKaUHWYpdH3Li-vc__gix0KXtxG17I" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={10.99835602}
          lng={10.99835602}
          text={'This is my marker'}
        />
      </GoogleMapReact>
    </div>
  )
}



export default App;
