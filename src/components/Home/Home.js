import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import SearchBar from '../App/elements/SearchBar/SearchBar';
import FourColGrid from '../App/elements/FourColGrid/FourColGrid';
import MovieThumb from '../App/elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../App/elements/LoadMoreBtn/LoadMoreBtn';
import Header from '../App/elements/Header/Header';
import Spinner from '../App/elements/Spinner/Spinner';
import Navigation from '../App/elements/Navigation/Navigation';
import './Home.css';

class Home extends Component {
  state = {
    movies: [],
    clickedMovies: [],
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ''
  }

componentDidMount() {
  //I want to set the state of loading to true when the component mounts
    this.setState({loading: true})
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    this.fetchItems(endpoint)
    //since JS is asynchronous, this will run after the fetch
  }


  searchItems = (searchTerm) => {
  // console.log(searchTerm)
   // const filteredMovies = this.state.movies.filter(movie=> {
   //   return movie.original_title.includes(searchTerm)
   // })
   // console.log(filteredMovies)
   // this.setState({ filteredMovies: filteredMovies})

    let endpoint = '';
    this.setState({
      movies: [],
      loading: true,
      searchTerm
    })
    if (searchTerm === "") {
    //I want it to go inside of the API and fetch the most popular movies if the user has not typed anything, else show the whole database
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    this.fetchItems(endpoint);
  }


  loadMoreItems = () => {
    // ES6 Destructuring the state insread of writing this.state.searchTerm a million times
    const { searchTerm, currentPage } = this.state;
    let endpoint = '';
    this.setState({ loading: true })

    if (searchTerm === '') {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${currentPage + 1}`;
    }
    this.fetchItems(endpoint);
  }



  fetchItems = (endpoint) => {
    const { movies, searchTerm } = this.state;
    fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      this.setState({
        movies: [...movies, ...result.results],
    //during the actual fetching of movies, I want the loading to be set to false
        loading: false,
        currentPage: result.page,
        totalPages: result.total_pages
      })
    })
  }



  handleMovieClick = (id) => {
    let clickedMovie = this.state.movies.find(movie => movie.id === id)
    if (!this.state.clickedMovies.includes(clickedMovie)) {
      this.setState({ clickedMovies: [...this.state.clickedMovies, clickedMovie]
      }, () => console.log(this.state))
    }
  }

  render() {
    const { movies, loading, currentPage, totalPages, searchTerm } = this.state;

    return (

      <div className="home">
      <div>
      <Navigation />
      </div>
      <Header />
      {/* props are coming to the searchbarrr to be able to get the value of the user iput */}
        {<SearchBar callback={this.searchItems}/>}
          <div className="home-grid">
          {/* here I wnt to to send props to my child FourColGrid */}
            <FourColGrid
          //we are doing a search if we have a searchTerm, otherwise I am fetching only from the popular movies page not the whole db
              header={searchTerm ? 'Search Result' : 'Popular Movies'}
              loading={loading}
              movies={movies}
            >
              {movies.map( (movie) => (

          /* sending props to my MovieThumb which I could just pass through as props to the functional component that is my MovieThumb */
                <MovieThumb
                  key={movie.id}
                  image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : './images/no_image.jpg'}
                  movieId={movie.id}
                  movieName={movie.original_title}
                  movie={movie}
                  handleMovieClick={this.handleMovieClick}
                />

              ))}
            </FourColGrid> {/*closing of FourColGrid, sending in my movieThumb /*}

          {  /* sending all of these things down as children to the FourColGrid in order to be able to call props.children and iterate over everything */}
            {loading ? <Spinner /> : null}
            {(currentPage <= totalPages && !loading) ?
              //sendind text props and callback to loadMore
              <LoadMoreBtn text="More Please" onClick={this.loadMoreItems} />
              : null
            }
          </div>
      </div>
    )
  }
}

export default Home;
