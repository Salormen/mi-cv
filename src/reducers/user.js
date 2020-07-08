/* 
 * @author              Juan Acosta <juan.93.ctm@gmail.com>
 * @version             0.0.1
 * @copyright           Todos los derechos reservados para Cooperativa de Trabajo Código Libre Ltda.
*/


import {
  LOGIN,
  LOGOUT
} from '../actions';

const initialState = {
  email: "",
  token: "",
  id: 0,
  nickname: "usuario no logueado"
}

export default function user(state=initialState, action) {
  //const newState = {...state}
  switch (action.type) {
    case LOGIN:
      //newState.name = action.username
      return action.userData;

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}
