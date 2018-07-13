import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchOneGame } from '../actions/game';

import StratList from './strat-list';

import '../styles/game.css';
import noCover from '../images/noCover.png';

export class Game extends Component {
  componentDidMount() {
    const gameId = this.props.match.params.gameId;
    this.props.dispatch(fetchOneGame(gameId));
  }

  goBack(e) {
    e.preventDefault();
    const prevLocation = this.props.history.location.pathname;
    if (prevLocation !== `/addStrat/${this.props.match.params.gameId}`) {
      return this.props.history.push('/search');
    }
    return window.history.back();
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
          <div className="buttons">
            {addButton}
            <button className="backButton" onClick={e => this.goBack(e)}>
              Back
            </button>
          </div>
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
