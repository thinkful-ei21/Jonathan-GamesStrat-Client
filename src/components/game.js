import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchOneGame } from '../actions/game';

import StratList from './strat-list';

import '../styles/game.css';

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

  round(value) {
    const numVal = Number(value);
    return Math.round(100 * numVal) / 100;
  }

  render() {
    const game = this.props.game.map((oneGame, index) => {
      const cover = oneGame.cover ? (
        <img
          className="coverImg"
          src={oneGame.cover.url}
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
      const rating = oneGame.total_rating
        ? this.round(oneGame.total_rating)
        : 'Not Rated';
      return (
        <div role="article" className="mainGame" key={index}>
          {cover}
          <h3 className="titleOfGame">{oneGame.name}</h3>
          <span className="rating">Rating: {rating}</span>
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

const mapStateToProps = state => ({
  game: state.oneGameRed.game,
  loggedIn: state.authRed.currentUser !== null
});

export default connect(mapStateToProps)(Game);
