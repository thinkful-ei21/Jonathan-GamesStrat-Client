import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

export class Header extends Component {
  onLogOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let cornerButton;
    const location = this.props.location.pathname;
    if (location !== '/' && location !== '/login' && location !== '/welcome') {
      if (this.props.loggedIn) {
        cornerButton = (
          <React.Fragment>
            {/* <button>My Strategies</button> */}
            <button onClick={() => this.onLogOut()}>LogOut</button>
          </React.Fragment>
        );
      } else {
        cornerButton = (
          <Link to="/login">
            <button>LogIn</button>
          </Link>
        );
      }
    }

    let title;
    if (location !== '/' && location !== '/welcome') {
      title = (
        <Link to="/search">
          <h1>GameStrat</h1>
        </Link>
      );
    }
    return (
      <section>
        {title}
        {cornerButton}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.authRed.currentUser !== null
});

export default connect(mapStateToProps)(Header);
