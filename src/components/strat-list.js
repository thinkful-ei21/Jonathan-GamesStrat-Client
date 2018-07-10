import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStrats } from '../actions/strat-list';
import { deleteStrat } from '../actions/delete-strat';

export class StratList extends Component {
  componentDidMount() {
    const gameId = this.props.gameId;
    this.props.dispatch(fetchStrats(gameId));
  }
  deleteStrat(stratId) {
    const gameId = this.props.gameId;
    this.props
      .dispatch(deleteStrat(stratId))
      .then(() => this.props.dispatch(fetchStrats(gameId)));
  }
  render() {
    const gameId = this.props.gameId;
    const strats = this.props.strats.map((strat, index) => {
      let delButton;
      if (this.props.loggedIn && this.props.user.id === strat.userId.id) {
        delButton = (
          <button onClick={() => this.deleteStrat(strat.id)}>Delete</button>
        );
      }
      return (
        <li key={index}>
          <Link to={`/game/${gameId}/${strat.id}`}>{strat.title}</Link>
          {strat.userId.username}
          {delButton}
        </li>
      );
    });
    return <ul>{strats}</ul>;
  }
}

const mapStateToProps = state => ({
  strats: state.stratsRed.strats,
  user: state.authRed.currentUser,
  loggedIn: state.authRed.currentUser !== null
});

export default connect(mapStateToProps)(StratList);
