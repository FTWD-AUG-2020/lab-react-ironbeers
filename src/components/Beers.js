import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../images/home.png';

function Beers(props) {
  let beers = props.beers.map((eachBeer) => {
    return (
      <div>
        <li><Link to={`/Beers/${eachBeer._id}`}>{eachBeer.name}</Link></li>
      </div>
    )
  })
  return (
    <div>
      <Link to="/HomePage">
        <img src={Home} alt="home-image"></img>
      </Link>
      {beers}
    </div>
  );
}

export default Beers;
