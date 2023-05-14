
import React from 'react'
import Fab from '@mui/material/Fab';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import "./index.css";


export default function MyLocationFAB() {
    return (
        <Fab className="FAB-container" aria-label="my_location">
          <LocationSearchingIcon />
        </Fab>
    );
  }