import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStrats } from '../actions/strat-list';
import { deleteStrat } from '../actions/delete-strat';

import '../styles/strat-list.css';

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
          <button
            className="delButton"
            onClick={() => this.deleteStrat(strat.id)}
          >
            Del
          </button>
        );
      }
      return (
        <div className="stratDelRow" key={index}>
          <Link className="strat" to={`/game/${gameId}/${strat.id}`}>
            <li className="listItem">
              <span className="stratTitle">Title: {strat.title}</span>
              <span className="user">Created by: {strat.userId.username}</span>
            </li>
          </Link>
          {delButton}
        </div>
      );
    });
    return <ul className="stratList">{strats}</ul>;
  }
}

const mapStateToProps = state => ({
  strats: state.stratsRed.strats,
  user: state.authRed.currentUser,
  loggedIn: state.authRed.currentUser !== null
});

export default connect(mapStateToProps)(StratList);
