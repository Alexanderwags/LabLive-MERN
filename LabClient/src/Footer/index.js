import React from 'react'
import SvgFooter from '../svg/Footer/SvgFooter'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Styles from './styles.module.scss'
import Grid from '@material-ui/core/Grid'
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from '@material-ui/icons/Phone';



export default function Footer() {
    return (
      <div className={Styles.container}>
        <SvgFooter />
        <div className={Styles.foorter}>
          <Grid container item xs={12}>
            <Grid container xs={12} sm={4} className={Styles.centar}>
              <Router>
                <Link
                  to="https://goo.gl/maps/ssGENSbvJRd91y6X9"
                  target="_blank"
                >
                  <RoomIcon fontSize="large" style={{ color: "WHITE" }} />
                </Link>
                <h6>
                  Centro Médico Quirúrgico La Trinidad Av. Los Agustinos,
                  Conjunto Res. Paramillo, Casa Nº. 1, Zona Industrial
                  Paramillo, San Cristobal
                </h6>
              </Router>
            </Grid>
            <Grid container xs={12} sm={4} className={Styles.centar}>
              <EmailIcon style={{ color: "WHITE" }} />
              <h6>hola@gmail.com</h6>
            </Grid>
            <Grid container xs={12} sm={4} className={Styles.centar}>
              <PhoneIcon style={{ color: "WHITE" }} />

              <h6>(0276)3565093</h6>
              <h6>(0276)5105600</h6>
            </Grid>
          </Grid>
          <Grid container xs={12} className={Styles.centar}>
            <p className={Styles.end}>
              © Copyright 2020. Todos los derechos reservados. Powered by
              LabLive
            </p>
          </Grid>
        </div>
      </div>
    );
}
