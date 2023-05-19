import React, { Fragment, useEffect, useRef, useState } from 'react'
import './index.css'

// Radio
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

// Slider
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

// Switch
import Switch from '@mui/material/Switch';

// Button
import Button from '@mui/material/Button';

// Icons
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import SearchIcon from '@mui/icons-material/Search';

const marks = [
  {
    value: 0,
    label: '0+'
    ,
  },
  {
    value: 250,
    label: '250+',
  },
  {
    value: 500,
    label: '500+',
  }
];


function valuetext(value) {
  return `${value}`
}
export default function Filter(props) {
  // States
  const [rackType, setRackType] = useState('Both')
  const [rackCount, setRackCount] = useState(100)
  const [shelterChecked, setShelterChecked] = useState(true);
  const [isFolded, setIsFolded] = useState(false)

  // Refs
  const filterRef = useRef(null)
  const foldIconRef = useRef(null)
  const searchButtonRef = useRef(null)

  // Effects

  useEffect(() => {

  }, [])


  // For handling rack type
  const getTypeValue = (e, newValue) => {
    setRackType(newValue)
  }

  // For handling lots value
  const getRackCounts = (e, newValue) => {
    setRackCount(newValue);
  };

  // For handling shelter value
  const getShelterValue = (event) => {
    setShelterChecked(event.target.checked);
  };

  //For handling search
  const handleSearch = () => {
    console.log(rackType);
    console.log(rackCount);
    console.log(shelterChecked);
  }

  // when panle is folded and unfolded
  const fold = () => {
    setIsFolded(p => !p)
    filterRef.current.style.left = isFolded ? '0' : '-340px'
    foldIconRef.current.style.transform = isFolded ? 'rotate(0deg)' : 'rotate(180deg)'
    searchButtonRef.current.style.opacity = isFolded ? '1' : '0'
  }

  return (
    <Fragment>
      <div className='filter' ref={filterRef}>
        <div className="filter-container">
          <h1 onClick={fold}>Filter: <KeyboardDoubleArrowLeftIcon ref={foldIconRef} /></h1>
          {/* Rack Type Radio */}
          <div className="rackType">
            <h3>Rack Type <SportsMotorsportsIcon /></h3>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={getTypeValue}
              >
                <FormControlLabel value="Racks" control={<Radio />} label="Racks" />
                <FormControlLabel value="Yellow Box" control={<Radio />} label="Yellow Box" />
                <FormControlLabel value="both" control={<Radio />} label="Both" />
              </RadioGroup>
            </FormControl>
          </div>

          {/* Rack Count Slider */}
          <div className="rackCount">
            <h3>Lots Available <AutoGraphIcon /></h3>
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Always visible"
                defaultValue={100}
                getAriaValueText={valuetext}
                step={20}
                min={0}
                max={500}
                marks={marks}
                valueLabelDisplay="on"
                onChange={getRackCounts}
              />
            </Box>
          </div>

          {/* Shelter Checkbox*/}
          <div className="shelter">
            <h3>Sheltered <VerticalAlignTopIcon /></h3>
            <span>Unsheltered</span>
            <Switch
              checked={shelterChecked}
              onChange={getShelterValue}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Sheltered</span>
          </div>

          {/* Search Button */}
          <div className="search-btn" ref={searchButtonRef}>
            <Button variant="outlined" startIcon={<SearchIcon />} onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
