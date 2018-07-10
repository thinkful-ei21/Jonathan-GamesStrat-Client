import React, { Component } from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { fetchGames } from '../actions/game-search';
import { connect } from 'react-redux';

import Input from './input';

export class SearchGames extends Component {
  onSubmit(vals) {
    this.props.dispatch(fetchGames(vals.searchInput));
  }

  render() {
    const games = this.props.games.map((game, index) => {
      const cover = game.cover ? (
        <img src={game.cover.url} alt="cover of the game" />
      ) : null;
      return (
        <li key={index}>
          <a href={`/game/${game.id}`}>{game.name} </a> {cover}
        </li>
      );
    });

    return (
      <form onSubmit={this.props.handleSubmit(vals => this.onSubmit(vals))}>
        <label htmlFor="searchInput">Search Results for: </label>
        <Field
          name="searchInput"
          id="searchInput"
          type="text"
          component={Input}
          element="input"
          placeholder="Search"
        />
        <button>Search</button>
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

        <ul>{games}</ul>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  games: state.gamesRed.games
});

SearchGames = connect(mapStateToProps)(SearchGames);

export default reduxForm({
  form: 'search',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('search', Object.keys(errors)[0]))
})(SearchGames);
