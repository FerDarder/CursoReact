import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore} from "firebase/firestore"



function ItemDetailCointainer() {

    const [producto, setProducto] = useState({});
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const db = getFirestore();
      
      const productoSeleccionado = doc(db, "productos", id)
      getDoc(productoSeleccionado).then(item =>{
        setProducto({id: item.id, ...item.data()});
      })
      setLoading(false);

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