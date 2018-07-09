import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';

import Landing from './landing-page';
import Strat from './strat';
import Login from './login';
import Register from './register';
import SearchGames from './search-games';
import Game from './game';
import AddStrat from './add-strat';
import Header from './header';

export default class GameStrat extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/login" component={Register} />
        <Route exact path="/search" component={SearchGames} />
        <Route exact path="/game/:gameId" component={Game} />
        <Route exact path="/game/:gameId/:stratId" component={Strat} />
        <Route exact path="/addStrat/:gameId" component={AddStrat} />
      </section>
    );
  }
}

// const mapStateToProps = state => ({
//   loggedIn: state.authRed.currentUser !== null
// });

// export default withRouter(connect(mapStateToProps)(GameStrat));
