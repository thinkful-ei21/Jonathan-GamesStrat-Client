import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import '../styles/header.css';

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
            <button className="button" onClick={() => this.onLogOut()}>
              LogOut
            </button>
          </React.Fragment>
        );
      } else {
        cornerButton = (
          <Link to="/login">
            <button className="button">LogIn</button>
          </Link>
        );
      }
    }

    let title;
    if (location === '/' || location === '/welcome') {
      title = <h1 className="title">GameStrat</h1>;
    } else {
      title = (
        <Link className="titleLink" to="/search">
          <h1 className="title">GameStrat</h1>
        </Link>
      );
    }
    return (
      <header>
        {title}
        {cornerButton}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.authRed.currentUser !== null
});

export default connect(mapStateToProps)(Header);
