import React, { Component } from 'react';

import Aux from '../../components/hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 2,
      bacon: 2,
      cheese: 0,
      meat: 0
    }
  }
  render (){
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
