import React from 'react'
import { Link } from 'react-router-dom';


function Ticket() {
  return (
  <>
            <h2 className='d-flex justify-content-center'> Felicitaciones por tu compra</h2>
            <Link to='/' className='d-flex justify-content-center'>Ir al inicio</Link>

  </>
  )
}

export default Ticket