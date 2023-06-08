import "./searchBar.css";
import React, { useState } from 'react';
import { Grid, InputBase, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import { useMap } from 'react-leaflet/hooks';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';

const SearchBar = () => {
  const [address, setAddress] = useState('');
  const provider = new OpenStreetMapProvider({
    params: {
      email: 'terryzhangke@gmail.com', // auth for large number of requests
    },
  })

  const handleClearClick = () => {
    setAddress('');
  };

  const handleKeyDown = async (e) => {
    if (e.keyCode === 13) {
      const results = await provider.search({ query: address });
      console.log(results);
    }
  };

  return (
    <Grid container spacing={3} maxWidth={400} maxHeight={40} className="searchBarContainer">
      <Grid xs display="flex" justifyContent="center" alignItems="center" minWidth={350}>
        <InputBase
          className="searchBar"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onKeyDown={handleKeyDown}
          sx={{
            input: {
              width: "100%",
              color: 'grey',
              '&::placeholder': {
                opacity: 1,
              },
            },
          }}
        />
      </Grid>
      <Grid xs display="flex" justifyContent="right" alignItems="center">
        <IconButton aria-label="clear" size="small" onClick={handleClearClick}>
          <ClearIcon fontSize="inherit" style={{ color: 'black' }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
