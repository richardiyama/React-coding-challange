
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import './Home.css';

function Home()
{
  
    return (
      <>
        <Banner content="Popular Titles" />
        <div className="wrapper home">
          <div className="tile">
            <Link to="/series">
              <div className="top-tile">Series</div>
            </Link>
            <div className="title-tile">Popular Series</div>
          </div>
          <div className="tile">
            <Link to="/movies">
              <div className="top-tile">Movies</div>
            </Link>
            <div className="title-tile">Popular Movies</div>
          </div>
        </div>
      </>
    );
  }
export default Home
