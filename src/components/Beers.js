import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Home from '../images/home.png';
import axios from 'axios';

function Beers(props) {
  let beers = props.beers.map((eachBeer) => {
    return (
      <div>
        <img src={eachBeer.image_url}></img>
        <li>
          <Link to={`/Beers/${eachBeer._id}`}>{eachBeer.name}</Link>
        </li>
        <p>{eachBeer.description}</p>
      </div>
    );
  });

  const [searchBeer, setSearchBeer] = useState([])

  async function beerLookUp(e) {
    console.log(e.target.value)
    let res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
    console.log(res)
    setSearchBeer(res.data)
  }

  const showBeer = () => {
    return (
      searchBeer.map((beer) => {
        return (
          <li><Link to={`/Beers/${beer._id}`}>{beer.name}</Link></li>
        )
      })
    )
  }

  return (
    <div>
      <Link to="/HomePage">
        <img src={Home} alt="home-image"/>
      </Link>
      {showBeer()}
      <br></br>
      <input onChange={beerLookUp} type="text" name="search" />
      {beers}
    </div>
  );
}

export default Beers;
