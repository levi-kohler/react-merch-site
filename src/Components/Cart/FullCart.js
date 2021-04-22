import React  from 'react'
import styled from 'styled-components';

const Body = styled.div`
background-color: turquoise;
text-align: center;
text-shadow: 1px 1px #ff0000;
font-family: Fantasy;
margin-top: 2px;
`


const FullCart = (props) => {
  
  const cartItems = Object.entries(props.cartItems)

  return (
    <>
      <Body>
        {cartItems.map(([k,v]) => <p>{k}:{v}</p>)}
      </Body>
    </>
  )
}

export default FullCart