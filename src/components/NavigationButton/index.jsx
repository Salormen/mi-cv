/* 
 * @author              Juan Acosta <juan.93.ctm@gmail.com>
 * @version             0.0.1
 * @copyright           Todos los derechos reservados para Cooperativa de Trabajo Código Libre Ltda.
*/


import React from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';

const NavigationButton = ({label, icon, linkTo}) => (
  <NavLink to={linkTo} className="cv-button cv-navigation-button" activeClassName="cv-selected-navlink">
    <i className="cv-button-elem material-icons">
      {icon}
    </i>
    <label className="cv-button-elem">{label}</label>
  </NavLink>
);

NavigationButton.propTypes = {
};

export default NavigationButton;