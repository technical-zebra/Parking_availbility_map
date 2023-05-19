import React, { useState, useEffect } from 'react'
import './index.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import Marker from '../Marker'
import SearchBox from '../GoogleSearchBar'
import MyLocation from '../MyLocation'
import test from './test_data.json'
import myLocationIcon from '../../Images/myLocationIcon.png'
import L from "leaflet";

export default function Map() {
  const [jsonData, setJsonData] = useState([]);
  const [filterData, setFilterData] = useState([]) // filtered data based on the jsonData
  const [isFiltered, setIsFiltered] = useState(false) // the switch
  const [myCords, setMyCords] = useState({});

  const getCords = (e) => {
    setMyCords(p => ({ lat: e.lat, lng: e.lng })) // lat and long of current user
  }

  useEffect(() => {
    setJsonData(test.value)
  }, [])

  const defaultProps = {
    center: {
      lat: 1.3521,
      lng: 103.8198,
    },
    zoom: 15,
  }

  const myIcon = L.icon({
    iconUrl: myLocationIcon,
    iconSize: [64, 64],
  })

  return (
    <MapContainer
      className="map"
      center={[defaultProps.center.lat, defaultProps.center.lng]}
      zoom={defaultProps.zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker lat="1.3159" long="103.8758" info="JCU School. Yeah!!!" />

      {myCords.lat && myCords.lng && !isNaN(myCords.lat) && !isNaN(myCords.lng) && (
        <Marker lat={myCords.lat} long={myCords.lng} info="My Location!!!" icon={myIcon} />
      )}

      <MyLocation getCords={getCords} />

      {isFiltered ? filterData.map(item => <Marker
        lat={item.Latitude}
        long={item.Longitude}
        info={"Rack Counts: " + item.RackCount}
        key={item.Description}
      />) : jsonData.map((item) => (
        <Marker
          lat={item.Latitude}
          long={item.Longitude}
          info={"Rack Counts: " + item.RackCount}
          key={item.Description}
        />
      ))}

      <MemoizedSearchBox />
    </MapContainer>
  )
}

const MemoizedSearchBox = React.memo(SearchBox);
