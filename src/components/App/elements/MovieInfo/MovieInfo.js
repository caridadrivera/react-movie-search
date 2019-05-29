import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE} from '../../../../config';
import MovieThumb from '../MovieThumb/MovieThumb';
import './MovieInfo.css';


const MovieInfo = ({ clickedMovie }) => (


  <div className="rmdb-movieinfo">
    <div className="rmdb-movieinfo-content">
      <div className="rmdb-movieinfo-thumb">
        <div>
        <MovieThumb
          image={clickedMovie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${clickedMovie.poster_path}` : './images/no_image.jpg'}
        />
        <div className="rmdb-clickedMovieinfo-text">
          <h1>{clickedMovie.title}</h1>
          <h3>PLOT</h3>
          <p>{clickedMovie.overview}</p>
          <h3>IMDB RATING</h3>
          <div className="rmdb-rating">
            <p className="rmdb-score">{clickedMovie.vote_average}</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
)

export default MovieInfo;
