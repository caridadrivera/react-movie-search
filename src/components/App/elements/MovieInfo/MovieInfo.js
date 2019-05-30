import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE} from '../../../../config';
import MovieThumb from '../MovieThumb/MovieThumb';
import Navigation from '../Navigation/Navigation'
import './MovieInfo.css';


const MovieInfo = ({ clickedMovie }) => {
  // console.log(clickedMovie);
  return clickedMovie ?
<div>
  <Navigation />
  <div className="rmdb-movieinfo" >
    <div className="rmdb-movieinfo-content">

        <div>
        <div className="rmdb-clickedMovieinfo-text">
          <h1>{clickedMovie.title}</h1>
          <h3>PLOT</h3>
          <p>{clickedMovie.overview}</p>
          <h3>IMDB RATING</h3>
          <div className="rmdb-rating">
            <p className="rmdb-score">{clickedMovie.vote_average}</p>
          </div>
          <div className="rmdb-movieinfo-thumb">
          <MovieThumb
            image={clickedMovie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${clickedMovie.poster_path}` : './images/no_image.jpg'}
          />
          </div>
        </div>
        </div>
      </div>

    </div>
  </div> : null
}

export default MovieInfo;
