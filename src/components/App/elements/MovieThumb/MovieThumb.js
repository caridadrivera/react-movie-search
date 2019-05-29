import React from 'react';
import { Link } from 'react-router-dom';
import MovieInfo from '../MovieInfo/MovieInfo';
import './MovieThumb.css';

const MovieThumb = ({ image, movieId, movieName, handleMovieClick}) => (

  <div className="moviethumb">
    {/* You can send props via the Links to object. Here we create our own "movieName", on click, redirect to MovieIngo*/}
    {
      <Link to={{ pathname: `/${movieId}`,  movieName: `${movieName}`}}>
        <img src={image} onClick={() => handleMovieClick(movieId)}/>
      </Link>

    }

  </div>

)



export default MovieThumb;
