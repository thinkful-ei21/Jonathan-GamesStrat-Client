import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div className="landingPage">
        <p>Website Description</p>
        <Link to="/search">
          <button>Search Games</button>
        </Link>
        <Link to="/login">
          <button>Login/Register</button>
        </Link>
      </div>
    );
  }
}
