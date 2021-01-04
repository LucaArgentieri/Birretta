import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './header.css';
import Navbar from './navbar/navbar'
import Home from '../pages/home/home';
import Drinks from '../pages/drinks/drinks';
import Ingredients from '../pages/ingredients/ingredients';
import Wethinkaboutit from '../pages/wethinkaboutit/wethinkaboutit';


function Header() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/drinks">
          <Drinks />
        </Route>
        <Route path="/ingredients">
          <Ingredients />
        </Route>
        <Route path="/wethinkaboutit">
          <Wethinkaboutit />
        </Route>
      </Switch>
    </Router>
  );
}

export default Header;
