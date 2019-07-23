import React, {Component} from 'react';
import './pokecard.css'



class Pokecard extends Component {
    render(){
        return (
            <div className="container" id="pokemonContainer">
                <div class="pokeDetails">
                    <h5>{this.props.name}</h5> 
                    <img src={this.props.img} />
                    <p>
                        Type: {this.props.type}
                        <br />
                        Base Exp: {this.props.exp}
                    </p>
                </div>
            </div>
        )
    }
}

export default Pokecard;