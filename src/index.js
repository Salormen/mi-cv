/* 
 * @author              Juan Acosta <juan.93.ctm@gmail.com>
 * @version             0.0.1
 * @copyright           Todos los derechos reservados para Cooperativa de Trabajo Código Libre Ltda.
*/


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
//import App from './App';
import App from './containers/App';
import configureStore from './store';
import * as serviceWorker from './serviceWorker';


const store = configureStore();

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
