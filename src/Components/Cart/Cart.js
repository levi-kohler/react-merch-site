import React, { useState } from 'react';
import Merch from '../Merch/Merch'
import FullCart from './FullCart';

const Cart = () => {
  const [cart, setCart] = useState({})
  const [cartFull, setCartFull]= useState(false)

  const sendValues = (data) => {
    setCart(data)
    setCartFull(true);
  }

  return (
    <>
      {
      cartFull?
        <FullCart cartItems={cart}/>:
        <Merch sendValues={sendValues}/>
      }
    </>
  )
}

export default Cart