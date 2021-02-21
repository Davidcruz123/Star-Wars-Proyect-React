import React, { useEffect } from 'react';
import {DetallesPersonaje} from '../component/detallespesonajes'
import { Datoscontext } from '../store/context'
import { Link, useParams } from "react-router-dom";




export const CharacterDetail=()=>{
    const { store, actions } = React.useContext(Datoscontext);
    const { id } = useParams();



    if (store.peopleloading == false) {
     
        return (
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <DetallesPersonaje
                    name={store.people2[id].name}
                    year={store.people2[id].birth_year}
                    gender={store.people2[id].gender}
                    height={store.people2[id].height}
                    skin={store.people2[id].skin_color}
                    eye={store.people2[id].eye_color}



                />
            </ div>
        )
    }





    else {
   
        return <h1>Loading</h1>
    }













}