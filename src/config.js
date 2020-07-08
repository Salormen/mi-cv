/* 
 * @author              Juan Acosta <juan.93.ctm@gmail.com>
 * @version             0.0.1
 * @copyright           Todos los derechos reservados para Cooperativa de Trabajo Código Libre Ltda.
*/

var backends = [
  //    Servidor LOCAL
 "",

  //    Servidor TESTING
 "",
  
  // Backend produccion
  ""
];

var serverIndex = 1;

export default {
  be_base: "http://".concat(backends[serverIndex]),
  be_rest: "http://".concat(backends[serverIndex]) + "rest/",
}