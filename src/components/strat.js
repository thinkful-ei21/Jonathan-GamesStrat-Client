import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { deleteStrat } from '../actions/delete-strat';
import { fetchOneStrat } from '../actions/strat';
import { fetchOneGame } from '../actions/game';

export class Strat extends Component {
  componentDidMount() {
    const stratId = this.props.match.params.stratId;
    const gameId = this.props.match.params.gameId;
    this.props
      .dispatch(fetchOneStrat(stratId))
      .then(() => this.props.dispatch(fetchOneGame(gameId)));
  }

  deleteStrat() {
    const stratId = this.props.match.params.stratId;
    const gameId = this.props.match.params.gameId;
    this.props
      .dispatch(deleteStrat(stratId))
      .then(() => this.props.history.push(`/game/${gameId}`));
  }

  render() {
    const aStrat = this.props.strat;
    const game = this.props.game.map((oneGame, index) => {
      const cover = oneGame.cover ? (
        <img src={oneGame.cover.url} alt="cover of the game" />
      ) : null;
      return (
        <React.Fragment key={index}>
          {cover}
          <h3>{oneGame.name}</h3>
          <span>Rating: {oneGame.total_rating}</span>
        </React.Fragment>
      );
    });

    let delButton;
    if (this.props.loggedIn && this.props.user.id === aStrat.userId) {
      delButton = <button onClick={() => this.deleteStrat()}>Delete</button>;
    }
    return (
      <section>
        {game}
        <h3>{aStrat.title}</h3>
        <h4>
          Created: {moment(aStrat.createdAt).format('MMMM, Do YYYY, h:mm a')}{' '}
        </h4>
        <p>{aStrat.content}</p>
        {/*<button>Edit</button>*/}
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
