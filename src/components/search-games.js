import React, { Component } from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Link } from 'react-router-dom';
import { fetchGames, saveInputValue } from '../actions/game-search';
import { connect } from 'react-redux';
import '../styles/search-games.css';

import Input from './input';

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
          alt="cover of the game"
        />
      ) : (
        <div className="missingImg">Game Image Missing</div>
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
        className="searchForm"
        onSubmit={this.props.handleSubmit(vals => this.onSubmit(vals))}
      >
        <label className="searchLabel" htmlFor="searchInput">
          Search Results for: {this.props.value}
        </label>
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
          </select> */}

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
