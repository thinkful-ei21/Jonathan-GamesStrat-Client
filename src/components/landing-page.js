import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing(props) {
  return (
    <div className="landingPage">
      <h1>Welcome to GameStrat</h1>
      <ul>
        <li>Looking for a way to beat that one boss?</li>
        <li>Can't seem to pass that one tricky level?</li>
        <li>That one achievement illuding you by a hair?</li>
        <li>Want that competitive edge to get the "W"?</li>
      </ul>
      <p>
        ...Then you have come to the right place! GameStrat is designed to allow
        fellow gamers to share their tricks and hints on how to overcome any/all
        obstacles that you might come up against. Register to contribute or feel
        free to browse and become a better gamer!
      </p>
      <Link to="/search">
        <button>Search Games</button>
      </Link>
      <Link to="/login">
        <button>Login/Register</button>
      </Link>
    </div>
  );
}
