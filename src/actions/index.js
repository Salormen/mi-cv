/* 
 * @author              Juan Acosta <juan.93.ctm@gmail.com>
 * @version             0.0.1
 * @copyright           Todos los derechos reservados para Cooperativa de Trabajo Código Libre Ltda.
*/

// Example

// Login
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = userData => ({type: LOGIN, userData});
export const logout = () => ({type: LOGOUT});
