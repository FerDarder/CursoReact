import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import '../App.css'

function Item({producto}) {

    return (

        <>
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
        <div className="overflow">
            <img src={producto.image} alt="a wallpaper" className="card-img-top"  style={{width:'200px', height:'300px'}}/>
        </div>
        <div className="card-body text-light">
            <h4 className="card-title">{producto.name}</h4>
            <p className="card-text text-secondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam.
            </p>
                <Link to = {`/item/${producto.id}`}><a className="btn btn-outline-secondary round-0">Ver detalle</a></Link>
        </div>
    </div>
        </>
    )
}

export default Item