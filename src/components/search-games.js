import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field, focus } from 'redux-form';

import { fetchGames, saveInputValue } from '../actions/game-search';

import Input from './input';

import '../styles/search-games.css';
import noCover from '../images/noCover.png';

export class SearchGames extends Component {
  onSubmit(vals) {
    if (!vals.searchInput) {
      return;
    } else {
      this.props.dispatch(fetchGames(vals.searchInput));
      this.props.dispatch(saveInputValue(vals.searchInput));
    }
  }

  render() {
    const games = this.props.games.map((game, index) => {
      const cover = game.cover ? (
        <img
          className="gameCover"
          src={game.cover.url}
          width="100"
          height="125"
          alt="cover of the game"
        />
      ) : (
        <img
          className="missingImg"
          src={noCover}
          width="100"
          height="125"
          alt="Missing Game Cover"
        />
      );
      return (
        <Link className="game" to={`/game/${game.id}`} key={index}>
          <li className="gameListItem">
            {cover}
            <div className="gameInfo">
              <h3 className="gameTitle">{game.name}</h3>
            </div>
          </li>
        </Link>
      );
    });
    let displayVal;
    if (!this.props.value) {
      displayVal = <p className="missingSearch"> PLEASE ENTER A SEARCH </p>;
    }

    return (
      <form
        role="search"
        className="searchForm"
        onSubmit={this.props.handleSubmit(vals => this.onSubmit(vals))}
      >
        <div className="gameSearchSearchBar">
          <label className="searchLabel" htmlFor="searchInput">
            Search Results for:
            <span className="diplayedSearchValue"> {this.props.value}</span>
          </label>
          <div className="searhFeatures">
            <Field
              name="searchInput"
              id="searchInput"
              type="text"
              component={Input}
              element="input"
              placeholder="Search"
            />
            <button className="searchButton">Search</button>
          </div>
        </div>
        {displayVal}
        <ul className="gameList">{games}</ul>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  games: state.gamesRed.games,
  value: state.gamesRed.value
});

const searchGames = connect(mapStateToProps)(SearchGames);

export default reduxForm({
  form: 'search',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('search', Object.keys(errors)[0]))
})(searchGames);
