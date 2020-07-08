/* 
 * @author              Juan Acosta <juan.93.ctm@gmail.com>
 * @version             0.0.1
 * @copyright           Todos los derechos reservados para Cooperativa de Trabajo Código Libre Ltda.
*/


import {combineReducers} from 'redux';

import user from './user';

const rootReducer = combineReducers({user});

export default rootReducer;
