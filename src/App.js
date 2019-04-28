import React, { Component } from 'react';
import './App.css';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home/Home.js';
import LandingPage from './components/LandingPage/LandingPage.js';
import Howitworks from './components/Howitworks.js';
import OfferARide from './components/OfferARide.js';
import Menu from './components/Menu.js';
import Notexist from "./components/404.js"

import {HOME_PATH, LANDINGP_PATH} from './components/constants.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>

            <Router>
                <div className="AppWrap">
                    <Header></Header>
                    <Menu></Menu>
                    <Switch>
                        <Route path={LANDINGP_PATH} component={LandingPage} exact />
                        <Route path={HOME_PATH} component={Home} />
                        <Route path="/offeraride" component={OfferARide} />
                        <Route path="/howitworks" component={Howitworks} />
                        <Route component={Notexist} />
                    </Switch>
                    <Footer></Footer>
                </div>
            </Router>

      </Provider>
    );
  }
}

export default App;
