import React, { useContext } from "react";
import { CartContext } from "./CartContextProvider";


export default function CartWidget(){

    const {cart} = useContext(CartContext)

    let  total =0;
    cart.forEach(item => {
        total+=item.cant;
    });
    return(
    <>
        🛒({total})
    </>)
}