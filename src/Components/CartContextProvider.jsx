import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export default function CartContextProvider({children}) {

  const [cart, setCart] = useState([])

  const addToCart = (producto, cant) => {
    const indexItem = cart.findIndex((cartItem) => cartItem.id === producto.id);
    if (indexItem !== -1) {
      const newCart = [...cart];
      newCart[indexItem].cant = cart[indexItem].cant + cant;
      setCart(newCart);
    } 
    else {
      producto.cant=cant
      setCart([...cart, producto]);
    }
  }


  const buyAll = () => setCart([]);

  const removeFromCart = (id) => {
    setCart(cart.filter((producto) => producto.id !== id));
  }


  
  return (
    <>
        <CartContext.Provider value ={{cart, addToCart, buyAll, removeFromCart}}>
            {children}
        </CartContext.Provider>
    </>
  )
}
