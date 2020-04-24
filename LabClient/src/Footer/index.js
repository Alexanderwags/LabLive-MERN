import React from 'react'
import SvgFooter from '../svg/SvgOndaHeader'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Styles from './styles.module.scss'
export default function Footer() {
    return (
      <div className={Styles.container}>
        <div className={Styles.ondasvg}>
          <SvgFooter theme={true} centar={false} />
        </div>
        <div className={Styles.foorter}>
          <div className={Styles.dir}>
            <Router>
              <Link to="https://goo.gl/maps/ssGENSbvJRd91y6X9" target="_blank">
                ir a
              </Link>
            </Router>

            <h6>
              Centro Médico Quirúrgico La Trinidad Av. Los Agustinos, Conjunto
              Res. Paramillo, Casa Nº. 1, Zona Industrial Paramillo, San
              Cristobal
            </h6>
          </div>
          <div className={Styles.email}>
            <h1>
              <span class="material-icons">email</span>
            </h1>
            <h6>hola@gmail.com</h6>
          </div>
          <div className={Styles.phonenumber}>
            <h1>
              <span class="material-icons">call</span>
            </h1>
            <h6>(0276)3565093</h6>
            <h6>(0276)5105600</h6>
          </div>
        </div>
        <p class="copyright text-center">
          © Copyright 2020. Todos los derechos reservados. Powered by LabLive
        </p>
      </div>
    );
}
  