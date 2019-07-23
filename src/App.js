import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pokecard from './components/Pokecard/Pokecard';
import pokemon from './pokemon.json';
import Pokedex from './components/Pokedex/Pokedex';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="pokemon">
        <Pokedex>
          {pokemon.map(pokemon => (
              <Pokecard 
              img={pokemon.img}
              name={pokemon.name} 
              />
          ))}
        </Pokedex>
      </div>

    
    </div>
  );
}

export default App;
