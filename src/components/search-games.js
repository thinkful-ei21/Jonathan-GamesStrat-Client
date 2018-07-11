import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field, focus } from 'redux-form';

import { fetchGames, saveInputValue } from '../actions/game-search';

import Input from './input';

import '../styles/search-games.css';

export class SearchGames extends Component {
  onSubmit(vals) {
    this.props.dispatch(fetchGames(vals.searchInput));
    this.props.dispatch(saveInputValue(vals.searchInput));
  }

  render() {
    const games = this.props.games.map((game, index) => {
      const cover = game.cover ? (
        <img
          className="gameCover"
          src={game.cover.url}
          width="100"
          height="100"
          alt="cover of the game"
        />
      ) : (
        <img
          className="missingImg"
          src="http://tsp.aceplace.net/core/plugins/gallery/images/missing-img.jpg"
          width="100"
          height="100"
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
            {/* <label>Filtered by:</label>
          <button>A-Z</button>
          <button>Rating</button>
          <select>
            <option value="">GENRE</option>
            <option value="action">ACTION</option>
            <option value="adventure">ADVENTURE</option>
            <option value="FPS">F.P.S.</option>
            <option value="MMO">M.M.O.</option>
          </select> <------------------------feature to come*/}
          </div>
        </div>
        <ul className="gameList">{games}</ul>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  games: state.gamesRed.games,
  value: state.gamesRed.value
});

SearchGames = connect(mapStateToProps)(SearchGames);

export default reduxForm({
  form: 'search',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('search', Object.keys(errors)[0]))
})(SearchGames);
