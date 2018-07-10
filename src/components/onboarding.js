import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import requiresLogin from './requires-login';

export class Onboarding extends Component {
  render() {
    return (
      <section className="onboarding">
        <h1>Welcome to GameStrat</h1>
        <p>
          Now that you are a User, you will be able to contribute to the cause.
          You will now have the following privileges:
        </p>
        <ul>
          <li>Add strategies to your favorite games</li>
          <li>Manage and keep track of all of your strategies</li>
          <li>...more features to come...</li>
        </ul>
        <p>Let the collaboration begin...!</p>
        <Link to={'/search'}>
          <button className="">Let's GO!</button>
        </Link>
      </section>
    );
  }
}

Onboarding = requiresLogin()(Onboarding);

const mapStateToProps = state => ({
  loggedIn: state.authRed.currentUser !== null
});

export default connect(mapStateToProps)(Onboarding);
