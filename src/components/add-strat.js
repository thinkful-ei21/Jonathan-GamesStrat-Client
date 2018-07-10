import React, { Component } from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Link } from 'react-router-dom';

import requiresLogin from './requires-login';
import { saveStrat } from '../actions/save-strat';
import Input from './input';

export class AddStrat extends Component {
  onSubmit(vals) {
    const gameId = this.props.match.params.gameId;
    const { title, content } = vals;
    const newStrat = { title, content, gameId };
    return this.props
      .dispatch(saveStrat(newStrat))
      .then(() => this.props.history.push(`/game/${gameId}`));
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(vals => this.onSubmit(vals))}>
        <label htmlFor="title">Title</label>
        <Field
          name="title"
          id="title"
          type="text"
          component={Input}
          element="input"
        />
        <label htmlFor="content">Strategy</label>
        <Field
          name="content"
          id="content"
          type="text"
          component={Input}
          element="textarea"
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Save
        </button>
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
