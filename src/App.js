import React from 'react';
import './App.scss';
import Benefits from './components/Benefits';
import GoToPricing from './components/GoToPricing';
import Reviews from './components/Reviews';
import Intro from './components/Intro';
import Nav from './components/Nav';

import Prices from './components/Prices';
import ProgramPlan from './components/ProgramPlan';


function App() {
  return (
    <div className="App">
        <Intro />
        <Benefits /> 
        <Reviews />
        <ProgramPlan />
        <Prices />
    </div> 
  );
}

export default App;