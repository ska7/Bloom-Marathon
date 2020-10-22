import React from 'react';
import './App.scss';
import Benefits from './components/Benefits';
import GoToPricing from './components/GoToPricing';
import Reviews from './components/Reviews';
import Intro from './components/Intro';
import Nav from './components/Nav';
import frame from './img/frame.png'
import Prices from './components/Prices';


function App() {
  return (
    <div className="App">
      <div className='intro'>
        <Nav />
        <Intro />
        <img className='emoji-frame' src={frame}></img>
        <GoToPricing />
      </div>  
        <Benefits /> 
        <Reviews />
        <Prices />
    </div>
  );
}

export default App;
