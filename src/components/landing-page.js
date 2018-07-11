import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landing-page.css';

export default function Landing(props) {
  return (
    <section className="landingPage">
      <h1>Welcome to GameStrat</h1>
      <section className="description">
        <ul>
          <li>Looking for a way to beat that one boss?</li>
          <li>Can't seem to pass that one tricky level?</li>
          <li>That one achievement illuding you by a hair?</li>
          <li>Want that competitive edge to get the "W"?</li>
        </ul>
        <p>
          ...Then you have come to the right place! GameStrat is designed to
          allow fellow gamers to share their tricks and hints on how to overcome
          any/all obstacles that you might come up against. Register to
          contribute or feel free to browse and become a better gamer!
        </p>
      </section>
      <div className="buttons">
        <Link className="buttonLinks" to="/search">
          <button className="actualButtons">Search Games</button>
        </Link>
        <Link className="buttonLinks" to="/login">
          <button className="actualButtons">Login/Register</button>
        </Link>
      </div>
    </section>
  );
}
