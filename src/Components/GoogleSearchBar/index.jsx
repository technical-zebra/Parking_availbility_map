import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchBox = ({ placeholder, onPlacesChanged }) => {
  const inputRef = useRef(null);
  const searchBoxRef = useRef(null);

  const handlePlacesChanged = () => {
    if (onPlacesChanged) {
      onPlacesChanged(searchBoxRef.current.getPlaces());
    }
  };

  useEffect(() => {}, []);

  return (
    <Grid
      className="search"
      container
      spacing={0}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid xs={8}>
        <TextField id="outlined-search" label="Search field" type="search" />
      </Grid>
      <Grid
        xs={2}
        className="border"
        justifyContent="center"
        alignItems="stretch"
      >
        <SearchIcon fontSize="large" />
      </Grid>
      <Grid xs={2} justifyContent="center" alignItems="stretch">
        <CloseIcon fontSize="large" />
      </Grid>
    </Grid>
    // <div className="search">
    //   <input
    //     className="searchbox"
    //     ref={inputRef}
    //     placeholder={placeholder}
    //     type="text"
    //   />
    // </div>
  );
};

export default SearchBox;
