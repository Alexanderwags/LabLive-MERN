import React ,{useEffect} from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import SvgHeader from '../svg/Footer/SvgFooter'
import labimg from '../assets/img/lab.png'
import SvgUser from '../svg/User/SvgUser'
import Styles from "./styles.module.scss";
import './desing.scss';



function Header(props) {
  useEffect(() => {
    
    return () => {
       console.log('hola')
    }
  }) 
  return (
      <div className="header">
        <div className="menu">
          <img src={labimg} alt="img-lab" className={Styles.logo} />

          <div className="sesion">
            <Router>
              <Link to="5">Registrase</Link>
              <Link to="5">
                <SvgUser />
              </Link>
            </Router>
          </div>
        </div>
        <SvgHeader />
      </div>
    );
}



export default Header

