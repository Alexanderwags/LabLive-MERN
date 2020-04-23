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

