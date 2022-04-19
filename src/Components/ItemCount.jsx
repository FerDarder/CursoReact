import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function ItemCount({stock,initial, onAdd}){

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
                <Button variant="dark" onClick={()=> onAdd()}>Comprar</Button>
            </div>
        </>
    )
}