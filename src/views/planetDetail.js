import React from 'react';
import { DetallesPlanetas } from '../component/detallesplanetas'
import { Datoscontext } from '../store/context'
import { Link, useParams } from "react-router-dom";




export const PlanetDetail = () => {
    const { store, actions } = React.useContext(Datoscontext);
    const { id } = useParams();

   



    if (store.planetaloading == false) {

        return (
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <DetallesPlanetas


                    name2={store.planetas2[id].name}
                    climate={store.planetas2[id].climate}
                    population={store.planetas2[id].population}
                    orbital={store.planetas2[id].orbital_period}
                    rotation={store.planetas2[id].rotation_period}
                    diameter={store.planetas2[id].diameter}

                />
            </ div>
        )
    }





    else {

        return <h1>Loading</h1>
    }


}