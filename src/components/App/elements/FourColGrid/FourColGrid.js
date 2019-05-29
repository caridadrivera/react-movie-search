import React from 'react';
import './FourColGrid.css';

const FourColGrid = (props) => {
  console.log('my props as children', props.children)

  const renderMovies= () => {
    //I want this method to render out my movieThumb which I have sent down as a prop in the moviepage
    //using i as an index
    const movies = props.children.map( (element, i) => (
      <div key={i} className="movie-element">
        {element}
      </div>
    ))
    return movies;
  }

  return (
    <div className="movie-grid">
      <div className="movie-grid-content">
         {renderMovies()}
      </div>
    </div>
  )
}


export default FourColGrid;
