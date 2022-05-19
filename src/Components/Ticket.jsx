import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap'


function Ticket() {
  return (
  <>
            <h2 className='d-flex justify-content-center'> Felicitaciones por tu compra</h2>
            <Link to='/' className='d-flex justify-content-center text-white'><Button variant="primary">Ir al inicio</Button></Link>

  </>
  )
}

export default Ticket