import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import SvgOnda from '../svg/SvgOndaHeader'
import labimg from '../assets/img/lab.png'
import Styles from "./styles.module.scss";
import './desing.scss';
function Header(props) {
    return (
      <div className="header">
        <div className="hero-gradient">
          <SvgOnda className="svg" theme={true} centrar={true} />
        </div>
        <div className="menu">
          <img src={labimg} alt="img-lab" className={Styles.logo} />
          <Router>
            <ul className="routes">
              <li>
                <Link to="/hola-mudo">Inicio</Link>
              </li>
              <li>
                <Link to="/">Servicios</Link>
              </li>
              <li>
                <Link to="5">¿Quienes Somos?</Link>
              </li>
              <li>
                <Link to="5">Contactanos</Link>
              </li>
              <li>
                <Link to="5">Resultados en linea</Link>
              </li>
            </ul>
          </Router>
          <div className="sesion">
             <Router>
              <Link to="5">Sign in</Link>
             </Router>
          </div>
        </div>
     
      </div>
    );
}



export default Header

