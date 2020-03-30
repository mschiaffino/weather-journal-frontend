import React from 'react';
import './CityCard.css';
import windIcon from '../assets/wind_icon.png';

export default function CityCard({ name, wind }) {
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
    </div>
  );
}
