import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import requiresLogin from './requires-login';

import '../styles/onboarding.css';

export class Onboarding extends Component {
  render() {
    return (
      <section className="onboarding">
        <h1 className="OBWelcomeMsg">Welcome to GameStrat</h1>
        <section role="article" className="welcomeMsg">
          <p>
            Now that you are a User, you will be able to contribute to the
            cause. You will now have the following privileges:
          </p>
          <ul>
            <li>Add strategies to your favorite games</li>
            <li>Manage and keep track of all of your strategies</li>
            <li>...more features to come...</li>
          </ul>
          <p>Let the collaboration begin...!</p>
        </section>
        <div className="OBbutton">
          <Link to={'/search'}>
            <button className="letsGoButton">Let's GO!</button>
          </Link>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.authRed.currentUser !== null
});

export default connect(mapStateToProps)(requiresLogin()(Onboarding));
