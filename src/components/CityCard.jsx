import React from 'react';
import './CityCard.css';

export default function CityCard({ name, wind }) {
  return (
    <div className='city-card'>
      <div className='wind-info-label'>
        <span>Wind Speed</span>
      </div>
      <div className='city-card-info'>
        <span>{name}</span>
        <span>{wind}</span>
      </div>
    </div>
  );
}
