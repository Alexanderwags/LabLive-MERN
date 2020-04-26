import React ,{useEffect} from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import SvgHeader from '../svg/Header/SvgHeader'
import labimg from '../assets/img/lab.png'
import SvgUser from '../svg/User/SvgUser'
import Styles from "./styles.module.scss";
import Grid from "@material-ui/core/Grid";
import './desing.scss';
import fondo from '../assets/img/portada.jpg'


function Header({ children, text1 = "", text2 = "", text3 = "" }) {
  useEffect(() => {
    return () => {
      console.log("hola");
    };
  });
  return (
    <div className="header" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="menu-header">
        <div className="menu">
          <img src={labimg} alt="img-lab" className={Styles.logo} />
          <Grid
            container
            className={Styles.url}
            xs={12}
            alignItems="center"
            justify="center"
          >
            {children}
          </Grid>
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
      <div className="box">
        <h1>Lab Live</h1>
        <h3>Siempre Pensando en ti</h3>
        <p>Horario de Atención al Público: 24 Horas</p>
      </div>
    </div>
  );
}



export default Header

