import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchGames } from '../actions/game-search';

import EditStrat from './edit-strat';
import Landing from './landing-page';
import Strat from './strat';
import Login from './login';
import Register from './register';
import SearchGames from './search-games';

export class GameStrat extends Component {
  render() {
    const games = this.props.games.map((game, index) => {
      const cover = game.cover ? (
        <img src={game.cover.url} alt="cover of the game" />
      ) : null;
      return (
        <li key={index}>
          {game.name} {cover}
        </li>
      );
    });

    return (
      <section>
        <h1>GameStrat</h1>
        <button>Profile</button>
        {/* <Landing /> */}
        <Login />
        <Register />
        {/* <SearchGames /> */}
        {/* <Strat /> */}
        {/* <EditStrat /> */}
        {/* <ul>{games}</ul> */}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  games: state.games.games
});

export default connect(mapStateToProps)(GameStrat);
