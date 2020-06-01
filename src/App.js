import React from 'react';
import './App.css';
import Header from './components/Header.js';
import FilterBox from './components/FilterBox.js'
import Jobs from './components/Jobs.js'

function App() {
  return (
    <div id="Div_App_JSX"className="Div_App_CSS">
      <Header />
      <FilterBox />
      <Jobs />
    </div>
  );
}

export default App;
