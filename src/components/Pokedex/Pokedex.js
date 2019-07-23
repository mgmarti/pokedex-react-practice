import React, {Component} from 'react';
import './pokedex.css';
import pokemon from '../../pokemon.json';
import Pokecard from '../Pokecard/Pokecard';

class Pokedex extends Component {
    render(){
        return(
          <div className="wrapper">
              {pokemon.map(pokemon => (
              <Pokecard 
              img={pokemon.img}
              name={pokemon.name}
              type={pokemon.type}
              exp={pokemon.base_experience}
              />
          ))}
          </div>
        )
    }
}

export default Pokedex;