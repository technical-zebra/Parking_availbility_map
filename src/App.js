import './App.css'

import React from "react"
import Map from './Components/Map';
import Filter from './Components/Filter'
import SearchBox from './Components/GoogleSearchBar';

function App() {
  return (
    <div className='app' >
      

      {/* search bar component */}
      <SearchBox />

      {/* filter component */}
      <Filter />

      {/* google map component */}
      <Map />
      
    </div>
  )
}

export default App;
