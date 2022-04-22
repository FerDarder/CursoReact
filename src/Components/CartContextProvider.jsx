import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export default function CartContextProvider({children}) {

  const [cart, setCart] = useState([])

  const addToCart = (producto) => {
    // setCart([...cart, producto])
    const indexItem = cart.findIndex((cartItem) => cartItem.id === producto.id);
    if (indexItem !== -1) {
      //Está sumando como el culo, pero por lo menos encuentra bien el id jeje
      //ahora si anda bien, flasheó en una nomas
      const newCart = [...cart];
      newCart[indexItem].cant = cart[indexItem].cant + producto.cant;
      setCart(newCart);
    } 
    else setCart([...cart, producto]);
  }

  const buyAll = () => setCart([]);

  const removeFromCart = (id) => {
    setCart(cart.filter((plant) => plant.id !== id));
  }


  
  return (
    <>
        <CartContext.Provider value ={{cart, addToCart, buyAll, removeFromCart}}>
            {children}
        </CartContext.Provider>
    </>
  )
}
