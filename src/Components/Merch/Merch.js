import React, { Component } from 'react';
import Product from './Components/Product';
import styled from 'styled-components';
import button from '../defaults/button';

const Grid = styled.div`
  padding: 5px 0;
  display: grid;
  width: 80%;

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

const FlexLayout = styled.div`
  display: flex;

`

const Sidebar = styled.div`
  display: flex;
  flex: 1;
  margin: 5px;
  flex-direction: column;
  font-size: 36px;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: whitesmoke;
`

const SubmitButton = styled(button)`
  all: unset;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid white;
  padding: 5px 15px;
  margin: 10px 0;
  color: whitesmoke;
  background-color: transparent;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: black;
    transition: .2s;
  }
`

class Merch extends Component
{
  constructor(props)
  {
    super(props);
    this.initialState = {
      hats: 0,
      shirts: 0,
      sweatshirts: 0,
      keys: 0,
      tacos: 0,
      wood: 0,
    };

    this.state = this.initialState;
    this.sendValues = props.sendValues;
  }

  handleClickPlus = (e) => {
    e.preventDefault()
    this.setState(prev => ({
      ...prev,
      [e.target.name]: prev[e.target.name] + 1
    }));
  }

  handleClickMinus = (e) => {
    e.preventDefault()
    this.setState(prev => ({
      ...prev,
      [e.target.name]: prev[e.target.name] ? prev[e.target.name] - 1 : 0
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

  onSubmit = (e) => {
    e.preventDefault();
    this.sendValues(this.state);
    this.setState(this.initialState);
  }

  render()
  {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <Title>Beethovens Goodies</Title>
          <FlexLayout>
            <Grid>
              {this.generateDisplay()}
            </Grid>
            <Sidebar>
              <div>SEND IT</div>
                <SubmitButton text={'Submit'} />
            </Sidebar>
          </FlexLayout>
        </form>
      </>
    )
  }
}

export default Merch