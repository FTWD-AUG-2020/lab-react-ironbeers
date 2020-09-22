import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Beers from './components/Beers';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      This will be on every page
      <Switch>
        <Route path='/HomePage' render={() => <HomePage />} />
        <Route path='/Beers' render={() => <Beers />} />
        <Route path='/NewBeer' render={() => <NewBeer />} />
        <Route path='/RandomBeer' render={() => <RandomBeer />} />
      </Switch>
    </div>
  );
}

export default App;
