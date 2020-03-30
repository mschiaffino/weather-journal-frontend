import React from 'react';
import './App.css';

import CitiesList from './components/CitiesList.jsx';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Weather Journal</h1>
      </header>
      <CitiesList></CitiesList>
    </div>
  );
}

export default App;
