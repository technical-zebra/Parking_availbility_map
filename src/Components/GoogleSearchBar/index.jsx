import "./index.css";

import { useMap } from 'react-leaflet/hooks';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';

export default function SearchBox() {
  const map = useMap();

  const provider = new OpenStreetMapProvider({
    params: {
      email: 'terryzhangke@gmail.com', // auth for large number of requests
    },
  })

  const search = new GeoSearchControl({
    provider: provider,
    style: 'bar',
  })
  

  //const results = await provider.search({ query: input.value });

  map.addControl(search);

  return null
}


