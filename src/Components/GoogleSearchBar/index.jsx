import "./index.css";
import React, { useState } from 'react';
import { Grid, InputBase, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import { OpenStreetMapProvider} from 'leaflet-geosearch';

// React-Redux
import {useSelector, useDispatch} from 'react-redux'
import { search } from '../Redux/action.js'

function SearchBar(props) {
  const dispatch = useDispatch()
  const [address, setAddress] = useState('');
  const [alternativeResults, setAlternativeResults] = useState([]);
  const [showResult, setShowResult] = useState(null);

  const provider = new OpenStreetMapProvider({
    params: {
      email: '', // auth for large number of requests
    },
  })

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + '...';
    }
    return str;
  };

  const handleSearch = (result) => {
    
    dispatch(search({ lat:result.y, lng:result.x, label:truncateString(result.label, 8)
    }));
  }

  const handleClearClick = () => {
    setAddress('');
    setAlternativeResults([]);
  };

  const handleAltResultClick = (e, index) => {
    handleSearch(alternativeResults[index]);
  };

  const handleKeyDown = async (e) => {
    if (e.keyCode === 13) {
      const results = await provider.search({ query: e.target.value});
      setAlternativeResults(results.slice(0, 5));
      if (showResult){
        handleSearch(results[0]);
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
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
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

export default SearchBar

