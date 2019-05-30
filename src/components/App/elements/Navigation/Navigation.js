import React from 'react';
import { Link } from 'react-router-dom';
import MovieInfo from '../MovieInfo/MovieInfo'
import './Navigation.css';

const Navigation = () => (
  <div className="rmdb-navigation">
    <div className="rmdb-navigation-content">
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>/</p>
      <p> Movie </p>
    </div>
  </div>
)


export default Navigation;
