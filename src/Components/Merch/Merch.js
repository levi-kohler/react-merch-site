import React, { Component } from 'react';
import Product from './Components/Product';
import styled from 'styled-components';

const Grid = styled.div`
  padding: 5px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(500px, auto);
  grid-gap: 1em;

  @media ( max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ( max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const Title = styled.div`
  padding: 5px;
  font-size: 76px;
  width: 100%;
  background-color: black;
  color: goldenrod;
  font-family: Arial, Helvetica, sans-serif;
`

class Merch extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      hats: 0,
      shirts: 0,
      sweatshirts: 0,
      keys: 0,
      tacos: 0,
      wood: 0,
    }
  }

  handleClickPlus = (e) => {
    e.preventDefault()
    this.setState(prev => ({
      ...prev,
      [e.target.name] : prev[e.target.name] + 1
    }));
  }

  handleClickMinus = (e) => {
    e.preventDefault()
    this.setState(prev => ({
      ...prev,
      [e.target.name] : prev[e.target.name] - 1
    }));
  }

  generateDisplay = () => {
    const states = Object.entries(this.state);
    return states.map(([key, value], i) => {
      return (
        <Product
          onClickPlus={this.handleClickPlus}
          onClickMinus={this.handleClickMinus}
          name={key}
          stock={value}
          index={i}
        />
      );
    });
  }

  render()
  {
    return (
      <>
        <form>
          <Title>Beethovens Goodies</Title>
          <Grid>
            {this.generateDisplay()}
          </Grid>
        </form>
      </>
    )
  }
}

export default Merch