export const getEstado = ( {getStore,getActions,setStore} ) => {

    return {

        store:{
            peopleloading: true,
            planetaloading: true,
            people2:[],
            planetas2:[]
            
        },
        actions:{
            
            fetch: (url) => {

                fetch(url)
                    .then(res => res.json()
                    )
                    .then(data => {
                        console.log(data, data.results)
                        return data.results

                    })
                    .catch(err => console.error(err))


            },

            getpeople: () => {
                let peoplefinal = [];
                fetch("https://www.swapi.tech/api/people")
                    .then(res => res.json()
                    )
                    // .then(setStore({ ...store }))
                    .then(data => {
                        console.log(data, data.results)
                        peoplefinal = data.results.slice()
                        console.log(peoplefinal, "linea30- secopia la data original")                            //lista de 10 objetos {uid name url}
                        // setStore({ ...store, people: data.results, peopleloading: false }) 




                        peoplefinal.map(
                            (datos, indice) => { //peoplefinal[indice] = store.fetch(datos.url)


                                fetch(datos.url)
                                    .then(res => res.json()
                                    )
                                    .then(data => {
                                        // console.log(data, data.result,"linea43")
                                        peoplefinal[indice] = data.result.properties
                                        // setStore({ ...store, people: data.results, peopleloading: false })
                                        console.log(peoplefinal, "46")

                                        // if (indice == peoplefinal.length - 1) { setStore({ ...store, people: peoplefinal, peopleloading: false }); console.log(store, "48 store") }
                                        if (indice == peoplefinal.length - 1) { setStore({ people2: [...peoplefinal], peopleloading: false });}
                                        // setStore({ ...store, people2: peoplefinal, peopleloading: false });  console.log(store,"48 store")
                                    })
                                    .catch(err => console.error(err))

                                if (indice == peoplefinal.length - 1) { console.log("aca vamos") }


                            }
                        )


                        console.log(peoplefinal, "imprimir")
                    })
                    .catch(err => console.error(err))


            },
           

            getplanets: () => {

                let planetafinal = [];
                fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json()

                    )

                    .then(data => {

                        console.log(data, data.results, "planetas")
                        planetafinal = data.results.slice()
                        console.log(planetafinal, "linea30- secopia la data original", "planetas")                            //lista de 10 objetos {uid name url}
                        // setStore({ ...store, people: data.results, peopleloading: false }) 




                        planetafinal.map(
                            (datos, indice) => { //peoplefinal[indice] = store.fetch(datos.url)


                                fetch(datos.url)
                                    .then(res => res.json()
                                    )
                                    .then(data => {
                                        // console.log(data, data.result,"linea43")
                                        planetafinal[indice] = data.result.properties
                                        // setStore({ ...store, people: data.results, peopleloading: false })
                                        // console.log(planetafinal, "92", "planetas")
                                        // console.log(store,"92 store")

                                        // if (indice == planetafinal.length - 1) { setStore({ ...store, planetas: planetafinal, planetaloading: false }) }

                                        // setStore({ ...store, planetas: planetafinal, planetaloading: false })


                                        if (indice == planetafinal.length - 1) { setStore({ planetas2: [...planetafinal], planetaloading: false }); }
                                    })
                                    .catch(err => console.error(err))

                                if (indice == planetafinal.length - 1) { console.log("aca vamos") }


                            }
                        )


                        console.log(planetafinal, "planetas")
                    })
                    .catch(err => console.error(err))

            }
        }

        
    }
}

