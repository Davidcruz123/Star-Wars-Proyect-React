import React, { useState,useEffect } from 'react';
import { AllData } from './flux'
import { Home } from '../views/home'
import { Home2 } from '../views/home2'
import {getEstado} from './flux'


export const Datoscontext = React.createContext();

const insertarContext=Componente=>{



    const EnvoltorioStore = (props) => {
        const [estado, setEstado] = useState(
            getEstado({
                getStore: () => estado.store,
                getActions: () => estado.actions,
                setStore: StoreActualizado =>
                    setEstado({
                        store: Object.assign(estado.store, StoreActualizado),
                        actions: { ...estado.actions }
                    })
            })
        );

            useEffect(() => {
               estado.actions.getpeople() 
               estado.actions.getplanets()
            }, [])


        return (
            <Datoscontext.Provider value={estado}>
               <Componente {...props} />
            </Datoscontext.Provider>
        )

      

    }

    return EnvoltorioStore

}

export default insertarContext

 