import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Details(props) {
  let [beer, setBeer] = useState({});
  console.log(props.match.params.id);
  useEffect(() => {
    async function getData() {
      let res = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`
      );
      console.log(res.data);
      setBeer(res.data);
    }
    getData();
  }, []);
  console.log(beer);
  return (
    <div>
      <h1>Details</h1>
      <img src={beer.image_url}></img>
      <h1>{beer.name}</h1>;<p>{beer.description}</p>
    </div>
  );
}

export default Details;
