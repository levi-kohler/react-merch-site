import React, { useState } from 'react';
import Merch from '../Merch/Merch'


const Cart = () => {
  const [cart, setCart] = useState({})
  const sendValues = (data) => {
    setCart(data)
  }
  console.log(cart)
  return (
    <>
      <Merch sendValues={sendValues}/>
    </>
  )
}

export default Cart