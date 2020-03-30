import React, { useState, useEffect } from 'react';
import { fetchCities } from '../api/weatherJournalAPI';

import './CitiesList.css';
import CityCard from './CityCard.jsx';

export default function CitiesList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities().then(setCities);
  }, []);

  return (
    <div className='cities-list'>
      {cities.map(city => (
        <CityCard {...city}></CityCard>
      ))}
    </div>
  );
}
