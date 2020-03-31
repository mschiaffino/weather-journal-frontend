import React from 'react';
import dayjs from 'dayjs';

import './HistoricObservations.css';

const formatDatetime = date => dayjs(date).format('HH:mm MM/DD/YYYY');

export default function HistoricObservations({ observations = [] }) {
  return (
    <div className='historic-observations'>
      <span className='historic-observations-title'>Historic observations</span>
      <div className='historic-observations-list'>
        {!observations.length && <span>No observations yet.</span>}
        {observations.map(({ id, datetime, text }) => (
          <div className='observation-row' key={id}>
            <div className='observation-datetime'>
              <span>{formatDatetime(datetime)}</span>
            </div>
            <div>
              <span>{text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
