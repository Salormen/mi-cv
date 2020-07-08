import React from 'react';
import NavigationButton from '../NavigationButton';
import { Route } from 'react-router-dom'
import './index.css';
import DatosPersonales from '../DatosPersonales';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const sectionBuilder = (label, icon, path, component) => {
  return { label, icon, path, component }
}

let sections = [
  sectionBuilder("Sobre mi", "assignment_ind", "/sobre-mi", DatosPersonales),
  sectionBuilder("Estudios", "assignment_ind", "/estudios", DatosPersonales),
  sectionBuilder("Experiencia laboral", "assignment_ind", "/experiencia", DatosPersonales),
  sectionBuilder("Proyectos", "assignment_ind", "/proyectos", DatosPersonales),
  sectionBuilder("Conocimientos complementarios", "assignment_ind", "/conocimientos", DatosPersonales),
  sectionBuilder("Otros aspectos", "assignment_ind", "/conocer-mas", DatosPersonales)
]

const CV = ({ actions, user, queries, patients }) => (
  <div className="cv">  
    <nav className="cv-navbar">
      <img className="cv-navbar-logo" alt="Logo"/>
    </nav>
    <div className="cv-contents">
      <div className="cv-contents-left-panel">
        {
          sections.map((s,i) =>
            (
              <NavigationButton 
                key={i} 
                className="cv-contents-left-panel-item" 
                label={s.label} 
                icon={s.icon} 
                linkTo={s.path}
              />
            )
          )
        }
      </div>
      <div className="cv-contents-view">
        {
          sections.map((s,i) =>
            (
              <Route 
                key={i}
                path={s.path} 
                component={s.component}
              />
            )
          )
        }
        <Redirect to="/sobre-mi"/>
      </div>
    </div>
  </div>  
)

export default CV;