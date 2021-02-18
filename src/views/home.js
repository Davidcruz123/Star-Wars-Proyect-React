import React,{useEffect} from 'react';
import {Datoscontext} from '../store/flux'
import {Tarjeta} from '../component/card'
import {Tarjeta2} from '../component/card2'


export const Home=()=>{
const {store,actions}=React.useContext(Datoscontext);

useEffect(
()=>{
 
        actions.getpeople()
      
   
},[])

    // useEffect(
    //     () => {
           
    //         actions.getplanets()
    //     }, [])


//     if (store.peopleloading == false && store.planetloading == false) {
//     console.log("ambas",store.planetaloading,store.peopleloading)
//         return (<> <h1>Caracters</h1>
//             <div className="contenedorpeople">
//                 {store.people.map(person => <Tarjeta
//                     name={person.name}
//                     gender={person.gender}
//                     hairColor={person.hair_color}
//                     eyeColor={person.eye_color}


//                 />)
//                 }
//             </div>

//             <h1>Planetas</h1>
//             {store.planetas.map(planeta => <Tarjeta2
//                 name={planeta.name}
//                 population={planeta.population}
//                 terrain={planeta.terrain}

//             />

//             )}


//         </>)
//     }

    
    
//      else if (store.planetaloading == false ) {  //store.peopleloading==false&&
//          console.log("planetas",store.planetaloading)
//          console.log("people",store.peopleloading)
//         console.log(store,"store-planeta")

// return (
  
//     <>
  
//     <h1>Planetas</h1>
//     {store.planetas.map(planeta=><Tarjeta2 
//     name={planeta.name}
//     population={planeta.population}
//     terrain={planeta.terrain}
    
//     />

//     )}

    
//     </>
    
//         )}
      if (store.peopleloading == false){
        console.log("people",store.peopleloading)
        console.log("planetas",store.planetaloading)
        console.log(store, "store-people")
            return ( <> <h1>Caracters</h1>
    <div className="contenedorpeople">
        {store.people.map(person=> <Tarjeta 
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
        console.log(store)
    // actions.getpeople()
    // actions.getplanets()
    
    return <h1>Loading</h1> }

}
