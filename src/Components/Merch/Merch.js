import React, { Component } from 'react';

class Merch extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      hats: 0,
      shirts: 0,
      sweatshirts: 0,
    }
  }
  render()
  {
    return (<h1>{this.state.hats}</h1>)
  }
}

export default Merch