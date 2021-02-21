import React from 'react';
import { Link} from "react-router-dom";
import { Datoscontext } from '../store/context'

// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export const Navbar=()=>{

    const { store, actions } = React.useContext(Datoscontext);

let lista="fasfd"
if (store.favoritos.length>0){lista=""}
else{lista="textoaleatorio"}



    return(
        <nav className="navbar navbar-light bg-light">
            <Link to={"/"}>
            <img className="logostarwars" src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png" alt=""/>
            </Link>
      

            <div class="dropdown show">
                <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Favorites-{store.favoritos.length}
                 </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {lista && <a class="dropdown-item" href="#">No favorites added yet!!!</a>}
                {/* {lista} */}
                   { store.favoritos.map(
                       (elemento,index)=>{return(
                           <div className="divfavorites" key={index} style={{ display: "flex" }}>
                               <Link to={"/" + elemento.tipo + "/" + elemento.id}>
                               <a class="dropdown-item" href="#">{elemento.nombre}</a>
                               </Link>
                               <p onClick={()=>{actions.eliminarfavorito(elemento.nombre)}} >   &#128465;</p>
                               
                           </div>)
                       }
                   )}
                  
                </div>
            </div>


        </nav>
    )
    
}