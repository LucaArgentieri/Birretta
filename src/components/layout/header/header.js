import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './header.css';
import Navbar from './navbar/navbar';
import Footer from '../footer/footer'
import Home from '../pages/home/home';
import Beers from '../pages/drinks/drinks';
import RandomBeer from '../pages/randombeer/randombeer';
import BeerTemplate from '../beerTemplate/beerTemplate'
import Error from '../error/error';


function Header() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/beers">
          <Beers />
        </Route>
        <Route path="/randombeer">
          <RandomBeer />
        </Route>
        <Route path="/beers/:id" children={<BeerTemplate />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default Header;
