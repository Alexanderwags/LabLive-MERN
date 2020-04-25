import React from 'react'
import cn from 'classnames'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Styles from './styles.module.scss'
import Grid from '@material-ui/core/Grid'
function ButtonBox({ icon = "", text = "prueba", route = "" }) {
  return (
    <Grid container xs={12} sm={3} className={Styles.container}>
        <Router>
        <Link to={`${route}`} className={cn(Styles.item, Styles.btn)}>
          {text}
        </Link>
      </Router>
    </Grid>
  );
}



export default ButtonBox