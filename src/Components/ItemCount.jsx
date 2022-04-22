import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function ItemCount({stock,initial, onAdd}){

    const[cant,setCant] = useState(initial);

    function agregar(){
            setCant(cant + 1);
    }
    function quitar(){
            setCant(cant - 1);
    }
    
    
    
    return(
        <>
            <div className="d-flex ">
                <Button variant="dark" onClick={()=> agregar()}>+</Button>
                <p>{cant}</p>
                <Button variant="dark" onClick={()=> quitar()}>-</Button>
                <br />
                <br />
                
            </div>
            <br />
            
            <div className="d-flex ">
                <Button variant="dark" onClick={()=> onAdd({cant})}>Comprar</Button>
            </div>
        </>
    )
}