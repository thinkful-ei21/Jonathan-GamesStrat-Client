import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../actions';

export class GameStrat extends Component {
  componentDidMount() {
    this.props.dispatch(fetchGames());
  }

  render() {
    this.games = this.props.games.map((game, index) => (
      <li key={index}>{game}</li>
    ));

    return (
      <section>
        <span>HELLO!</span>
        <ul>{this.games}</ul>

        {/* <h1>Welcome to GameStrat</h1>
        <div className="landingPage">
          <p>Website Description</p>
          <button>Search Games</button>
          <button>Log-in/Register</button>
        </div> */}

        {/* <form className="loginReg">
          <h2>Please Log-in or Register as a New User</h2>
          <label>Log-in</label>
          <input type="text" className="username" placeholder="USERNAME" />
          <input type="text" className="password" placeholder="PASSWORD" />
          <button>Log-in</button>
          <label>Log-in</label>
          <input type="text" className="username" placeholder="USERNAME" />
          <input type="text" className="password" placeholder="PASSWORD" />
          <input
            type="text"
            className="verifyPassword"
            placeholder="Verify PASSWORD"
          />
          <button>Register</button>
        </form> */}

        {/* <div className="searchPage">
          <h2>GameStrat</h2>
          <button>Profile</button>
          <p>Showing results for: (userInput)</p>
          <label>Filtered by:</label>
          <button>A-Z</button>
          <button>Rating</button>
          <select>
            <option value="">GENRE</option>
            <option value="action">ACTION</option>
            <option value="adventure">ADVENTURE</option>
            <option value="FPS">F.P.S.</option>
            <option value="MMO">M.M.O.</option>
          </select>
          <input type="text" placeholder="SEARCH" />
          <ul>{this.games}</ul>
        </div> */}

        {/* <div className="strat">
          <h2>GameStrat</h2>
          <button>Profile</button>
          <form>
            <label>
              (Game: Log Title), (TAGS: list of tags), Last Updated:(Date/Time)
            </label>
            <p>STRAT GOES HERE</p>
            <button>Edit</button>
            <button>Back</button>
            <button>Delete</button>
          </form>
        </div> */}

        {/* <div className="editStrat">
          <h2>GameStrat</h2>
          <button>Profile</button>
          <form>
            <input type="text" placeholder="Log Title" />
            <input type="text" placeholder="Log Tags" />
            <textarea placeholder="ADD STRAT HERE" />
            <button>Save</button>
            <button>Cancel</button>
          </form>
        </div> */}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  games: state.games
});

export default connect(mapStateToProps)(GameStrat);
