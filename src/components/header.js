import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

import '../styles/header.css';

export class Header extends Component {
  onLogOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    const location = this.props.location.pathname;
    let searchButton;
    if (location !== '/' && location !== '/search' && location !== '/welcome') {
      searchButton = (
        <Link role="navigation" to="/search">
          <button className="button headerSearchButton">Search</button>
        </Link>
      );
    }

    let cornerButtons;

    if (location !== '/login' && location !== '/welcome') {
      if (this.props.loggedIn) {
        cornerButtons = (
          <React.Fragment>
            <button className="button" onClick={() => this.onLogOut()}>
              LogOut
            </button>
          </React.Fragment>
        );
      } else {
        cornerButtons = (
          <Link role="navigation" to="/login">
            <button className="button">LogIn</button>
          </Link>
        );
      }
    }

    return (
      <header role="banner">
        <h1 className="title">GameStrat</h1>;
        {searchButton}
        {cornerButtons}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.authRed.currentUser !== null
});

export default connect(mapStateToProps)(Header);
