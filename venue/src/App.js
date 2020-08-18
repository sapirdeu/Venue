import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import VenueNfo from './components/venueNfo/VenueNfo';
import Highlights from './components/highlights/Highlights';
import Pricing from './components/pricing/Pricing';
import Footer from './components/header_footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Featured/>
      <VenueNfo/>
      <Highlights/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;