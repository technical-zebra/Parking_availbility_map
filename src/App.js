import "./App.css";

import React from "react";
import Map from "./Components/Map";
import Filter from "./Components/Filter";
import MyLocationFAB from "./Components/MyLocation"


function App() {
  return (
    <div className="app">
      {/* filter component */}
      <Filter />

      {/* google map component */}
      <Map />

    </div>
  )
}

export default App;
