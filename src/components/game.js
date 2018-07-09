import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchOneGame } from '../actions/game';
import StratList from './strat-list';

export class Game extends Component {
  componentDidMount() {
    this.props.dispatch(fetchOneGame(this.props.match.params.gameId));
  }

  checkLoggedIn() {
    console.log(this.props);
    if (this.props.loggedIn) {
      return <Link to={`${this.props.match.url}/addStrat`} />;
    }
  }

  render() {
    const game = this.props.game.map((oneGame, index) => {
      const cover = oneGame.cover ? (
        <img src={oneGame.cover.url} alt="cover of the game" />
      ) : null;
      return (
        <React.Fragment key={index}>
          {cover}
          <span>{oneGame.name}</span>
          <span>{oneGame.total_rating}</span>
          <p>{oneGame.summary}</p>
        </React.Fragment>
      );
    });
    return (
      <React.Fragment>
        {game}
        <Link to={`/addStrat/${this.props.match.params.gameId}`}>
          <button>+ New Strategy</button>
        </Link>
        <h3>Strategies</h3>
        <StratList gameId={this.props.match.params.gameId} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.oneGameRed);
  return {
    game: state.oneGameRed.game,
    loggedIn: state.authRed.currentUser !== null
  };
};

export default connect(mapStateToProps)(Game);
