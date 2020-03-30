import React from 'react';

export default function CityCard({ name, wind }) {
  return (
    <div>
      <span>{name}</span>
      <span>{wind}</span>
    </div>
  );
}
