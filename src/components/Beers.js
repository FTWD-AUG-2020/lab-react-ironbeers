import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../images/home.png';

function Beers(props) {
  return (
    <div>
      Beers
      <Link to="/HomePage">
        <img src={Home} alt="home-image"></img>
      </Link>
    </div>
  );
}

export default Beers;
