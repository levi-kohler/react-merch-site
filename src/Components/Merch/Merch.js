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

  handleClick = (e) => {
    e.preventDefault()
    this.setState(prev => ({
      ...prev,
      [e.target.name] : prev[e.target.name] + 1
    }));
  }

  render()
  {
    return (
      <>
        <form>
          {this.state.hats}
          
          <button name="hats" onClick={this.handleClick}>Restock Hats</button>
          {this.state.shirts}
          <button name="shirts" onClick={this.handleClick}>Restock Shirts</button>
          {this.state.sweatshirts}
          <button name="sweatshirts" onClick={this.handleClick}>Restock Sweatshirts</button>
        </form>
      </>
    )
  }
}

export default Merch