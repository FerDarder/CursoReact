import React from 'react'
import Item from './Item'


    function ItemList({productos}) {
return(
        <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
            {productos.map((p) => (
                <div className="col-md-3" key={p.id}>
                <br /><br />
                <Item producto={p} />
            </div>
            ))}
        </div>
        </div>
        )
    }         

export default ItemList