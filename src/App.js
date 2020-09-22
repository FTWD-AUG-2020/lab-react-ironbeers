import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Beers from './components/Beers';
import HomePage from './components/HomePage';
import Axios from 'axios'

function App() {

  let [beers, setBeers] = useState([])
  let [loading, setLoading] = useState(true)
  useEffect(() => {
    async function getData() {
      let res = await Axios.get("https://ih-beers-api2.herokuapp.com/beers")
      console.log(res.data)
      setBeers(res.data)
      setLoading(false)
    }
    getData()
  }, [])
  return (
    <div className="App">
      {loading ? "loading..." : null}
      <Switch>
        <Route path="/HomePage" render={() => <HomePage />} />
        <Route path="/Beers" render={(props) => <Beers beers={beers} {...props} />} />
        <Route path="/NewBeer" render={() => <NewBeer />} />
        <Route path="/RandomBeer" render={() => <RandomBeer />} />
      </Switch>
    </div>
  );
}

export default App;
