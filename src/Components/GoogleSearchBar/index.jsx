import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
const SearchBox = ({ placeholder, onPlacesChanged }) => {
  const inputRef = useRef(null)
  const searchBoxRef = useRef(null)

  const handlePlacesChanged = () => {
    if (onPlacesChanged) {
      onPlacesChanged(searchBoxRef.current.getPlaces())
    }
  };

  useEffect(() => {
    if (window.google) {
      const input = ReactDOM.findDOMNode(inputRef.current)
      searchBoxRef.current = new window.google.maps.places.SearchBox(input)
      searchBoxRef.current.addListener('places_changed', handlePlacesChanged)

      return () => {
        // https://developers.google.com/maps/documentation/javascript/events#removing
        window.google.maps.event.clearInstanceListeners(searchBoxRef.current)
      }
    }
  }, [])

  return (
    <div className="search">
      <input className='searchbox' ref={inputRef} placeholder={placeholder} type="text" />
    </div>)
}

export default SearchBox;

