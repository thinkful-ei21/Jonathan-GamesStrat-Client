import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../styles/game.css';
import { fetchOneGame } from '../actions/game';
import StratList from './strat-list';

export class Game extends Component {
  componentDidMount() {
    const gameId = this.props.match.params.gameId;
    this.props.dispatch(fetchOneGame(gameId));
  }

  checkLoggedIn() {
    const url = this.props.match.url;
    if (this.props.loggedIn) {
      return <Link to={`${url}/addStrat`} />;
    }
  }

  render() {
    const game = this.props.game.map((oneGame, index) => {
      const cover = oneGame.cover ? (
        <img
          className="coverImg"
          src={oneGame.cover.url}
          alt="cover of the game"
        />
      ) : null;
      return (
        <div className="mainGame" key={index}>
          {cover}
          <h3>{oneGame.name}</h3>
          <span>Rating: {oneGame.total_rating}</span>
          <p className="description">{oneGame.summary}</p>
        </div>
      );
    });

    let addButton;
    if (this.props.loggedIn) {
      addButton = (
        <Link to={`/addStrat/${this.props.match.params.gameId}`}>
          <button className="newButton">+ New Strategy</button>
        </Link>
      );
    }
    return (
      <section className="gamePage">
        {game}
        <div className="stratListHeader">
          <h3>Strategies</h3>
          {addButton}
        </div>
        <StratList gameId={this.props.match.params.gameId} />
      </section>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.oneGameRed);
  return {
    game: state.oneGameRed.game,
    loggedIn: state.authRed.currentUser !== null
  };
};

export default connect(mapStateToProps)(Game);
