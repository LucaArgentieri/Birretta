import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './header.css';
import Home from '../pages/home/home';
import Drinks from '../pages/drinks/drinks';
import Ingredients from '../pages/ingredients/ingredients';
import Wethinkaboutit from '../pages/wethinkaboutit/wethinkaboutit';


function Header() {

  return (
    <Router>
    <div className="Header">
      <div className="navbar__container">
          <Link to="/"><h1>Birretta</h1></Link>
          <ul>
              <li><Link to="drinks">Beers</Link></li>
              <li><Link to="ingredients">Ingredients</Link></li>
              <li><Link to="wethinkaboutit">We'll think about it</Link></li>
          </ul>
      </div>
      <Switch>
          <Route path="/drinks">
            <Drinks />
          </Route>
          <Route path="/ingredients">
            <Ingredients />
          </Route>
          <Route path="/wethinkaboutit">
            <Wethinkaboutit />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default Header;
