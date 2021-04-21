import React from 'react'
import button from '../../defaults/button';
import styled from 'styled-components';

const StyledButtonPlus = styled(button)`
  align-self: baseline;
  margin-bottom: 5px;
  grid-column: 4/4;
  grid-row: 4/4;
  background-color: black;
  border: 1px solid black;
  box-shadow: inset 0 0 2px black, 0 1px 2px #0000000f;
  border-radius: 5px;
  padding: 5px;
  color: white;
`;

const StyledButtonMinus = styled(button)`
  align-self: center;
  grid-column: 4/4;
  grid-row: 4/4;
  background-color: black;
  border: 1px solid black;
  box-shadow: inset 0 0 2px black, 0 1px 2px #0000000f;
  border-radius: 5px;
  padding: 5px;
  color: white;
`;

const MockImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: black;
  color: white;
  grid-column: 1/4;
  grid-row: 1/5;
  margin: 20px;
  font-size: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StockDisplay = styled.div`
  font-size: 76px;
  font-family: monospace;
  grid-column: 4/4;
  grid-row: 3/3;
  justify-self: center;
  align-self: center;
`;

const ProductHousing = styled.div`
  position: relative;
  padding: 20px;
  border: 2px solid black;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

const Title = styled.div`
  padding-top: 25px;
  font-size: 26px;
  color: white;
`

const Product = ({onClickPlus, onClickMinus, name, stock, index}) => {

  const inStock = stock === 0 ? 'None In Cart' : 'Add More ' + name;
  const removeStock = stock === 0 ? 'None In Cart' : 'Remove ' + name;
  const outputIcons = [
    '➊','➋','➌','➍','➎',
    '➏','➐','➑','➒','➓',
    '⓫', '⓬','⓭','⓮','⓯',
    '⓰', '⓱','⓲','⓳','⓴'
  ]
  return (
    <ProductHousing>
      <MockImage>
        <Title>{name.toUpperCase()}</Title>
        {outputIcons[index]}
      </MockImage>
      <StockDisplay>{stock}</StockDisplay>
      <StyledButtonPlus onClick={onClickPlus} name={name} text={inStock} />
      <StyledButtonMinus onClick={onClickMinus} name={name} text={removeStock} />
    </ProductHousing>
  )
}

export default Product