import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


export default function NavBar(){



    return(
            <>
            <div className="container-fluid row bg-dark " >
                <h1><Link to='/' className="bg-dark text-white">Gara-Shop</Link></h1>
                    <ul className="nav justify-content-center flex-row flex-md-row">
                        <Link to='/category/remeras' className="d-inline-block navbar-brand text-white">
                            Remeras
                        </Link>
                        <Link to='/category/camisas' className="d-inline-block navbar-brand text-white">
                            Camisas
                        </Link>
                        <Link to='/category/pantalones' className="d-inline-block navbar-brand text-white">
                            Pantalones
                        </Link>
                        <Link to='/cart' className="d-inline-block navbar-brand text-white">
                            <CartWidget/>
                        </Link>
                    </ul>
                </div>
                
            </>
    )
}