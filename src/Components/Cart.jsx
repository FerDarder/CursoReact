import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CartContext} from './CartContextProvider';


function Cart() {
  const {cart} = useContext(CartContext)

  console.log(cart)
  return (
    <>
        <h2 className='d-flex justify-content-center'> Carrito
        </h2>
            {cart.map((item) => <p><h3>{item.id}</h3><h3>{item.name}</h3> <h3>{item.cant}</h3></p>)}
    </>
  )
}

export default Cart