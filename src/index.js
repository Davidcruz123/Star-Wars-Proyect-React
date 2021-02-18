import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Tarjeta} from './component/card';
import {Navbar} from './views/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/navbar.css'
import {Flux} from './store/flux'




ReactDOM.render(
  <React.StrictMode>
    <Navbar />
   {/* <Tarjeta /> */}
  <Flux />
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

