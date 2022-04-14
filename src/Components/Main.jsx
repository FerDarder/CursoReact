import React from "react";



export default function Main({formaPago}){
    
    return(
        <>
        <div className="d-flex justify-content-center">
            <h2>Medios de pago</h2>
        </div>
        <div className="d-flex justify-content-center">
            <ul>
                {formaPago.map((item) => <li>{item}</li>)}
            </ul>
        </div>
        </>
    )


}