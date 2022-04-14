import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function ItemCount({onAdd,stock,initial}){
    function onAdd(cant){
        if(cant>0){
            alert("Agregaste " + cant + " items al carrito");
        }
    }
    
    
    const[cant,setCant] = useState(initial);

    function agregar(){
        if(cant<stock){
            setCant(cant + 1);
        }
    }
    function quitar(){
        if(cant>initial){
            setCant(cant - 1);
        }
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
                <Button variant="dark" onClick={()=> onAdd(cant)}>Comprar</Button>
            </div>
        </>
    )
}