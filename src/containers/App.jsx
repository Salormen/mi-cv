/* 
 * @author              Juan Acosta <juan.93.ctm@gmail.com>
 * @version             0.0.1
 * @copyright           Todos los derechos reservados para Cooperativa de Trabajo Código Libre Ltda.
*/


import React from 'react';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import {Provider} from 'react-redux';
import CV from '../components/CV';

const App = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" strict component={CV}/>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
