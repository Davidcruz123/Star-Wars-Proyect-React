import React from 'react';
import { Link} from "react-router-dom";
export const Navbar=()=>{

    return(
        <nav className="navbar navbar-light bg-light">
            <Link to={"/"}>
            <img className="logostarwars" src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png" alt=""/>
            </Link>
            
            <select className="btn btn-primary form-select" aria-label="Default select example">
                <option className="text-primary" selected>Favorites</option>
                <option className="text-primary" value ="1">One</option>
                <option className="text-primary" value="2">Two</option>
                <option className="text-primary" value="3">Three</option>
            </select>

        </nav>
    )
    
}