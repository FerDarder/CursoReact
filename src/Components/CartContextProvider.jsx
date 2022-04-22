import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export default function CartContextProvider({children}) {

  const [cart, setCart] = useState([])

  const addToCart = (producto) => {
    // setCart([...cart, producto])
    const indexItem = cart.findIndex((cartItem) => cartItem.id === producto.id);
    if (indexItem !== -1) {
      // cart[indexItem].cant += producto.cant
      const newCart = [...cart];
      newCart[indexItem].cant = cart[indexItem].cant + producto.cant;
      setCart(newCart);
    } 
    else setCart([...cart, producto]);
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
