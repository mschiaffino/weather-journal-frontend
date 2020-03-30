import React, { useState, useEffect } from 'react';
import { fetchCities } from '../api/weatherJournalAPI';

export default function CitiesList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities().then(setCities);
  }, []);

  return cities.map(city => (
    <div>
      <span>{city.name}</span>
    </div>
  ));
}
