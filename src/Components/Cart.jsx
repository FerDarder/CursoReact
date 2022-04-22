import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CartContext} from './CartContextProvider';
import Button from "react-bootstrap/Button";



function Cart() {
  const {cart, buyAll, removeFromCart} = useContext(CartContext)

  console.log(cart)
  return (
    <>
        <h2 className='d-flex justify-content-center'> Carrito</h2>
            {cart.map((item) => 
              <p>
                <h3>{item.name}</h3>
                <h3>{item.cant}</h3>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </p>
            )}
        <br/><br/>
        {cart.length!=0? <Button variant="dark" onClick={()=> buyAll()}>Comprar</Button> : <h3 className='d-flex justify-content-center'>Carrito vacío</h3>}
    </>
  )
}

export default Cart