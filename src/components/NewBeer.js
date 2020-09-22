import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Home from '../images/home.png';
import axios from 'axios';

function NewBeer(props) {
  let [state, setState] = useState({})
  const handleChange = (e) => {
    console.log(e.target.placeholder, e.target.value)
    setState({
      ...state, //make a copy of OG state and add it to the new state
      [e.target.placeholder]: e.target.value //this converts the object to a string
    })
  }



  const handleSubmit = (e) => {
    e.preventDefault() //prevent page from re rendering
    console.log(state)
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', state)
  }
  return (
    <div>
      
      <Link to="/HomePage">
        <img src={Home} alt="home-image"></img>
      </Link>
      Add A New Beers
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="name" type="text" ></input>
        <input onChange={handleChange} placeholder="tagline" type="text" ></input>
        <input onChange={handleChange} placeholder="description" type="text" ></input>
        <input onChange={handleChange} placeholder="first_brewed" type="text" ></input>
        <input onChange={handleChange} placeholder="brewers_tips" type="text" ></input>
        <input onChange={handleChange} placeholder="attenuation_level" type="number" ></input>
        <input onChange={handleChange} placeholder="contributed_by" type="text" ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewBeer;
