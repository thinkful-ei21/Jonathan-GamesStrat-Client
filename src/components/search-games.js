import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import { fetchGames } from '../actions/game-search';

import Input from './input';

export class SearchGames extends Component {
  onSubmit(vals) {
    console.log(vals.searchInput);
    this.props.dispatch(fetchGames(vals.searchInput));
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(vals => this.onSubmit(vals))}>
        <Field
          name="searchInput"
          id="searchInput"
          type="text"
          component={Input}
          element="input"
          label="Showing results for: (user input)"
          placeholder="SEARCH"
        />
        {/* <label>Filtered by:</label>
          <button>A-Z</button>
          <button>Rating</button>
          <select>
            <option value="">GENRE</option>
            <option value="action">ACTION</option>
            <option value="adventure">ADVENTURE</option>
            <option value="FPS">F.P.S.</option>
            <option value="MMO">M.M.O.</option>
          </select> */}

        {/* <ul>{this.games}</ul> */}
      </form>
    );
  }
}

export default reduxForm({
  form: 'search'
  // onSubmitFail: (errors, dispatch) =>
  //   dispatch(focus('search', Object.keys(errors)[0]))
})(SearchGames);
