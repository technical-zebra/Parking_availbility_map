import React, { useState, useEffect } from "react";
import "./index.css";

// import leaflet map component
import { MapContainer, TileLayer, useMap } from "react-leaflet";

import Marker from "../Marker";
import MyLocation from "../MyLocation/";
import { iconLocation } from "../../Images/Icon";


// import request function api
import fetchData from "../../API/fetchData.js";

// import redux
import { useSelector } from "react-redux";
import { filter, search } from "../Redux/action.js";

function Map(props) {
  const search = useSelector((state) => state.search);
  const filter = useSelector((state) => state.filter);

  const [fullData, setFullData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [myCords, setMyCords] = useState({});
  const [defaultProps, setDefaultProps] = useState({
    center: {
    lat: 1.31,
    lng: 103.8935379,
  },
  zoom: 15,});

  const searchLocation = (lat, lng) => {
    fetchData(lat, lng, 0.5).then((res) => {
      setFullData(res)
    })
  }

  useEffect(() => {
    searchLocation(1.31, 103.8935379)
  }, [])

  useEffect(() => {
    if (filter === "clear") {
      setIsFiltered(false);
    } else {
      const { RackType, RackCount, ShelterIndicator } = filter;

      const newData = fullData.filter(
        (e) =>
          (RackType === "All" ||
            (RackType === "Racks" && e.RackType.includes("_RACKS")) ||
            (RackType === "Yellow Box" && e.RackType === "Yellow Box")) &&
          e.RackCount >= RackCount &&
          e.ShelterIndicator === ShelterIndicator
      );
      setFilterData(newData);
      setIsFiltered(true);
    }
  }, [filter, fullData]);



  const getCords = (e) => {
    searchLocation(e.lat, e.lng)
    setMyCords({ lat: e.lat, lng: e.lng })
  }

  useEffect(() => {
    const {lat, lng} = search
    console.log(search);
    searchLocation(lat, lng)
  }, [search])


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

      {myCords.lat &&
        myCords.lng &&
        !isNaN(myCords.lat) &&
        !isNaN(myCords.lng) && (
          <Marker
            lat={myCords.lat}
            long={myCords.lng}
            info="My Location!!!"
            icon={iconLocation}
          />
        )}

      <MyLocation getCords={getCords} />

      {(isFiltered ? filterData : fullData).map((item) => (
        <Marker
          lat={item.Latitude}
          long={item.Longitude}
          info={`Name: ${item.Description} Rack Counts: ${item.RackCount}`}
          key={item.Latitude}
        />
      ))}
    </MapContainer>
  );
}

export default Map;
