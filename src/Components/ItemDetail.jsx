import React, { useContext, useState } from 'react';
import styles from './ItemDetail.module.css';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from './CartContextProvider';

function ItemDetail({producto}) {
  const [btnIrCarrito, setBtnIrCarrito] = useState(false)
  const {addToCart} = useContext(CartContext)

  const onAdd = () =>{
    setBtnIrCarrito(true);
    addToCart(producto)
  }

  return (
    <>
      <div className={styles.containerDetail}>
        <div className={styles.photoDetail}>
          <img src={producto.image} alt={producto.name}/>
        </div>
        <div className={styles.productDetail}>
          <h2>{producto.name}</h2>
          <p>{producto.detail}</p>
          <h4>{producto.price}</h4>
          <h5>#{producto.category}</h5>
          {
            btnIrCarrito? <Link to='/cart' >Ir al carrito</Link> : <ItemCount  stock={5} initial={1} onAdd={onAdd}/> 
          }
        </div>
        <br/>
        <br />
      </div>
    </>
  )
}

export default ItemDetail