/* 
 * @author              Juan Acosta <juan.93.ctm@gmail.com>
 * @version             0.0.1
 * @copyright           Todos los derechos reservados para Cooperativa de Trabajo Código Libre Ltda.
*/


import React from 'react';
import Axios from 'axios';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = props.actions.login;
    this.state = {
      username: props.user.name,
      password: "",
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    
    // Axios.post(routes.login, {
    //   email: this.state.username,
    //   password: this.state.password
    // })
    // .then(res => {
    //   this.login(res.data)
    // })
    
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div className="login-form-inputs">
          <div className="login-form-input">
            <label className="login-form-input-item">
              Nombre de usuario:
            </label>
            <input className="login-form-input-item" 
                  type="text" 
                  value={this.state.username} 
                  onChange={this.handleChangeUsername} />
          </div>
          <div className="login-form-input">
            <label className="login-form-input-item">
              Contraseña:
            </label>
            <input className="login-form-input-item"
                  type="text" 
                  value={this.state.password} 
                  onChange={this.handleChangePassword} />
          </div>
        </div>
        <input className="login-form-submit" type="submit" value="Ingresar" />
      </form>
    )
  }
}

export default Login;
