import React from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import Fab from "@mui/material/Fab";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import "./index.css";


export default function MyLocationFAB(props) {
  const map = useMap();

  const handleClick = () => {
    map.locate().on("locationfound", function (e) {
      props.getCords(e.latlng)
      console.log(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const circle = L.circle(e.latlng, 100);
      circle.addTo(map);
    })
  }

  return (
    <div className="container">
      <Fab className="FAB" aria-label="my_location" onClick={handleClick}>
        <LocationSearchingIcon />
      </Fab>
    </div>
  )

}