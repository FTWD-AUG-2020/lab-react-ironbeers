import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Home from '../images/home.png';
import axios from 'axios';

function RandomBeer(props) {
  let [randomBeer, setRandomBeer] = useState([]);
  useEffect(() => {
    async function getRandomBeer() {
      let res = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      );
      setRandomBeer(res.data);
    }
    getRandomBeer();
  }, []);
  return (
    <div>
      <Link to="/HomePage">
        <img src={Home} alt="home-image"></img>
      </Link>
      <h1>Beers</h1>
      <img src={randomBeer.image_url} alt="home-image"></img>
      <h3>{randomBeer.name}</h3>
      <p>{randomBeer.tagline}</p>
    </div>
  );
}

export default RandomBeer;
