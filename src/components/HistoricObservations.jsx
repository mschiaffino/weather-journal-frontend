import React from 'react';

import './HistoricObservations.css';

export default function HistoricObservations({ observations = [] }) {
  return (
    <div className='historic-observations'>
      <span className='historic-observations-title'>Historic observations</span>
      <div className='historic-observations-list'>
        {!observations.length && <span>No observations yet.</span>}
        {observations.map(({ id, text }) => (
          <div key={id}>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
