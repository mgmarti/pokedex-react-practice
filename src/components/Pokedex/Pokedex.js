import React, {Component} from 'react';

class Pokedex extends Component {
    render(){
        return(
          <div className="wrapper">
              {this.props.children}
          </div>
        )
    }
}

export default Pokedex;