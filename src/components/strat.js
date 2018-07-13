import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { deleteStrat } from '../actions/delete-strat';
import { fetchOneStrat } from '../actions/strat';
import { fetchOneGame } from '../actions/game';

import '../styles/strat.css';

export class Strat extends Component {
  componentDidMount() {
    const stratId = this.props.match.params.stratId;
    const gameId = this.props.match.params.gameId;
    this.props
      .dispatch(fetchOneStrat(stratId))
      .then(() => this.props.dispatch(fetchOneGame(gameId)));
  }

  goBack(e) {
    e.preventDefault();
    return window.history.back();
  }

  deleteStrat() {
    const stratId = this.props.match.params.stratId;
    const gameId = this.props.match.params.gameId;
    this.props
      .dispatch(deleteStrat(stratId))
      .then(() => this.props.history.push(`/game/${gameId}`));
  }

  round(value) {
    const numVal = Number(value);
    return Math.round(100 * numVal) / 100;
  }

  render() {
    const aStrat = this.props.strat;
    const game = this.props.game.map((oneGame, index) => {
      const cover = oneGame.cover ? (
        <img src={oneGame.cover.url} alt="cover of the game" />
      ) : null;
      const rating = oneGame.total_rating
        ? this.round(oneGame.total_rating)
        : 'Not Rated';
      return (
        <div className="stratGame" key={index}>
          {cover}
          <h3>{oneGame.name}</h3>
          <span>Rating: {rating}</span>
        </div>
      );
    });

    let delButton;
    if (this.props.loggedIn && this.props.user.id === aStrat.userId) {
      delButton = (
        <button className="stratDelButton" onClick={() => this.deleteStrat()}>
          Delete
        </button>
      );
    }
    return (
      <section className="stratPage">
        {game}
        <div>
          <h3>{aStrat.title}</h3>
          <div className="createdBackButtonRow">
            <span>
              Created:{' '}
              {moment(aStrat.createdAt).format('MMMM, Do YYYY, h:mm a')}{' '}
            </span>
            <button className="backButton" onClick={e => this.goBack(e)}>
              Back
            </button>
          </div>
        </div>
        <p className="description">{aStrat.content}</p>
        {delButton}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  strat: state.oneStratRed.strat,
  game: state.oneGameRed.game,
  user: state.authRed.currentUser,
  loggedIn: state.authRed.currentUser !== null
});

export default connect(mapStateToProps)(Strat);
