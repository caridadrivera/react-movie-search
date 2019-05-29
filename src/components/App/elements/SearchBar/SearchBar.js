import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';
//this is stateful, I will use a class component

class SearchBar extends Component {
  state = {
    value: ''
  }

  // Must have this here so we can reset it
  timeout = null;

  searching = (event) => {
    // ES6 Destructuring prop
    const { callback } = this.props;
    //this is the value from the input field that I want to grab
    this.setState({ value: event.target.value })
    //we clear the old timeout and we assign a new timeout.
    clearTimeout(this.timeout);
    // Set a timeout to wait for the user to stop writing
    // So we don´t have to make unnessesary calls, it will wait every hald a second, we always have a half a second
    this.timeout = setTimeout( () => {
      this.props.callback(this.state.value);
    }, 500);
  }

  render () {

    const { value } = this.state;

    return (
      <div className="searchbar">
        <div className="searchbar-content">
          <FontAwesome className="fa-search" name="search" size="2x" />
          <input
            type="text"
            className="searchbar-input"
            placeholder="Search"
            onChange={this.searching}
            value={value}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar;
