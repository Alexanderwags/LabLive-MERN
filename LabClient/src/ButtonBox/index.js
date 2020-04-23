import React from 'react'
import cn from 'classnames'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Styles from './styles.module.scss'
function ButtonBox({ icon = "", text = "prueba", route = "" }) {
  return (
    <div className={Styles.container}>
      <Router>
        <Link to={`${route}`} className={cn(Styles.item,Styles.btn)}>
          {text}
        </Link>
      </Router>
    </div>
  );
}



export default ButtonBox