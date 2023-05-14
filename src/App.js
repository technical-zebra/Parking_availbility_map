import "./App.css";

import React from "react";
import Map from "./Components/Map";
import Filter from "./Components/Filter";
import SearchBox from "./Components/GoogleSearchBar";
import MyLocationFAB from "./Components/MyLocation"


function App() {
  return (
    <div className="app">
      {/* search bar component */}
      <SearchBox />

      {/* filter component */}
      <Filter />

      {/* google map component */}
      <Map />

      <MyLocationFAB />

    </div>
  );
}

export default App;
