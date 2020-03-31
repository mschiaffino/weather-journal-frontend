import React, { useState } from 'react';
import './ObservationForm.css';

export default function ObservationForm({ onAddClicked }) {
  const [observationText, setObservationText] = useState('');

  const handleClick = () => {
    onAddClicked(observationText);
    setObservationText('');
  };

  return (
    <div className='observation-form'>
      <textarea
        className='observation-textarea'
        value={observationText}
        onChange={e => setObservationText(e.target.value)}
      ></textarea>
      <button className='add-observation-button' onClick={handleClick}>
        ADD
      </button>
    </div>
  );
}
