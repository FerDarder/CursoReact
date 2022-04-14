import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import traerProductos from "../util/traerProductos";
import productos from "../util/productos";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(()=>{
        setLoading(true);
        traerProductos(categoryId)
            .then(resultado => setItems(resultado))
            .catch(error => console.log(error))
            .finally(()=>setLoading(false));
    },[categoryId]);

    if(loading){
        return <h1>Cargando...</h1>
    }

return (
    <div className="container-fluid row justify-content-around">
    <ItemList productos={items}/>
    </div>
)
}

export default ItemListContainer