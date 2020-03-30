import React, { useState, useEffect } from 'react';
import { fetchCities } from '../api/weatherJournalAPI';

import './CitiesList.css';
import CityCard from './CityCard.jsx';

export default function CitiesList() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchCities()
      .then(setCities)
      .then(() => setLoading(false));
  }, []);

  return (
    <div className='cities-list'>
      {loading && <h3>Loading...</h3>}
      {cities.map(city => (
        <CityCard {...city}></CityCard>
      ))}
    </div>
  );
}
