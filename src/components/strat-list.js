import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStrats } from '../actions/strat-list';
import { deleteStrat } from '../actions/delete-strat';

export class StratList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchStrats(this.props.gameId));
  }
  deleteStrat() {
    console.log(this.props.gameId);
    this.props.dispatch(deleteStrat(this.props.gameId));
    this.props.dispatch(fetchStrats(this.props.gameId));
  }
  render() {
    const gameId = this.props.gameId;
    const strats = this.props.strats.map((strat, index) => {
      return (
        <li key={index}>
          <Link to={`/game/${gameId}/${strat.id}`}>{strat.title} </Link>
          <button onClick={() => this.deleteStrat()}>Delete</button>
        </li>
      );
    });
    return <ul>{strats}</ul>;
  }
}

const mapStateToProps = state => ({
  strats: state.stratsRed.strats
});

export default connect(mapStateToProps)(StratList);
