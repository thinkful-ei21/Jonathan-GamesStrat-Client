import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
        <img src={oneGame.cover.url} alt="cover of the game" />
      ) : null;
      return (
        <React.Fragment key={index}>
          {cover}
          <h3>{oneGame.name}</h3>
          <span>Rating: {oneGame.total_rating}</span>
          <p>{oneGame.summary}</p>
        </React.Fragment>
      );
    });

    let addButton;
    if (this.props.loggedIn) {
      addButton = (
        <Link to={`/addStrat/${this.props.match.params.gameId}`}>
          <button>+ New Strategy</button>
        </Link>
      );
    }
    return (
      <React.Fragment>
        {game}
        {addButton}
        {/* <Link to={`/addStrat/${this.props.match.params.gameId}`}>
          <button>+ New Strategy</button>
        </Link> */}
        <h3>Strategies</h3>
        <StratList gameId={this.props.match.params.gameId} />
      </React.Fragment>
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
