import React from 'react';
import {DetallesPersonaje} from '../component/detallespesonajes'
import { Datoscontext } from '../store/context'
import { Link, useParams } from "react-router-dom";




export const CharacterDetail=()=>{
    const { store, actions } = React.useContext(Datoscontext);
    const { id } = useParams();

    return(
        <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
        <DetallesPersonaje 
        name={store.people2[id].name}
        year={store.people2[id].birth_year}
        gender={store.people2[id].gender}
        height={store.people2[id].height}
        skin={store.people2[id].skin_color}
        eye={store.people2[id].eye_color}

        // name2={store.planetas2[id].name}
        // climate={store.planetas2[id].climate}
        // population={store.planetas2[id].population}
        // orbital={store.planetas2[id].orbital_period}
        // rotation={store.planetas2[id].rotatio_period}
        // diameter={store.planetas2[id].diameter}
        
        />
        </ div>
    )
}