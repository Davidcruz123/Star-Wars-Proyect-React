import React,{useEffect} from 'react';
import {Datoscontext} from '../store/context'
import {Tarjeta} from '../component/card'
import { Link, useParams } from "react-router-dom";


export const Home=()=>{
const {store,actions}=React.useContext(Datoscontext);

useEffect(
()=>{
 
        actions.getpeople()
      
   
},[])

  
      if (store.peopleloading == false){
        // console.log("people",store.peopleloading)
        // console.log("planetas",store.planetaloading)
        // console.log(store, "store-people")

            return ( <> <h1 style={{marginTop:"50px"}}>Characters</h1>
    <div className="contenedorpeople"   >
        {store.people2.map((person,id)=> <Tarjeta 
        id={id.toString()}
        key={id}
        name={person.name}
        gender={person.gender}
        hairColor={person.hair_color}
        eyeColor={person.eye_color}
        
        
        />)        
    }
        </div>   </>) }  
    
    



else {
         console.log("fail", store.peopleloading, store.planetaloading)
        console.log(store.peopleloading == false && store.planetaloading == false)
        console.log(store,"else people")
    // actions.getpeople()
    // actions.getplanets()
    
    return <h1>Loading</h1> }

}
