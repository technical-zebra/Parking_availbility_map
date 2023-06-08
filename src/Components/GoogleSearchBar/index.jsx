import "./index.css";
import React, { useState } from 'react';
import { Grid, InputBase, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import { OpenStreetMapProvider} from 'leaflet-geosearch';

const SearchBar = () => {
  const [address, setAddress] = useState('');
  const [alternativeResults, setAlternativeResults] = useState([]);
  const [showResult, setShowResult] = useState(null);
  const provider = new OpenStreetMapProvider({
    params: {
      email: '', // auth for large number of requests
    },
  })

  const handleClearClick = () => {
    setAddress('');
    setAlternativeResults([]);
  };

  const handleAltResultClick = (e, index) => {
    console.log(alternativeResults[index]);
  };

  const handleKeyDown = async (e) => {
    if (e.keyCode === 13) {
      const results = await provider.search({ query: e.target.value});
      setAlternativeResults(results.slice(0, 5));
      if (showResult){
        console.log({lat:results[0].x, lng:results[0].y })
        setShowResult(false);
      }
      setShowResult(true);
    }
  };


  return (
    <Grid container spacing={3} maxWidth={400} className="searchBarContainer">
      <Grid display="flex" justifyContent="center" alignItems="center" minWidth={350}>
        <InputBase
          className="searchBar"
          placeholder="Enter address"
          value={address} // Bind the input value to the address state
          onChange={(e) => setAddress(e.target.value)} // Update the address state on input change
          onKeyDown={handleKeyDown}
          sx={{
            input: {
              width: "100%",
              color: 'black',
              '&::placeholder': {
                opacity: 1,
                color: 'grey',
              },
            },
          }}
        />
      </Grid>
      <Grid display="flex" justifyContent="flex-end" alignItems="center">
        <IconButton aria-label="clear" size="small" onClick={handleClearClick}>
          <ClearIcon fontSize="inherit" style={{ color: 'black' }} />
        </IconButton>
      </Grid>
      {alternativeResults.length > 0 && (
        <Grid item xs display="flex" justifyContent="center" alignItems="center" style={{ width: '100%', flexWrap: 'wrap', borderTop:'1px solid black', padding:"0px 0px", margin: '0px 20px'}}>
          {alternativeResults.map((result, index) => (
            <div className="alternativeResult" key={index} data-key={index} style={{ width: '100%' }} onClick={(e) => handleAltResultClick(e, index)}>{result.label}</div>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default SearchBar;
