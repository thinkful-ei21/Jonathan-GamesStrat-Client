import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../actions';

export class GameStrat extends Component {
  componentDidMount() {
    this.props.dispatch(fetchGames());
  }

  render() {
    this.games = this.props.games.map((game, index) => (
      <li key={index}>{game}</li>
    ));

    return <ul>{this.games}</ul>;
  }
}

const mapStateToProps = state => ({
  games: state.games
});

export default connect(mapStateToProps)(GameStrat);