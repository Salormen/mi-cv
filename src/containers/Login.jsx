/* 
 * @author              Juan Acosta <juan.93.ctm@gmail.com>
 * @version             0.0.1
 * @copyright           Todos los derechos reservados para Cooperativa de Trabajo Código Libre Ltda.
*/


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login, logout} from '../actions';
import Login from '../components/Login';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({login, logout}, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
