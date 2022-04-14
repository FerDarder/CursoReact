import React from 'react'
import Item from './Item'


    function ItemList({productos}) {
return(
        productos.map(p => (
            <Item
            producto = {p}
            />
            ))
        )
    }         

export default ItemList