import React from 'react';
import './CityCard.css';

export default function CityCard({ name, wind }) {
  return (
    <div className='city-card'>
      <span>{name}</span>
      <span>{wind}</span>
    </div>
  );
}
