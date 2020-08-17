import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import VenueNfo from './components/venueNfo/VenueNfo';
import Highlights from './components/highlights/Highlights';

function App() {
  return (
    <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
      <Header/>
      <Featured/>
      <VenueNfo/>
      <Highlights/>
    </div>
  );
}

export default App;