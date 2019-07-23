import React, {Component} from 'react';
import './pokecard.css'



class Pokecard extends Component {
    render(){
        return (
            <div class="pokeDetails">
                <h5>{this.props.name}</h5> 
                <img src={this.props.img} alt={this.props.name} />
                <p>
                    Type: {this.props.type}
                    <br />
                    Base Exp: {this.props.exp}
                </p>
            </div>
        )
    }
}

export default Pokecard;