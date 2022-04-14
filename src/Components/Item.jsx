import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';

function Item({producto}) {
    function onAdd(cant){
        if(cant>0){
            alert("Agregaste " + cant + " items al carrito");
        }
    }
  return (
        
            <Card className="" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.image} />
        <Card.Body>
            <Card.Title>{producto.name}</Card.Title>
            <Card.Text>
            {producto.price}
            </Card.Text>
            
            <Link to = {`/item/${producto.id}`}>Ver detalle</Link>
        </Card.Body>
        </Card>
  )
}

export default Item