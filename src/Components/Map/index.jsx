import React, { useState, useEffect } from 'react'
import './index.css'

// import leaflet map component
import { MapContainer, TileLayer } from 'react-leaflet'
import Marker from '../Marker'
import SearchBox from '../GoogleSearchBar'
import MyLocation from '../MyLocation/'
import { iconLocation } from '../../Images/Icon'
import L from 'leaflet'

// import request function api
import fetchData from '../../API/fetchData.js'

// import redux
import { connect } from 'react-redux'
import { filter } from '../Redux/action.js'

function Map() {
  const [fullData, setFullData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)
  const [myCords, setMyCords] = useState({})

  useEffect(() => {
    fetchData(1.31, 103.8935379, 1).then((res) => {
      setFullData(res)
    })
  }, [])

  useEffect(() => {
    console.log(fullData)
  }, [fullData])

  const getCords = (e) => {
    fetchData(e.lat, e.lng, 0.5).then((res) => {
      setFullData(res)
    })
    setMyCords({ lat: e.lat, lng: e.lng })
  }

  const defaultProps = {
    center: {
      lat: 1.3521,
      lng: 103.8198,
    },
    zoom: 15,
  }

  return (
    <MapContainer
      className="map"
      center={[defaultProps.center.lat, defaultProps.center.lng]}
      zoom={defaultProps.zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker lat="1.3159" long="103.8758" info="JCU School. Yeah!!!" />

      {myCords.lat && myCords.lng && !isNaN(myCords.lat) && !isNaN(myCords.lng) && (
        <Marker lat={myCords.lat} long={myCords.lng} info="My Location!!!" icon={iconLocation} />
      )}

      <MyLocation getCords={getCords} />

      {isFiltered
        ? filterData.map((item) => (
          <Marker
            lat={item.Latitude}
            long={item.Longitude}
            info={`Rack Counts: ${item.RackCount}`}
            key={item.Latitude}
          />
        ))
        : fullData.map((item) => (
          <Marker
            lat={item.Latitude}
            long={item.Longitude}
            info={`Name: ${item.Description} Rack Counts: ${item.RackCount}`}
            key={item.Latitude}
          />
        ))}
      <MemoizedSearchBox />
    </MapContainer>
  )
}

const MemoizedSearchBox = React.memo(SearchBox)
export default connect(
  state => ({ filterParams: state }),
  { filter }
)(Map)