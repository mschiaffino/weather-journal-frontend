import React, { useState, useEffect } from 'react';
import { fetchCities } from '../api/weatherJournalAPI';

import './CitiesList.css';

export default function CitiesList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities().then(setCities);
  }, []);

  return cities.map(city => (
    <div className='cities-list'>
      <span>{city.name}</span>
    </div>
  ));
}
