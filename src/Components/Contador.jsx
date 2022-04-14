import { useState } from "react";



export default function Contador() {
    const [cont, setCont] = useState(0)
    return (
    <div>
        <span>La suma es: {cont}</span> 
        <button onClick={() => setCont(cont + 1)}>Sumá</button>
    </div>
    )
}