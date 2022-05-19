import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CartContext} from './CartContextProvider';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';



function Cart() { 
  const {cart, removeFromCart} = useContext(CartContext)
  let  total =0;
  cart.forEach(item => {
    total+=item.price*item.cant;
  });

  return (
    <>
        <h2 className='d-flex justify-content-center'> Carrito</h2>
        {cart.length!=0? 
        <div>
          <div className='d-flex justify-content-around'>
            <h3>Producto</h3>
            <h3>Cantidad</h3>
            <h3>Precio unitario</h3>
            <h3>Imagen</h3>
          </div>
            <br/>
              {cart.map((item) => 
                <div className='d-flex justify-content-around'>
                  <h4>{item.name}</h4>
                  <h4>{item.cant}</h4>               
                  <h4>${item.price}</h4>
                  <div>
                    <img src={item.image} style={{ width: '50px' ,height: '100px'}}/> 
                    <Button variant='btn btn-danger' onClick={() => removeFromCart(item.id)}>Eliminar</Button>
                  </div>
                </div>
              )}
          <br/>
          <h4 className='d-flex justify-content-center' >Total ${total}</h4>
          <br/>
          <div className="d-flex justify-content-center">
            <Link to='/form'><Button variant="dark">Comprar</Button></Link> 
          </div>
        </div>
        : <div>
            <h3 className='d-flex justify-content-center ' >Carrito vacío</h3>
            <Link to='/' className='d-flex justify-content-center text-white'><Button variant="dark">Ir al inicio</Button></Link>
          </div>}
    </>
  )
}

export default Cart