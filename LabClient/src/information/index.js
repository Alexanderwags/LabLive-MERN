import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import cn from "classnames";
import Im from './imgs.js'
import "./design.scss";
import order from "./styles.module.scss";
import Grid from '@material-ui/core/Grid'

const Information = ({title,description,cont}) => {
   const mystyle = {
   
     height: "400px",
     backgroundImage: `url(${Im().slides[cont]})`,
     backgroundSize: cont === "0" ? "40% 80%" : cont === "1" ?  "" : "70% 100%"
   };
 
    return (
      <div className={cn("container")}>
        <Grid
          container
          item
          xs={12}
          className={cn(cont === "1" ? order.rever : "Order.rever")}
        >
          <Grid container xs={12} sm={6}>
            <div className="card" style={mystyle}></div>
          </Grid>
          <Grid container xs={12} sm={6}>
            <div className="info">
              <div className="cont_idem">
                <h1>{title}</h1>
                <p>{description}</p>

                <div className="sesion">
                  <Router>
                    <Link to="5" className="btn">
                      Sign in
                    </Link>
                  </Router>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
};

 


export default Information;
