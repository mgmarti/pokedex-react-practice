import React, {Component} from 'react';



class Pokecard extends Component {
    render(){
        return (
            <div className="pokeDetails">
                <img src={this.props.img} />
                <h4>
                {this.props.name}
                </h4> 
                     
            </div>
        )
    }
}

export default Pokecard;