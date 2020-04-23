import React from 'react';
import {Switch} from 'react-router'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Pages/Home'
import Header from '../Header'
import Footer from '../Footer'
const Routers = () => {
    return (
      <>
          <Header />
          <Router>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Hola-mundo" component={Header} />
            <Route path="/explore" component={Home} />
        </Switch>
          </Router>
          <Footer />
      </>
    );
};




export default Routers;
