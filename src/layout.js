import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import insertarContext from './store/context'
import {Home} from './views/home'
import {Home2} from './views/home2'
import { Navbar } from './views/navbar'
import {Detalles} from './component/detallespesonajes'
import { CharacterDetail } from "./views/characterDetail";
import { PlanetDetail } from "./views/planetDetail";

const Layout = () => {

    return (
            <div>
                <BrowserRouter>
                <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                            <Home2 />
                        </Route>

                    <Route  path="/character/:id" children={<CharacterDetail />}>
                        {/* <CharacterDetail /> */}
                        </Route>
                    <Route path="/planetas/:id" children={<PlanetDetail />}>
                       
                    </Route>
                    <Route path='*'>
                        <h1>Error, path incorrecto</h1>
                    </Route>

                    </Switch>
                </BrowserRouter>
            </div>



            )
}

export default insertarContext(Layout)