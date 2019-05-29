import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { API_URL, API_KEY } from '../../config';

import Home from '../Home/Home';
import MovieInfo from './elements/MovieInfo/MovieInfo'
// import MovieThumb from './elements/MovieThumb/MovieThumb'
//


class App extends React.Component{

  state = {
    movies: [],
    clickedMovie: {}
  }

  componentDidMount() {
      const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      this.fetchItems(endpoint)
    }


  fetchItems = (endpoint) => {
    const { movies } = this.state;
      fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        this.setState({
          movies: [...movies, ...result.results]
        })
      })
    }



  handleMovieClick = (id) => {
    let clickedMovie = this.state.movies.find(movie => movie.id === id)
    console.log(clickedMovie)
    this.setState({ clickedMovies: clickedMovie})
    }




render() {
  console.log(this.state)
  return (
    <BrowserRouter>
      <Switch>
         <Route path="/"  component={Home} />
         <Route path="/:movie_id" component={MovieInfo} clickedMovie={this.state.clickedMovie} />
      </Switch>
   </BrowserRouter>
    )
  }

}
export default App;
