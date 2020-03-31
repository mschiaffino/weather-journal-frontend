import React, { useState } from 'react';
import './CityCard.css';
import windIcon from '../assets/wind_icon.png';
import ObservationForm from './ObservationForm.jsx';
import { postObservation } from '../api/weatherJournalAPI';

export default function CityCard({ name, wind }) {
  const [observartions, setObservations] = useState([]);

  const addObservation = observationText => {
    postObservation(name, observationText).then(newObservation =>
      setObservations([newObservation, ...observartions])
    );
  };

  return (
    <div className='city-card'>
      <div className='wind-info-label'>
        <span>Wind Speed</span>
      </div>
      <div className='city-card-info'>
        <span>{name}</span>
        <div className='wind-info'>
          <span>{wind}</span>
          <img src={windIcon} alt='wind_icon'></img>
        </div>
      </div>
      <ObservationForm onAddClicked={addObservation} />
    </div>
  );
}
