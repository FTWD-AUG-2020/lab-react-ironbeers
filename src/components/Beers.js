import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../images/home.png';

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
