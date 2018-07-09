import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteStrat } from '../actions/delete-strat';
import { fetchOneStrat } from '../actions/strat';

export class Strat extends Component {
  componentDidMount() {
    const stratId = this.props.match.params.stratId;
    console.log(stratId);
    this.props
      .dispatch(fetchOneStrat(stratId))
      .then(() => console.log(this.props));
  }

  deleteStrat() {
    // this.props.dispatch(deleteStrat(this.props.stratId));
  }

  render() {
    return (
      <section>
        <h3>(Game: Log Title), Last Updated:(Date/Time)</h3>
        <p>STRAT GOES HERE</p>
        {/* <Link to={`/strategy/:${games.id}/edit`}>
          <button>Edit</button>
        </Link> */}
        {/* <Link to={`/strategy/:${games.id}/edit`}>
          <button>Edit</button>
        </Link> */}
        <button onClick={() => this.deleteStrat()}>Delete</button>
      </section>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.oneStratRed.strat);
  return {
    strat: state.oneStratRed.strat
  };
};

export default connect(mapStateToProps)(Strat);
