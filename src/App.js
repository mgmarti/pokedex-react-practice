import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pokecard from './components/Pokecard/Pokecard';
import pokemon from './pokemon.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Pokecard 
      img={pokemon[0].img}
      name={pokemon[0].name} 
      />
      
    </div>
  );
}

export default App;
