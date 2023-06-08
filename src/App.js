import "./App.css";

import React from "react";
import Map from "./Components/Map";
import Filter from "./Components/Filter";
import SearchBar from "./Components/GoogleSearchBar/searchBar";


function App() {
  return (
    <div className="app">
      {/* filter component */}
      <Filter />

      {/* google map component */}
      <Map />


      <SearchBar />

    </div>
  )
}

export default App;
