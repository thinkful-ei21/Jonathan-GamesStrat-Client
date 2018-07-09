import React, { Component } from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import requiresLogin from './requires-login';
import { Link } from 'react-router-dom';
import { saveStrat } from '../actions/save-strat';

import Input from './input';

export class AddStrat extends Component {
  onSubmit(vals) {
    const gameId = this.props.match.params.gameId;
    const { title, strat } = vals;
    const newStrat = { title, strat, gameId };
    this.props
      .dispatch(saveStrat(newStrat))
      .then(() => this.props.history.push(`/game/${gameId}`));
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(vals => this.onSubmit(vals))}>
        <Field
          name="title"
          id="title"
          type="text"
          component={Input}
          element="input"
          label="Log Title"
          placeholder="LOG TITLE"
        />
        <Field
          name="strat"
          id="strat"
          type="text"
          component={Input}
          element="textarea"
          label="Strat"
          placeholder="ADD STRAT HERE"
        />
        <button>Save</button>
        <Link to={`/game/${this.props.match.params.gameId}`}>
          <button>Cancel</button>
        </Link>
      </form>
    );
  }
}

AddStrat = requiresLogin()(AddStrat);

export default reduxForm({
  form: 'strat',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('strat', Object.keys(errors)[0]))
})(AddStrat);
