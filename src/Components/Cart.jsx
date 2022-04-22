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
        <div className='d-flex justify-content-around'>
          <h3>Producto</h3>
          <h3>Cantidad</h3>
          <h3>Imagen</h3>
        </div>
          <br/>
            {cart.map((item) => 
              <div className='d-flex justify-content-around'>
                <h4>{item.name}</h4>
                <h4>{item.cant}</h4>
                <div>
                  <img src={item.image} style={{ width: '50px' ,height: '100px'}}/> 
                  <Button variant='btn btn-danger' onClick={() => removeFromCart(item.id)}>Eliminar</Button>
                </div>
              </div>
            )}
        <br/><br/>
        {cart.length!=0? 
        <div className="d-flex justify-content-center">
          <Button variant="dark"  onClick={()=> buyAll()}>Comprar</Button> 
        </div>
        : <h3 className='d-flex justify-content-center ' >Carrito vacío</h3>}
    </>
  )
}

export default Cart