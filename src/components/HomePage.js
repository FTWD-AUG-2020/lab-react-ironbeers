import React from 'react';
import { Link } from 'react-router-dom';
// import RandomBeer from './components/RandomBeer';
// import NewBeer from './components/NewBeer';
// import Beers from './components/Beers';

function HomePage(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to={`/Beers`}>All Beers</Link>
                </li>
                <li>
                    <Link to={`/RandomBeer`}>Random Beer</Link>
                </li>
                <li>
                    <Link to={`/NewBeer`}>New Beer</Link>
                </li>
            </ul>
        </div>
    );
}

export default HomePage;
