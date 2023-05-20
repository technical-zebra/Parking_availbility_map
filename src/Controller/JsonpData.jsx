import { useEffect, useState } from 'react';
import axios from 'axios';

const JsonpData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = '/ltaodataservice/BicycleParkingv2';
      const headers = {
        'AccountKey': 'BIYCkkcYT/eTc9whKEPSEQ==',
        'Accept': 'application/json'
      };

      const params = {
        Lat: '1.364897',
        Long: '103.766094',
        Dist: '0.5'
      };

      try {
        const response = await axios.get(url, {
          headers,
          params
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default JsonpData;



//BIYCkkcYT/eTc9whKEPSEQ==