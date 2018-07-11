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
import Onboarding from './onboarding';

export default class GameStrat extends Component {
  render() {
    return (
      <section className="gameStrat">
        <Route className="header" path="/" component={Header} />
        <Route className="landing col" exact path="/" component={Landing} />
        <Route className="login col" exact path="/login" component={Login} />
        <Route
          className="register col"
          exact
          path="/login"
          component={Register}
        />
        <Route
          className="onboarding col"
          exact
          path="/welcome"
          component={Onboarding}
        />
        <Route
          className="searchGames col"
          exact
          path="/search"
          component={SearchGames}
        />
        <Route
          className="game col"
          exact
          path="/game/:gameId"
          component={Game}
        />
        <Route
          className="strat col"
          exact
          path="/game/:gameId/:stratId"
          component={Strat}
        />
        <Route
          className="addStrat col"
          exact
          path="/addStrat/:gameId"
          component={AddStrat}
        />
      </section>
    );
  }
}

// const mapStateToProps = state => ({
//   loggedIn: state.authRed.currentUser !== null
// });

// export default withRouter(connect(mapStateToProps)(GameStrat));
