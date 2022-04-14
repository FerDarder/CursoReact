import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import  traerProducto from '../util/traerProducto'
import { useParams } from 'react-router-dom';


function ItemDetailCointainer() {

    const [producto, setProducto] = useState({});
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      traerProducto(id)
        .then((res) => {
          setProducto(res);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    },[id]);

    if (loading) {
      return <h1>Cargando producto...</h1>; }

  return (
    <>
      <div className='row'>
        <ItemDetail producto={producto}/>
      </div>
    </>
  )
}

export default ItemDetailCointainer