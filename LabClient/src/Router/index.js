import React from 'react';
import {Switch} from 'react-router'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Pages/Home'
import QuienesSomos from '../Pages/MenuHome/QuienesSomos'
import Header from '../Header'
import Footer from '../Footer'
import ButtonBox from '../ButtonBox'
import info from '../Header/JsonRoutes/inforoutes.json'
const Routers = () => {
    return (
      <>
  
        <Header>
          {info.map((inf) => (
            <ButtonBox text={inf.nom} route={inf.route} key={inf.id} />
          ))}
        </Header>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/quienes-somos/" component={QuienesSomos} />
            <Route path="/servicios" component={Home} />
          </Switch>
        </Router>
        <Footer />
      </>
    );
};




export default Routers;
