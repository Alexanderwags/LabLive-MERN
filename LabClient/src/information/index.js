import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import cn from "classnames";
import Im from './imgs.js'
import "./design.scss";
import order from "./styles.module.scss";

const Information = ({title,description,cont}) => {
   const mystyle = {
   
     height: "400px",
     backgroundImage: `url(${Im().slides[cont]})`,
     backgroundSize: cont === "0" ? "40% 80%" : cont === "1" ?  "" : "70% 100%"
   };
  //  `url(${Im().slides[cont]})`
    return (
      <div
        className={cn("container", cont === "1" ? order.rever : "Order.rever")}
      >
        <div className="card" style={mystyle}></div>
        {console.log(Im().slides[0])}
        <div className="info">
          <div className="cont_idem">
            <h1>{title}</h1>
            <p>{description}</p>

            <div className="sesion">
              <Router>
                <Link to="5" className="btn">Sign in</Link>
              </Router>
            </div>
          </div>
        </div>
      </div>
    );
};




export default Information;
